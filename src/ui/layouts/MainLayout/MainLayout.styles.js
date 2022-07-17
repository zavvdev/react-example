import { createUseStyles } from "react-jss";

const useMainLayoutStyles = createUseStyles((theme) => ({
  root: {
    padding: "0 5% 200px 5%",
    boxSizing: "border-box",
    minHeight: "100vh",
    backgroundColor: theme.backgroundColor,
  },

  content: {
    paddingTop: "42px",
  },
}));

export { useMainLayoutStyles };
