import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { I18N_CONFIG } from "order/gateway/input";
import { ORDER_I18N_NAMESPACE } from "order/i18n/config";

export function useOrderForm({ onSubmit }) {
  const { t } = useTranslation(ORDER_I18N_NAMESPACE);

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email(I18N_CONFIG.formValidationKeys.invalidEmailFormat)
      .required(I18N_CONFIG.formValidationKeys.required),
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
      result = t(`${I18N_CONFIG.namespace}:formValidationErrors.${errorType}`);
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
