import { createUseStyles } from "react-jss";

export const useThemeSwitchStyles = createUseStyles((theme) => ({
  root: {
    width: "40px",
    height: "20px",
    backgroundColor: theme.components.ThemeSwitch.trackBackgroundColor,
    borderRadius: "20px",
    position: "relative",
    border: "none",
    cursor: "pointer",
  },
  switcher: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: -1,
    fontSize: "30px",
  },
  switcherDark: {
    right: -1,
    left: "unset",
  },
}));
