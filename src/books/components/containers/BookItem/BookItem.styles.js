import { createUseStyles } from "react-jss";

export const useBookItemStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "26px",
    paddingBottom: "16px",
    borderBottom: `1px solid ${theme.borderColor}`,
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
}));
