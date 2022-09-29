const getComponentFileTemplate = ({ fileName, folderName }) =>
  `import { use${fileName}Styles } from "${folderName}/${fileName}.styles";

export function ${fileName}() {
  const classes = use${fileName}Styles();
  return <div className={classes.root}>${folderName} feature</div>;
}
`;

const getStylesFileTemplate = ({ fileName }) =>
  `import { createUseStyles } from "react-jss";

export const use${fileName}Styles = createUseStyles({
  root: {},
});
`;

const getInputFileTemplate = () => `// input`;

const getOutputFileTemplate = ({ fileName, folderName }) =>
  `export { ${fileName} } from "${folderName}/${fileName}";
`;

module.exports = {
  getComponentFileTemplate,
  getStylesFileTemplate,
  getInputFileTemplate,
  getOutputFileTemplate,
};
