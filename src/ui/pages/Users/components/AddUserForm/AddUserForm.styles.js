import { createUseStyles } from "react-jss";

export const useAddUserFormStyles = createUseStyles({
  root: {
    marginBottom: "20px",
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(5, 150px)",

    "@media screen and (max-width: 880px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
