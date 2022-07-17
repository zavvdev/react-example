import { childrenPropType } from "ui/propTypes/children";
import { Header } from "ui/layouts/components/Header/Header";
import { useMainLayoutStyles } from "ui/layouts/MainLayout/MainLayout.styles";

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
