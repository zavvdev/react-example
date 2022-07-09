import { createUseStyles } from "react-jss";

const useHeaderStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    height: "80px",
  },

  logo: {
    height: "40px",
  },
}));

export { useHeaderStyles };
