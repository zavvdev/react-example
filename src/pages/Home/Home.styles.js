import { createAppUseStyles } from "styles/utils/createAppUseStyles";

const useHomeStyles = createAppUseStyles({
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

  buttonsWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
  },
});

export { useHomeStyles };
