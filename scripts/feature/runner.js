const fs = require("node:fs");
const { capitalize, success, info, error } = require("../utils");
const {
  getComponentFileTemplate,
  getStylesFileTemplate,
  getInputFileTemplate,
  getOutputFileTemplate,
} = require("./templates");

try {
  const NAME = process.argv[2]?.toLowerCase();

  if (NAME) {
    const NAME_CAP = capitalize(NAME);
    const DIR = `src/${NAME}`;
    const MAIN_FILE = `${DIR}/${NAME_CAP}.jsx`;
    const STYLES_FILE = `${DIR}/${NAME_CAP}.styles.js`;
    const GATEWAY_DIR = `${DIR}/gateway`;
    const INPUT_FILE = `${GATEWAY_DIR}/input.js`;
    const OUTPUT_FILE = `${GATEWAY_DIR}/output.js`;

    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR);
      fs.appendFile(MAIN_FILE, getComponentFileTemplate({ name: NAME, nameCap: NAME_CAP }), () => { });
      fs.appendFile(STYLES_FILE, getStylesFileTemplate({ nameCap: NAME_CAP }), () => { });

      fs.mkdirSync(GATEWAY_DIR);
      fs.appendFile(INPUT_FILE, getInputFileTemplate(), () => { });
      fs.appendFile(OUTPUT_FILE, getOutputFileTemplate({ name: NAME, nameCap: NAME_CAP }), () => { });

      success();
    } else {
      info(`Feature with name "${NAME}" already exists`);
    }
  } else {
    throw new Error("Provide name of the feature");
  }
} catch (e) {
  error(e.message);
}
