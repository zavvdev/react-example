import { createUseStyles } from "react-jss";

const useTypographyStyles = createUseStyles((theme) => ({
  root: {
    color: theme.typographyColor,
  },
}));

export { useTypographyStyles };
