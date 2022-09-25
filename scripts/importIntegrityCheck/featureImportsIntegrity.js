const glob = require("glob");
const fs = require("node:fs");
const { info, hasFileExt } = require("../utils");

const getFeatureNames = (rootContent) => {
  return rootContent
    .filter(path => !hasFileExt(path))
    .map(feature => feature.split('/')[1]);
}

const getRootContentPattern = (rootDir) => {
  return `${rootDir}/!(app)`;
};

const getFeatureFilesPattern = (rootDir, domain) => {
  return `${rootDir}/${domain ? `${domain}/` : '!(app)/'}{!(gateway)/**/*.@(js|jsx),gateway/**/!(input.js),*.@(js|jsx)}`
};

const getImportIntegrityPattern = (excludeFeatures) => {
  return new RegExp(`import (.*) from ('|")\\b(${excludeFeatures.join('|')})(\/)([A-Za-z])*(.*)\\b('|")`);
};

function checkFeatureImportsIntegrity({ rootDir, domain }) {
  try {
    if (domain === "app") {
      return [];
    }

    const features = getFeatureNames(glob.sync(getRootContentPattern(rootDir)));
    const featureFiles = glob.sync(getFeatureFilesPattern(rootDir, domain));
    const issues = [];

    if (featureFiles.length > 0) {
      featureFiles.forEach((filePath) => {
        const fileContent = fs.readFileSync(filePath).toString();
        const fileDomain = filePath.split('/')?.[1];
        const importIntegrityPattern = getImportIntegrityPattern(
          features.filter(f => f !== fileDomain)
        );
        if (fileDomain && importIntegrityPattern.test(fileContent)) {
          issues.push({
            filePath,
            message: `"${fileDomain}" feature should not use direct imports from other features. Import all incoming modules from the "${fileDomain}" input gateway`,
          })
        }
      });
    } else {
      info(`No files was found within ${domain ? `"${domain}"` : "src"} directory`);
    }

    return issues;
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = { checkFeatureImportsIntegrity };