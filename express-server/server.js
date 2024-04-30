const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use(
  "/assets/sounds",
  express.static(path.join(__dirname, "assets/sounds"), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".m4a")) {
        res.setHeader("Content-Type", "audio/mp4");
      }
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
