const fs = require("node:fs");

function capitalize(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return undefined;
}

function success(msg) {
  console.log("(✔) Done!");
  if (msg) {
    console.log(msg);
  }
}

function info(msg) {
  console.log(`(!) ${msg}`);
}

function error(msg) {
  console.log(`(𐄂) Error!`);
  console.log(`Message: ${msg}`);
}

function appendFirstLineToFile({ filePath, content }) {
  const fileContent = fs.readFileSync(filePath).toString().split('\n');
  if (fileContent?.length > 0) {
    fileContent.unshift(content);
    fs.writeFileSync(filePath, fileContent.join('\n'));
  } else {
    info(`File "${filePath}" is empty`);
  }
}

function appendToFileAfterPattern({ filePath, pattern, content }) {
  const fileContent = fs.readFileSync(filePath).toString().split('\n');
  if (fileContent?.length > 0) {
    const numberOfLineWithPattern = fileContent.findIndex(i => pattern.test(i)) + 1;
    if (numberOfLineWithPattern) {
      fileContent.splice(numberOfLineWithPattern, 0, content);
      fs.writeFileSync(filePath, fileContent.join('\n'));
    } else {
      info(`Pattern "${pattern}" not found in file "${filePath}"`);
    }
  } else {
    info(`File "${filePath}" is empty`);
  }
}

function createFolders(paths = []) {
  try {
    if (paths.length > 0) {
      paths.forEach(path => {
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
        }
      })
    }
  } catch (e) {
    throw e.message;
  }
}

function hasFileExt(str) {
  return /^.*\.[^\\]+$/.test(str);
}

module.exports = {
  capitalize,
  success,
  info,
  error,
  appendFirstLineToFile,
  appendToFileAfterPattern,
  createFolders,
  hasFileExt,
};