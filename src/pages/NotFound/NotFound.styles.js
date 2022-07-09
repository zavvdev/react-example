import { createUseStyles } from "react-jss";

const useNotFoundStyles = createUseStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: "142px",

    "& span": {
      fontSize: "30px",
      color: theme.palette.black.light,
    },
  },

  btn: {
    margin: "42px auto 0 auto",
  },
}));

export { useNotFoundStyles };
