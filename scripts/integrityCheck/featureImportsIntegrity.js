const fs = require("node:fs");
const glob = require("glob");
const {
  getImportIntegrityPattern,
  hasFileExtension,
  info,
} = require("../utils");

const getFeatureNames = (rootContent) => {
  return rootContent
    .filter((path) => !hasFileExtension(path))
    .map((feature) => feature.split("/")[1]);
};

const getRootContentPattern = (rootDirectory) => {
  return `${rootDirectory}/!(app|__tests__)`;
};

const getFeatureFilesPattern = (rootDirectory, domain) => {
  return `${rootDirectory}/${
    domain ? `${domain}/` : "!(app|__tests__)/"
  }{!(gateway)/**/*.@(js|jsx),gateway/**/!(input.js),*.@(js|jsx)}`;
};

const isTestFile = (path) => {
  return /([\s\w().:\\-])+(.test|.spec).(js|jsx)$/.test(path);
};

function checkFeatureImportsIntegrity({ rootDirectory, domain }) {
  try {
    if (domain === "app") {
      return [];
    }

    const features = getFeatureNames(
      glob.sync(getRootContentPattern(rootDirectory)),
    );
    const featureFiles = glob.sync(
      getFeatureFilesPattern(rootDirectory, domain),
    );
    const issues = [];

    if (featureFiles.length > 0) {
      for (const filePath of featureFiles) {
        const fileContent = fs.readFileSync(filePath).toString();
        const fileDomain = filePath.split("/")?.[1];
        const importIntegrityPattern = getImportIntegrityPattern(
          features.filter((f) => f !== fileDomain),
        );
        if (
          !isTestFile(filePath) &&
          fileDomain &&
          importIntegrityPattern.test(fileContent)
        ) {
          issues.push({
            filePath,
            // eslint-disable-next-line max-len
            message: `"${fileDomain}" should NOT use direct imports from other features. Import all incoming modules from "${fileDomain}" input gateway`,
          });
        }
      }
    } else {
      info(
        `No files was found within ${domain ? `"${domain}"` : "src"} directory`,
      );
    }

    return issues;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  checkFeatureImportsIntegrity,
};
