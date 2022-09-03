import { createUseStyles } from "react-jss";

export const useThemeSwitchStyles = createUseStyles((theme) => ({
  root: {
    width: "40px",
    height: "25px",
    backgroundColor: theme.components.ThemeSwitch.trackBackgroundColor,
    borderRadius: "20px",
    position: "relative",
    border: "none",
    cursor: "pointer",
  },
  switcher: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: -1,
    backgroundColor: theme.palette.primary.main,
    padding: 5,
    boxSizing: "border-box",

    "& svg": {
      color: theme.palette.white.main,
      width: "17px",
    },
  },
  switcherDark: {
    right: -1,
    left: "unset",
  },
}));
