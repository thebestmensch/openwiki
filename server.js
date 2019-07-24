const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./build")));

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

// serve the bundle
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

// spin up the server
app.listen(3000, () => console.log("Server listening on port 3000.")); // tslint:disable-line
