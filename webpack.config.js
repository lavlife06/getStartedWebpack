const path = require("path");
module.exports = {
  //   mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js", // here u can type any file name
    path: path.resolve(__dirname, "dist"), // dist name isn't necessary
  },
};
