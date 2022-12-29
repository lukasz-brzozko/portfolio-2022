const fs = require("fs-extra");
const replace = require("replace-in-file");

const options = {
  //you may need to modify the file address to suite your project
  //https://github.com/adamreisnz/replace-in-file#multiple-values-with-the-same-replacement

  files: [
    "./out/_next/static/css/*.css",
    "./out/_next/data/**/index.json",
    "./out/index.html",
  ],
  from: [
    /[(]\/fonts\//g,
    /["]\/uploads\//g,
    /["]\/_next\//g,
    /http:\/\/localhost:1337/g,
    /["]\/uploads\//g,
  ],
  to: ["(../../../fonts/", '"./uploads/', '"./_next/', ".", '"./uploads/'],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();

//! Put your uploads folder path here
const UPLOADS_DIR = "";

// Copy uploads folder
fs.copySync(UPLOADS_DIR, "./out/uploads");
