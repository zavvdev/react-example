import { createUseStyles } from "react-jss";

const useLanguageSwitchStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    color: theme.typographyColor,
  },

  langWrap: {
    "& span": {
      cursor: "pointer",
    },
  },

  lang: {
    cursor: "pointer",
    border: "none",
    background: "none",
    textTransform: "uppercase",
    padding: "10px",
    color: theme.typographyColor,
  },

  active: {
    color: theme.palette.primary.main,
  },
}));

export { useLanguageSwitchStyles };
