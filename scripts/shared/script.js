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
  getComponentFileTemplate,
  getStylesFileTemplate,
  getFreshRegistryFileTemplate,
  getRegistryFileImportTemplate,
  getRegistryAppendedExportTemplate,
} = require("./templates");

try {
  const NAME = process.argv[2].toLowerCase();
  const FEATURE = process.argv[3]?.toLowerCase();
  const DOMAIN = FEATURE || "app";

  const NAME_CAP = capitalize(NAME);
  const FEATURE_CAP = capitalize(FEATURE);

  const DOMAIN_DIR = `src/${DOMAIN}`;
  const COMPONENTS_DIR = `${DOMAIN_DIR}/components`;
  const SHARED_DIR = `${COMPONENTS_DIR}/shared`;
  const DIR = `${SHARED_DIR}/${NAME_CAP}`;
  const REGISTRY_FILE = `${SHARED_DIR}/index.js`;
  const MAIN_FILE = `${DIR}/${NAME_CAP}.jsx`;
  const STYLES_FILE = `${DIR}/${NAME_CAP}.styles.js`;
  const REGISTRY_NAMED_EXPORT = `${FEATURE_CAP || ''}Shared`;
  const SHARED_EXPORT_PATTERN = `export const ${REGISTRY_NAMED_EXPORT} = {`;

  if (!fs.existsSync(DOMAIN_DIR)) {
    throw new Error(`"${DOMAIN}" ${FEATURE ? "feature" : "folder"} is not exists.`);
  }

  createFolders([COMPONENTS_DIR, SHARED_DIR]);

  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
    fs.appendFile(MAIN_FILE, getComponentFileTemplate({
      nameCap: NAME_CAP,
      domain: DOMAIN,
    }), () => { });
    fs.appendFile(STYLES_FILE, getStylesFileTemplate({
      nameCap: NAME_CAP,
    }), () => { });
    if (!fs.existsSync(REGISTRY_FILE)) {
      fs.appendFile(REGISTRY_FILE, getFreshRegistryFileTemplate({
        nameCap: NAME_CAP,
        namedExport: REGISTRY_NAMED_EXPORT,
        domain: DOMAIN,
      }), () => { });
    } else {
      appendFirstLineToFile({
        filePath: REGISTRY_FILE,
        content: getRegistryFileImportTemplate({
          nameCap: NAME_CAP,
          domain: DOMAIN,
        }),
      });
      appendToFileAfterPattern({
        filePath: REGISTRY_FILE,
        pattern: SHARED_EXPORT_PATTERN,
        content: getRegistryAppendedExportTemplate({
          nameCap: NAME_CAP,
        }),
      });
    }
    success();
  } else {
    info(`Shared component with name "${NAME_CAP}" already exists`);
  }
} catch (e) {
  error(e.message);
}
