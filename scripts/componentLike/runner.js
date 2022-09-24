const fs = require("node:fs");
const {
  capitalize,
  success,
  info,
  error,
  appendFirstLineToFile,
  appendToFileAfterPattern,
  createFolders,
} = require("../utils");
const {
  getMainFileTemplate,
  getStylesFileTemplate,
  getFreshRegistryFileTemplate,
  getRegistryFileImportTemplate,
  getRegistryAppendedExportTemplate,
} = require("./templates");

try {
  const TYPES = {
    containers: "containers",
    layouts: "layouts",
    shared: "shared",
    pages: "pages",
  };

  const TYPE_SINGULAR_BY_TYPES = {
    [TYPES.containers]: "container",
    [TYPES.layouts]: "layout",
    [TYPES.shared]: "shared",
    [TYPES.pages]: "page",
  };

  const TYPE = process.argv[2]?.toLowerCase();
  const NAME = process.argv[3]?.toLowerCase();
  const FEATURE_ARG = process.argv[4]?.toLowerCase();
  const FEATURE = FEATURE_ARG === "app" ? undefined : FEATURE_ARG;

  if (TYPE && NAME && Object.values(TYPES).includes(TYPE)) {
    if (TYPE === TYPES.pages && !FEATURE) {
      throw new Error(
        "\"app\" domain pages is an endpoint registry. Create it manually"
      );
    }

    const DOMAIN = FEATURE || "app";

    const TYPE_SINGULAR_CAP = capitalize(TYPE_SINGULAR_BY_TYPES[TYPE]);
    const TYPE_CAP = capitalize(TYPE);
    const NAME_CAP = capitalize(NAME);
    const FEATURE_CAP = capitalize(FEATURE);

    const DOMAIN_DIR = `src/${DOMAIN}`;
    const TYPE_DIR = `${DOMAIN_DIR}/${TYPE}`;
    const DIR = `${TYPE_DIR}/${NAME_CAP}`;

    const REGISTRY_FILE = `${TYPE_DIR}/index.js`;
    const MAIN_FILE = `${DIR}/${NAME_CAP}.jsx`;
    const STYLES_FILE = `${DIR}/${NAME_CAP}.styles.js`;

    const REGISTRY_NAMED_EXPORT = `${FEATURE_CAP || ''}${TYPE_CAP}`;
    const EXPORT_PATTERN = `export const ${REGISTRY_NAMED_EXPORT} = {`;

    if (!fs.existsSync(DOMAIN_DIR)) {
      throw new Error(`"${DOMAIN}" ${FEATURE ? "feature" : "folder"} is not exists.`);
    }

    createFolders([TYPE_DIR]);

    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR);
      fs.appendFile(MAIN_FILE, getMainFileTemplate({
        nameCap: NAME_CAP,
        domain: DOMAIN,
        type: TYPE,
      }), () => { });
      fs.appendFile(STYLES_FILE, getStylesFileTemplate({
        nameCap: NAME_CAP,
      }), () => { });
      if (!fs.existsSync(REGISTRY_FILE)) {
        fs.appendFile(REGISTRY_FILE, getFreshRegistryFileTemplate({
          nameCap: NAME_CAP,
          namedExport: REGISTRY_NAMED_EXPORT,
          domain: DOMAIN,
          type: TYPE,
        }), () => { });
      } else {
        appendFirstLineToFile({
          filePath: REGISTRY_FILE,
          content: getRegistryFileImportTemplate({
            nameCap: NAME_CAP,
            domain: DOMAIN,
            type: TYPE,
          }),
        });
        appendToFileAfterPattern({
          filePath: REGISTRY_FILE,
          pattern: EXPORT_PATTERN,
          content: getRegistryAppendedExportTemplate({
            nameCap: NAME_CAP,
          }),
        });
      }
      success();
    } else {
      info(`${TYPE_SINGULAR_CAP} with name "${NAME_CAP}" already exists`);
    }
  } else {
    throw new Error("Invalid input. Check script parameters in Makefile");
  }
} catch (e) {
  error(e.message);
}
