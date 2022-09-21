name=$1
nameUppercase="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"
mkdir -p src/${name};
touch src/${name}/${nameUppercase}.jsx
touch src/${name}/${nameUppercase}.styles.js

cat <<EOT >> src/${name}/${nameUppercase}.styles.js
import { createUseStyles } from "react-jss";

export const use${nameUppercase}Styles = createUseStyles({
  root: {},
});
EOT

cat <<EOT >> src/${name}/${nameUppercase}.jsx
import { use${nameUppercase}Styles } from "${name}/${nameUppercase}.styles";

export function ${nameUppercase}() {
  const classes = use${nameUppercase}Styles();
  return <div className={classes.root}>${name} feature</div>;
}
EOT

mkdir -p src/${name}/gateway;
touch src/${name}/gateway/input.js
touch src/${name}/gateway/output.js

cat <<EOT >> src/${name}/gateway/output.js
export { ${nameUppercase} } from "${name}/${nameUppercase}";
EOT

cat <<EOT >> src/${name}/gateway/input.js
// input
EOT