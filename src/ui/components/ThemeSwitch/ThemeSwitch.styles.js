import { createUseStyles } from "react-jss";

const useThemeSwitchStyles = createUseStyles((theme) => ({
  root: {
    width: "40px",
    height: "10px",
    backgroundColor: theme.palette.gray.light,
    borderRadius: "10px",
    position: "relative",
    border: "none",
    cursor: "pointer",
  },
  switcher: {
    height: "23px",
    width: "23px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: 0,
    backgroundColor: theme.palette.gray.light,
    padding: 5,
    boxSizing: "border-box",
  },
  switcherToDark: {
    backgroundColor: theme.palette.black.main,

    "& svg": {
      color: theme.palette.white.main,
    },
  },
}));

export { useThemeSwitchStyles };
