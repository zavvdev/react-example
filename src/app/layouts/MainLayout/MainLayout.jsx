import { childrenPropType } from "app/propTypes/children";
import { useMainLayoutStyles } from "app/layouts/MainLayout/MainLayout.styles";
import { AppHeader } from "app/components/containers/AppHeader/AppHeader";

export function MainLayout({ children }) {
  const classes = useMainLayoutStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <AppHeader />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: childrenPropType.isRequired,
};
