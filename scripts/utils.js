const fs = require("node:fs");

function upperFirst(string_) {
  let result;
  if (typeof string_ === "string") {
    result = string_.charAt(0).toUpperCase() + string_.slice(1);
  }
  return result;
}

function lowerFirst(string_) {
  let result;
  if (typeof string_ === "string") {
    result = string_.charAt(0).toLowerCase() + string_.slice(1);
  }
  return result;
}

function camelCase(string_) {
  let result;
  if (typeof string_ === "string") {
    result = string_
      .trim()
      .replace(/[\s_-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  }
  return result;
}

function success(message) {
  console.log("(✔) Done!");
  if (message) {
    console.log(message);
  }
}

function info(message) {
  console.log(`(!) ${message}`);
}

function error(message) {
  console.log(`(𐄂) Error!`);
  console.log(`Message: ${message}`);
}

function appendFirstLineToFile({ filePath, content, infoLogger }) {
  const fileContent = fs.readFileSync(filePath).toString().split("\n");
  if (fileContent?.length > 0) {
    fileContent.unshift(content);
    fs.writeFileSync(filePath, fileContent.join("\n"));
  } else {
    infoLogger(`File "${filePath}" is empty`);
  }
}

function appendToFileAfterPattern({ filePath, pattern, content, infoLogger }) {
  const fileContent = fs.readFileSync(filePath).toString().split("\n");
  if (fileContent?.length > 0) {
    const numberOfLineWithPattern =
      fileContent.findIndex((index) => pattern.test(index)) + 1;
    if (numberOfLineWithPattern) {
      fileContent.splice(numberOfLineWithPattern, 0, content);
      fs.writeFileSync(filePath, fileContent.join("\n"));
    } else {
      infoLogger(`Pattern "${pattern}" not found in file "${filePath}"`);
    }
  } else {
    infoLogger(`File "${filePath}" is empty`);
  }
}

function createFolders(paths = []) {
  try {
    if (paths.length > 0) {
      for (const path of paths) {
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
        }
      }
    }
  } catch (error_) {
    throw error_.message;
  }
}

function hasFileExtension(string_) {
  return /^.*\.[^\\]+$/.test(string_);
}

function getImportIntegrityPattern(excluded) {
  return new RegExp(
    `import (.*) from ('|")\\b(${excluded.join(
      "|",
    )})(/)([A-Za-z])*(.*)\\b('|")`,
  );
}

module.exports = {
  upperFirst,
  lowerFirst,
  camelCase,
  success,
  info,
  error,
  appendFirstLineToFile,
  appendToFileAfterPattern,
  createFolders,
  hasFileExtension,
  getImportIntegrityPattern,
};
