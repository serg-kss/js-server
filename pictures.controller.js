let pictures = require('./fake-db');

class PictureController {
   getAllPictures(rec, res){res.json(pictures);}
}

module.exports = new PictureController();