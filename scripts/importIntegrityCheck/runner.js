const fs = require("node:fs");
const { error, success } = require("../utils");
const { checkFeatureImportsIntegrity } = require("./featureImportsIntegrity");

try {
  const ROOT_DIR = "src";
  const DOMAIN = process.argv[2]?.toLowerCase();

  if (DOMAIN && !fs.existsSync(`${ROOT_DIR}/${DOMAIN}`)) {
    error(`"${DOMAIN}" directory is not exists`);
  } else {
    const issues = [
      ...checkFeatureImportsIntegrity({
        rootDir: ROOT_DIR,
        domain: DOMAIN,
      }),
    ];

    if (issues.length > 0) {
      error('Some modules in your project are not satisfying dependency rules!');
      issues.forEach(issue => {
        console.log('--------------------');
        console.log(`Path: ${issue.filePath}`);
        console.log(`Message: ${issue.message}`);
        console.log('--------------------');
      });
      throw new Error('Import integrity issues found. Check messages above');
    } else {
      success('No import integrity issues found');
    }
  }
} catch (e) {
  throw new Error(e.message);
}