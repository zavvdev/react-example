import { createUseStyles } from "react-jss";

export const useInputStyles = createUseStyles((theme) => ({
  input: {
    padding: "10px",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "5px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColor,
    height: "35px",
    color: theme.typographyColor,

    "&:focus": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  inputError: {
    border: `1px solid ${theme.palette.red.main}`,

    "&:focus": {
      border: `1px solid ${theme.palette.red.main}`,
    },

    "&::placeholder": {
      color: theme.palette.red.main,
    },
  },
  error: {
    color: theme.palette.red.main,
    fontSize: "12px",
    marginTop: "5px",
  },
  fullWidth: {
    width: "100%",
  },
}));
