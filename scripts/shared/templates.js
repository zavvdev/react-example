const getComponentFileTemplate = ({ nameCap }) =>
`import PropTypes from "prop-types";
import { use${nameCap}Styles } from "app/components/shared/${nameCap}/${nameCap}.styles";

export function ${nameCap}({ property }) {
  const classes = use${nameCap}Styles();
  return (
    <div className={classes.root}>
      ${nameCap} shared component. Property is: {property}
    </div>
  );
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

const getFreshRegistryFileTemplate = ({ nameCap }) =>
`import { ${nameCap} } from "app/components/shared/${nameCap}/${nameCap}";

export const Shared = {
  ${nameCap},
};
`;

const getRegistryFileImportTemplate = ({ nameCap }) => 
`import { ${nameCap} } from "app/components/shared/${nameCap}/${nameCap}";`;

const getRegistryAppendedExportTemplate = ({ nameCap }) =>
`  ${nameCap},`;

module.exports = {
  getComponentFileTemplate,
  getStylesFileTemplate,
  getFreshRegistryFileTemplate,
  getRegistryFileImportTemplate,
  getRegistryAppendedExportTemplate,
};