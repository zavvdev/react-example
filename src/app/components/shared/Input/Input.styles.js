import { createUseStyles } from "react-jss";

export const useInputStyles = createUseStyles((theme) => ({
  input: {
    padding: "5px 10px",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "2px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColor,
    color: theme.typographyColor,
    fontSize: "15px",
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
    fontSize: "11px",
    marginTop: "3px",
  },
}));
