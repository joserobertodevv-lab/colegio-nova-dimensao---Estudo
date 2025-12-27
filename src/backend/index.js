const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;
const frontendPath = path.join(__dirname, "..", "frontend");
const publicPath = path.join(frontendPath, "public");

const app = new express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});
app.get("/contato", (req, res) => {
    res.sendFile(path.join(frontendPath, "contato.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(frontendPath, "login.html"));
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });