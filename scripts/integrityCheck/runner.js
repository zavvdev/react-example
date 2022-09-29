const fs = require("node:fs");
const { camelCase, error, lowerFirst, success } = require("../utils");
const { checkFeatureImportsIntegrity } = require("./featureImportsIntegrity");

try {
  const ROOT_DIR = "src";
  const DOMAIN = lowerFirst(camelCase(process.argv[2]));

  if (DOMAIN && !fs.existsSync(`${ROOT_DIR}/${DOMAIN}`)) {
    error(`"${DOMAIN}" directory is not exists`);
  } else {
    const issues = [
      ...checkFeatureImportsIntegrity({
        rootDirectory: ROOT_DIR,
        domain: DOMAIN,
      }),
    ];

    if (issues.length > 0) {
      for (const issue of issues) {
        console.log("--------------------");
        console.log(`Path: ${issue.filePath}`);
        console.log(`Message: ${issue.message}`);
        console.log("--------------------");
      }
      throw new Error("Integrity issues found. Check messages above");
    } else {
      success("No integrity issues found");
    }
  }
} catch (error_) {
  throw new Error(error_.message);
}
