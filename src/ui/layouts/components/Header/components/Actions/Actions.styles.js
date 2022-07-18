import { createUseStyles } from "react-jss";

const useActionsStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  themeSwitch: {
    marginRight: "16px",
  },
});

export { useActionsStyles };
