const fs = require("node:fs");
const {
  camelCase,
  error,
  info,
  lowerFirst,
  success,
  upperFirst,
} = require("../utils");
const {
  getComponentFileTemplate,
  getInputFileTemplate,
  getOutputFileTemplate,
  getStylesFileTemplate,
} = require("./templates");

try {
  const NAME = camelCase(process.argv[2]);

  if (NAME) {
    const FOLDER_NAME = lowerFirst(NAME);
    const FILE_NAME = upperFirst(NAME);
    const DIR = `src/${FOLDER_NAME}`;
    const MAIN_FILE = `${DIR}/${FILE_NAME}.jsx`;
    const STYLES_FILE = `${DIR}/${FILE_NAME}.styles.js`;
    const GATEWAY_DIR = `${DIR}/gateway`;
    const INPUT_FILE = `${GATEWAY_DIR}/input.js`;
    const OUTPUT_FILE = `${GATEWAY_DIR}/output.js`;

    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR);
      fs.appendFile(
        MAIN_FILE,
        getComponentFileTemplate({
          fileName: FILE_NAME,
          folderName: FOLDER_NAME,
        }),
        () => {},
      );
      fs.appendFile(
        STYLES_FILE,
        getStylesFileTemplate({
          fileName: FILE_NAME,
        }),
        () => {},
      );

      fs.mkdirSync(GATEWAY_DIR);
      fs.appendFile(INPUT_FILE, getInputFileTemplate(), () => {});
      fs.appendFile(
        OUTPUT_FILE,
        getOutputFileTemplate({
          fileName: FILE_NAME,
          folderName: FOLDER_NAME,
        }),
        () => {},
      );

      success();
    } else {
      info(`Feature with name "${FOLDER_NAME}" already exists`);
    }
  } else {
    throw new Error("Provide name of the feature");
  }
} catch (error_) {
  error(error_.message);
}
