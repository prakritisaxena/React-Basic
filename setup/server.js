import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack';

const app = express();

let compile = webpack(config);

app.use(require("webpack-dev-middleware")(compile, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
