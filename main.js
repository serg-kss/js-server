const express = require("express");
const picturesRouter = require("./pictures.routes");
let fake_db = require("./fake-db");

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", [picturesRouter]);

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log("Server is working on PORT " + PORT);
      fake_db.createTxtFile;
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
