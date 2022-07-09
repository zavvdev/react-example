import { createAppUseStyles } from "styles/utils/createAppUseStyles";

const useHeaderStyles = createAppUseStyles((theme) => ({
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
