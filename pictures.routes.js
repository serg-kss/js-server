const Router = require("express");
const pictures_router = new Router();
const controller = require("./pictures.controller");
pictures_router.get("/pictures", controller.pictureController.getAllPictures);
pictures_router.post('/add-picture', controller.pictureFormController.pictureForm);
module.exports = pictures_router;
