import { createUseStyles } from "react-jss";

const useHeaderStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.borderColor}`,
    height: "80px",
  },

  logo: {
    height: "40px",
    width: "auto",
  },
}));

export { useHeaderStyles };
