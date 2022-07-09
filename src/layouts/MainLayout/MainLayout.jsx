import { Header } from "layouts/components/Header/Header";
import { useMainLayoutStyles } from "layouts/MainLayout/MainLayout.styles";
import { childrenPropType } from "propTypes/children";

export function MainLayout({ children }) {
  const classes = useMainLayoutStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: childrenPropType.isRequired,
};
