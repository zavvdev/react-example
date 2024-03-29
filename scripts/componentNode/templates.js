const getMainFileTemplate = ({ nameCap, domain, type }) =>
  `import PropTypes from "prop-types";
import { use${nameCap}Styles } from "${domain}/${type}/${nameCap}/${nameCap}.styles";

export function ${nameCap}({ property }) {
  const classes = use${nameCap}Styles();
  return <div className={classes.root}>${nameCap} {property}</div>;
}

${nameCap}.propTypes = {
  property: PropTypes.number,
};

${nameCap}.defaultProps = {
  property: 42,
};
`;

const getStylesFileTemplate = ({ nameCap }) =>
  `import { createUseStyles } from "react-jss";

export const use${nameCap}Styles = createUseStyles({
  root: {},
});
`;

const getFreshRegistryFileTemplate = ({ nameCap, domain, namedExport, type }) =>
  `import { ${nameCap} } from "${domain}/${type}/${nameCap}/${nameCap}";

export const ${namedExport} = {
  ${nameCap},
};
`;

const getRegistryFileImportTemplate = ({ nameCap, domain, type }) =>
  `import { ${nameCap} } from "${domain}/${type}/${nameCap}/${nameCap}";`;

const getRegistryAppendedExportTemplate = ({ nameCap }) => `  ${nameCap},`;

module.exports = {
  getMainFileTemplate,
  getStylesFileTemplate,
  getFreshRegistryFileTemplate,
  getRegistryFileImportTemplate,
  getRegistryAppendedExportTemplate,
};
