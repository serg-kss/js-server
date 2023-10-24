let fake_db = require("./fake-db");

class PictureController {
  getAllPictures(rec, res) {
    res.json(fake_db.readTxtFile);
  }
}

class PictureFormController {
  pictureForm(rec, res){
    if (rec.body.hashtag && rec.body.description && rec.body.picture && rec.body.effect) {
      res.json({status: 'Valid data'});
    } else res.json({status: 'Not valid data'});
  }
}
module.exports.pictureController = new PictureController();
module.exports.pictureFormController = new PictureFormController();
