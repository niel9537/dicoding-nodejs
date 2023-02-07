const fs = require("fs");
const path = require("path");

const readFileCallback = (error, data) => {
  if (error) {
    console.error(error);
  }

  console.log(data);
};

fs.readFile(path.join(__dirname, "note.txt"), "utf8", readFileCallback);
