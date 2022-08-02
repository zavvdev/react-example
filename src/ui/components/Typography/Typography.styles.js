import { createUseStyles } from "react-jss";

export const useTypographyStyles = createUseStyles((theme) => ({
  root: {
    color: theme.typographyColor,

    "& > *": {
      color: theme.typographyColor,
    },
  },
}));
