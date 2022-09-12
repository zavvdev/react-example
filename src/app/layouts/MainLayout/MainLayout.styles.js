import { createUseStyles } from "react-jss";

export const useMainLayoutStyles = createUseStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    minHeight: "100vh",
    backgroundColor: theme.backgroundColor,
    padding: "0 5%",
  },
  inner: {
    maxWidth: "500px",
    margin: "0 auto",
    paddingBottom: "200px",
  },
  content: {
    paddingTop: "16px",
  },
}));
