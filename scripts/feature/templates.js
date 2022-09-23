const getComponentFileTemplate = ({ name, nameCap }) => 
`import { use${nameCap}Styles } from "${name}/${nameCap}.styles";

export function ${nameCap}() {
  const classes = use${nameCap}Styles();
  return <div className={classes.root}>${name} feature</div>;
}
`;

const getStylesFileTemplate = ({ nameCap }) => 
`import { createUseStyles } from "react-jss";

export const use${nameCap}Styles = createUseStyles({
  root: {},
});
`;

const getInputFileTemplate = () => `// input`;

const getOutputFileTemplate = ({ name, nameCap }) => 
`export { ${nameCap} } from "${name}/${nameCap}";
`

module.exports = {
  getComponentFileTemplate,
  getStylesFileTemplate,
  getInputFileTemplate,
  getOutputFileTemplate,
};