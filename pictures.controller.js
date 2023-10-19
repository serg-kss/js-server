let fake_db = require("./fake-db");

class PictureController {
  getAllPictures(rec, res) {
    res.json(fake_db.readTxtFile);
  }
}

module.exports = new PictureController();
