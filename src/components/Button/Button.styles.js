import { createAppUseStyles } from "styles/utils/createAppUseStyles";

const useButtonStyles = createAppUseStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: theme.palette.white.main,
    padding: "10px 20px",
    fontSize: "20px",
    fontWeight: 500,
    borderRadius: "5px",
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    width: "max-content",

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
    backgroundColor: "green",
  },
}));

export { useButtonStyles };
