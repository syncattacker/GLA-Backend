const fs = require("fs");
const path = require("path");

const PATH = path.join(`${__dirname}/data.txt`);

fs.writeFile(PATH, "Learning Node Js File System Moye Moye", (error) => {
  if (!error) {
    console.log("Written Successfully");
  } else {
    console.log(error);
  }
});
