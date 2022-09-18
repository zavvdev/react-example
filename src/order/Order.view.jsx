import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useOrderStyles } from "order/Order.styles";
import { usePostOrderMutation } from "order/store/api";
import { ORDER_I18N_NAMESPACE } from "order/i18n";
import {
  clearBooksCart,
  FORM_VALIDATION_ERROR_TYPES,
  GENERAL_ROUTES,
  I18N_NAMESPACES,
  selectCartBooks,
  Shared,
} from "order/gateway/input";

export function OrderView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation(ORDER_I18N_NAMESPACE);
  const cartBooks = useSelector(selectCartBooks);
  const classes = useOrderStyles();

  const [postOrder, { isLoading, isError, isSuccess }] = usePostOrderMutation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email(FORM_VALIDATION_ERROR_TYPES.invalidEmailFormat)
      .required(FORM_VALIDATION_ERROR_TYPES.required),
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
      postOrder({
        email: values.email,
        books: cartBooks,
      });
    },
  });

  const getFieldError = (fieldType) => {
    let result = null;
    const errorType = errors[fieldType];
    if (errorType && touched[fieldType]) {
      result = t(`${I18N_NAMESPACES.common}:formValidationErrors.${errorType}`);
    }
    return result;
  };

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line no-alert
      alert(t("orderError"));
    }
  }, [isError, t]);

  useEffect(() => {
    if (isSuccess) {
      // eslint-disable-next-line no-alert
      alert(t("orderSuccess"));
      dispatch(clearBooksCart());
      navigate(GENERAL_ROUTES.books);
    }
  }, [dispatch, isSuccess, navigate, t]);

  return (
    <div>
      {cartBooks.length > 0 ? (
        <div>
          <ul>
            {cartBooks.map(({ title }) => (
              <Shared.Typography className={classes.li} key={title} tag="li">
                {title}
              </Shared.Typography>
            ))}
          </ul>
          <div className={classes.formWrap}>
            <Shared.Input
              type="email"
              name="email"
              value={values.email}
              placeholder={t("email")}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={getFieldError("email")}
            />
            <Shared.Button
              disabled={!isValid || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? t("submitting") : t("submit")}
            </Shared.Button>
          </div>
        </div>
      ) : (
        <div>
          <Shared.Typography>{t("empty")}</Shared.Typography>
          <Shared.Typography tag="div">
            <Link to={GENERAL_ROUTES.books}>{t("selectBooks")}</Link>
          </Shared.Typography>
        </div>
      )}
    </div>
  );
}
