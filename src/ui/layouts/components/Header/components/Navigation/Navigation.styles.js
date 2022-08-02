import { createUseStyles } from "react-jss";

export const useNavigationStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginLeft: "42px",
  },
  navItem: {
    marginRight: "20px",
    textTransform: "uppercase",

    "& > *": {
      textDecoration: "none",
    },
  },
  navItemActive: {
    "& > *": {
      color: theme.palette.primary.main,
    },
  },
}));
