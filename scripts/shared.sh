name="$(echo $1 | tr '[A-Z]' '[a-z]')"
nameUppercase="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"
if [ ! -d "src/app/components/shared/${nameUppercase}" ]
then
mkdir -p src/app/components/shared/${nameUppercase};
touch src/app/components/shared/${nameUppercase}/${nameUppercase}.jsx
touch src/app/components/shared/${nameUppercase}/${nameUppercase}.styles.js

cat <<EOT >> src/app/components/shared/${nameUppercase}/${nameUppercase}.styles.js
import { createUseStyles } from "react-jss";

export const use${nameUppercase}Styles = createUseStyles({
  root: {},
});
EOT

cat <<EOT >> src/app/components/shared/${nameUppercase}/${nameUppercase}.jsx
import PropTypes from "prop-types";
import { use${nameUppercase}Styles } from "app/components/shared/${nameUppercase}/${nameUppercase}.styles";

export function ${nameUppercase}({ property }) {
  const classes = use${nameUppercase}Styles();
  return (
    <div className={classes.root}>
      ${nameUppercase} shared component. Property is: {property}
    </div>
  );
}

${nameUppercase}.propTypes = {
  property: PropTypes.number,
};

${nameUppercase}.defaultProps = {
  property: 42,
};
EOT
fi

if [[ -f "src/app/component/shared/index.js" ]]
then
touch src/app/component/shared/index.js
cat <<EOT >> src/app/components/shared/index.js
import { ${nameUppercase} } from "app/components/shared/${nameUppercase}/${nameUppercase}";

export const Shared = {
 ${nameUppercase},
};

EOT
else
# add shared component to the registry
fi