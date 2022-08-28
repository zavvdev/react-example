import * as Yup from "yup";
import { FORM_VALIDATION_ERROR_TYPES } from "ui/config/formValidation";

export const FORM_FIELD_TYPES = {
  name: "name",
  email: "email",
  company: "company",
  role: "role",
};

export const FORM_INITIAL_VALUES = {
  [FORM_FIELD_TYPES.name]: "",
  [FORM_FIELD_TYPES.email]: "",
  [FORM_FIELD_TYPES.company]: "",
  [FORM_FIELD_TYPES.role]: "",
};

export const FORM_VALIDATION_SCHEMA = Yup.object({
  [FORM_FIELD_TYPES.name]: Yup.string()
    .trim()
    .required(FORM_VALIDATION_ERROR_TYPES.required),
  [FORM_FIELD_TYPES.email]: Yup.string()
    .trim()
    .email(FORM_VALIDATION_ERROR_TYPES.invalidEmailFormat)
    .required(FORM_VALIDATION_ERROR_TYPES.required),
  [FORM_FIELD_TYPES.company]: Yup.string()
    .trim()
    .required(FORM_VALIDATION_ERROR_TYPES.required),
  [FORM_FIELD_TYPES.role]: Yup.string()
    .trim()
    .required(FORM_VALIDATION_ERROR_TYPES.required),
});
