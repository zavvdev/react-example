import { createUseStyles } from "react-jss";

export const useUserTileStyles = createUseStyles((theme) => ({
  root: {
    padding: "20px",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "10px",
  },
  name: {
    margin: "0 0 10px 0",
  },
  company: {
    marginTop: "10px",
  },
}));
