import { createUseStyles } from "react-jss";

export const useAppHeaderStyles = createUseStyles((theme) => ({
  root: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  logo: {
    textTransform: "uppercase",
    fontWeight: "lighter",
    color: "inherit",
    textDecoration: "none",
    fontSize: "24px",
  },
  side: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    "&:last-child": {
      justifyContent: "flex-end",
    },
  },
  cart: {
    color: "inherit",
  },
}));