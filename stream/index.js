const fs = require("fs");
const path = require("path");
const readableStream = fs.createReadStream(path.join(__dirname, "input.txt"), {
  highWaterMark: 10,
});

const writedableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  try {
    writedableStream.write(`${readableStream.read()}`);

    //process.stdout.write(`${readableStream.read()}`);
  } catch (e) {
    console.log(e);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
