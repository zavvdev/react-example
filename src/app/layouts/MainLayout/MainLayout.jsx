import { childrenPropType } from "app/propTypes/children";
import { useMainLayoutStyles } from "app/layouts/MainLayout/MainLayout.styles";
import { Containers } from "app/components/containers";

export function MainLayout({ children }) {
  const classes = useMainLayoutStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Containers.AppHeader />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: childrenPropType.isRequired,
};
