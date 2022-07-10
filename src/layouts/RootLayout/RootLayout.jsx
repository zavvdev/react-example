import { useRootLayoutStyles } from "layouts/RootLayout/RootLayout.styles";
import { childrenPropType } from "propTypes/children";

function RootLayout({ children }) {
  const classes = useRootLayoutStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

RootLayout.propTypes = {
  children: childrenPropType.isRequired,
};

export { RootLayout };
