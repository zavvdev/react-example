import { createUseStyles } from "react-jss";

const useRootLayoutStyles = createUseStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.backgroundColor,
  },
}));

export { useRootLayoutStyles };
