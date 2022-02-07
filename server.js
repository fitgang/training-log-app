var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.listen(port, () => console.log("Listening on http://localhost:" + port + "/"));