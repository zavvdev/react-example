const fs = require("node:fs");
const { error, success } = require("../utils");
const { checkFeatureImportsIntegrity } = require("./featureImportsIntegrity");

let issues = [];

try {
  const ROOT_DIR = "src";
  const DOMAIN = process.argv[2]?.toLowerCase();

  if (DOMAIN && !fs.existsSync(`${ROOT_DIR}/${DOMAIN}`)) {
    throw new Error(`"${DOMAIN}" directory is not exists`);
  }

  if (issues.length > 0) {
    issues = [
      ...checkFeatureImportsIntegrity({
        rootDir: ROOT_DIR,
        domain: DOMAIN,
      }),
    ];
    throw new Error();
  } else {
    success('No issues was found');
  }
} catch {
  error('Some modules in your project are not satisfying dependency rules!');
  issues.forEach(issue => {
    console.log('--------------------');
    console.log(`Path: ${issue.filePath}`)
    console.log(`Message: ${issue.message}.`)
    console.log('--------------------');
  });
}