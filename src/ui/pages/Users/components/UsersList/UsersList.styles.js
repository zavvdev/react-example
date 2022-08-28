import { createUseStyles } from "react-jss";

export const useUsersListStyles = createUseStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
  },
  error: {
    color: theme.palette.red.main,
  },
}));
