import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppTranslation } from "order/gateway/input";

export function useOrderForm({ onSubmit }) {
  const appTranslation = useAppTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email(appTranslation.formValidationKeys.invalidEmailFormat)
      .required(appTranslation.formValidationKeys.required),
  });

  const initialValues = {
    email: "",
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    isValid,
    touched,
  } = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    onSubmit: () => {
      onSubmit({ email: values.email });
    },
  });

  const getFieldError = (fieldType) => {
    let result;
    const errorType = errors[fieldType];
    if (errorType && touched[fieldType]) {
      result = appTranslation.t(`formValidationErrors.${errorType}`);
    }
    return result;
  };

  return {
    values,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
    getFieldError,
  };
}
