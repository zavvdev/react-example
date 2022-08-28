import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { usersApiActions } from "core/store/api/users/actions";
import { selectUsersApiPostOneIsLoaded, selectUsersApiPostOneIsLoading } from "core/store/api/users/selectors";
import { Button } from "ui/components/Button/Button";
import { Input } from "ui/components/Input/Input";
import { useAddUserFormStyles } from "ui/pages/Users/components/AddUserForm/AddUserForm.styles";
import {
  FORM_FIELD_TYPES,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA,
} from "ui/pages/Users/components/AddUserForm/AddUserForm.config";
import { NAMESPACES } from "ui/i18n/config";

export function AddUserForm() {
  const { t } = useTranslation([NAMESPACES.users, NAMESPACES.common]);
  const classes = useAddUserFormStyles();
  const dispatch = useDispatch();

  const isPosting = useSelector(selectUsersApiPostOneIsLoading);
  const isPosted = useSelector(selectUsersApiPostOneIsLoaded);
  // const isError = useSelector(selectUsersApiPostOneIsError);

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    isValid,
    touched,
    resetForm,
  } = useFormik({
    validationSchema: FORM_VALIDATION_SCHEMA,
    initialValues: FORM_INITIAL_VALUES,
    enableReinitialize: true,
    onSubmit: () => {
      dispatch(usersApiActions.postOne({
        name: values[FORM_FIELD_TYPES.name],
        email: values[FORM_FIELD_TYPES.email],
        company: values[FORM_FIELD_TYPES.company],
        role: values[FORM_FIELD_TYPES.role],
      }));
    },
  });

  const getFieldError = (fieldType) => {
    let result = null;
    const errorType = errors[fieldType];
    if (errorType && touched[fieldType]) {
      result = t(`${NAMESPACES.common}:formValidationErrors.${errorType}`);
    }
    return result;
  };

  useEffect(() => {
    if (isPosted) {
      resetForm();
    }
  }, [isPosted, resetForm]);

  return (
    <div className={classes.root}>
      <Input
        fullWidth
        name={FORM_FIELD_TYPES.name}
        value={values[FORM_FIELD_TYPES.name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Name"
        errorText={getFieldError(FORM_FIELD_TYPES.name)}
      />
      <Input
        fullWidth
        name={FORM_FIELD_TYPES.email}
        value={values[FORM_FIELD_TYPES.email]}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Email"
        errorText={getFieldError(FORM_FIELD_TYPES.email)}
      />
      <Input
        fullWidth
        name={FORM_FIELD_TYPES.company}
        value={values[FORM_FIELD_TYPES.company]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Company"
        errorText={getFieldError(FORM_FIELD_TYPES.company)}
      />
      <Input
        fullWidth
        name={FORM_FIELD_TYPES.role}
        value={values[FORM_FIELD_TYPES.role]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Role"
        errorText={getFieldError(FORM_FIELD_TYPES.role)}
      />
      <Button
        fullWidth
        type="submit"
        disabled={!isValid || isPosting}
        onClick={handleSubmit}
      >
        {isPosting
          ? t(`${NAMESPACES.common}:labels.loading`)
          : t("form.submit")}
      </Button>
    </div>
  );
}
