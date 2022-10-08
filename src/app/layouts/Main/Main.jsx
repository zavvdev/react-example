import { childrenPropType } from "app/propTypes";
import { useMainStyles } from "app/layouts/Main/Main.styles";
import { Containers } from "app/containers";

export function Main({ children }) {
  const classes = useMainStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Containers.AppHeader />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: childrenPropType.isRequired,
};
