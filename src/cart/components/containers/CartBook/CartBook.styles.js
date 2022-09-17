import { createUseStyles } from "react-jss";

export const useCartBookStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "16px",
    paddingBottom: "16px",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width: 450px)": {
      display: "block",
    },
  },
  cover: {
    height: "90px",
    marginRight: "16px",
  },
  title: {
    fontSize: "15px",
    margin: "0 0 5px 0",
  },
  removeBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    height: "40px",
    minWidth: "50px",
  },
  price: {
    fontWeight: "bold",
    marginTop: "8px",
  },
}));
