const express = require("express");
const app = express();

const router = require("./routes/musicasRoute");

//rotas
app.use("/", router);

module.exports = app;
