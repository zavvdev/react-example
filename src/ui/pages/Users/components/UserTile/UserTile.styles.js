import { createUseStyles } from "react-jss";

export const useUserTileStyles = createUseStyles((theme) => ({
  root: {
    padding: "20px",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "10px",
    position: "relative",

    "&:hover $deleteBtn": {
      display: "block",
    },
  },
  name: {
    margin: "0 0 10px 0",
  },
  company: {
    marginTop: "10px",
  },
  deleteBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    color: theme.palette.red.dim,
    cursor: "pointer",
    display: "none",

    "&:hover": {
      color: theme.palette.red.main,
    },
  },
  deleteBtnDeleting: {
    display: "block",
  },
}));
