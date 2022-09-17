import { createUseStyles } from "react-jss";

export const useOrderStyles = createUseStyles({
  li: {
    marginBottom: "8px",
  },
  formWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& button": {
      marginTop: "10px",
    },
  },
});
