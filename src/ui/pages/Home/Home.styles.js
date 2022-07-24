import { createUseStyles } from "react-jss";

export const useHomeStyles = createUseStyles({
  root: {
    textAlign: "center",
    paddingTop: "42px",

    "& h1": {
      fontSize: "50px",
    },

    "& p": {
      fontSize: "20px",
    },
  },
});
