let express = require("express");
const app = express();

app.use(express.static("public"));
app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
});
