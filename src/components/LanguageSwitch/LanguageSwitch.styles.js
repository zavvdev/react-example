import { createAppUseStyles } from "styles/utils/createAppUseStyles";

const useLanguageSwitchStyles = createAppUseStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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
  },

  active: {
    color: theme.palette.primary.main,
  },
}));

export { useLanguageSwitchStyles };
