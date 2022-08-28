import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: theme.palette.white.main,
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "5px",
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    width: "max-content",
    height: "35px",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    marginRight: "10px",
    fill: theme.palette.white.main,
    width: "25px",
    display: "flex",
    alignItems: "center",
    marginLeft: "-3px",
  },
  disabled: {
    cursor: "default",
    pointerEvents: "none",
    opacity: 0.8,
  },
  fullWidth: {
    width: "100%",
  },
}));
