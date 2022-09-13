import { createUseStyles } from "react-jss";

export const useBookItemStyles = createUseStyles({
  root: {
    display: "flex",
    marginBottom: "36px",
    "@media screen and (max-width: 500px)": {
      display: "block",
    },
  },
  cover: {
    height: "210px",
    marginRight: "16px",
    marginBottom: "10px",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "20px",
    lineHeight: "25px",
  },
  infoWrap: {
    marginBottom: "16px",
  },
  price: {
    fontSize: "30px",
    fontWeight: "bolder",
  },
  addToCartBtn: {
    marginTop: "16px",
  },
});
