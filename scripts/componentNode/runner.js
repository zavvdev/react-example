const fs = require("node:fs");
const {
  appendFirstLineToFile,
  appendToFileAfterPattern,
  camelCase,
  createFolders,
  error,
  info,
  lowerFirst,
  success,
  upperFirst,
} = require("../utils");
const {
  getFreshRegistryFileTemplate,
  getMainFileTemplate,
  getRegistryAppendedExportTemplate,
  getRegistryFileImportTemplate,
  getStylesFileTemplate,
} = require("./templates");
const {
  COMPONENT_NODE_TYPE_SINGULAR_BY_TYPES,
  COMPONENT_NODE_TYPES,
} = require("../config");

try {
  const TYPE = process.argv[2];
  const NAME = camelCase(process.argv[3]);
  const FEATURE_ARG = camelCase(process.argv[4]);
  const FEATURE = FEATURE_ARG === "app" ? undefined : lowerFirst(FEATURE_ARG);

  if (TYPE && NAME && Object.values(COMPONENT_NODE_TYPES).includes(TYPE)) {
    if (TYPE === COMPONENT_NODE_TYPES.pages && !FEATURE) {
      throw new Error(
        '"app" domain pages is an endpoint registry. Create it manually',
      );
    }

    const DOMAIN = FEATURE || "app";

    const TYPE_SINGULAR_CAP = upperFirst(
      COMPONENT_NODE_TYPE_SINGULAR_BY_TYPES[TYPE],
    );
    const TYPE_CAP = upperFirst(TYPE);
    const NAME_CAP = upperFirst(NAME);
    const FEATURE_CAP = upperFirst(FEATURE);

    const DOMAIN_DIR = `src/${DOMAIN}`;
    const TYPE_DIR = `${DOMAIN_DIR}/${TYPE}`;
    const DIR = `${TYPE_DIR}/${NAME_CAP}`;

    const REGISTRY_FILE = `${TYPE_DIR}/index.js`;
    const MAIN_FILE = `${DIR}/${NAME_CAP}.jsx`;
    const STYLES_FILE = `${DIR}/${NAME_CAP}.styles.js`;

    const REGISTRY_NAMED_EXPORT = `${FEATURE_CAP || ""}${TYPE_CAP}`;
    const EXPORT_PATTERN = new RegExp(
      `^export const ([A-Z][a-z]*)?${TYPE_CAP} = {$`,
      "m",
    );

    if (!fs.existsSync(DOMAIN_DIR)) {
      throw new Error(
        `"${DOMAIN}" ${FEATURE ? "feature" : "folder"} is not exists.`,
      );
    }

    createFolders([TYPE_DIR]);

    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR);
      fs.appendFile(
        MAIN_FILE,
        getMainFileTemplate({
          nameCap: NAME_CAP,
          domain: DOMAIN,
          type: TYPE,
        }),
        () => {},
      );
      fs.appendFile(
        STYLES_FILE,
        getStylesFileTemplate({
          nameCap: NAME_CAP,
        }),
        () => {},
      );
      if (!fs.existsSync(REGISTRY_FILE)) {
        fs.appendFile(
          REGISTRY_FILE,
          getFreshRegistryFileTemplate({
            nameCap: NAME_CAP,
            namedExport: REGISTRY_NAMED_EXPORT,
            domain: DOMAIN,
            type: TYPE,
          }),
          () => {},
        );
      } else {
        appendFirstLineToFile({
          filePath: REGISTRY_FILE,
          content: getRegistryFileImportTemplate({
            nameCap: NAME_CAP,
            domain: DOMAIN,
            type: TYPE,
          }),
          infoLogger: info,
        });
        appendToFileAfterPattern({
          filePath: REGISTRY_FILE,
          pattern: EXPORT_PATTERN,
          content: getRegistryAppendedExportTemplate({
            nameCap: NAME_CAP,
          }),
          infoLogger: info,
        });
      }
      success();
    } else {
      info(`${TYPE_SINGULAR_CAP} with name "${NAME_CAP}" already exists`);
    }
  } else {
    throw new Error("Invalid input. Check script parameters in Makefile");
  }
} catch (error_) {
  error(error_.message);
}
