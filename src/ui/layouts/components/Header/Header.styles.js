import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.borderColor}`,
    height: "80px",
  },

  logo: {
    height: "40px",
    width: "auto",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  themeSwitch: {
    marginRight: "16px",
  },
}));
