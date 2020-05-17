const express = require("express");
const apiRoutes = require("./routing/api");
const htmlRoutes = require("./routing/html");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));