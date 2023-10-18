const Router = require('express');
const pictures_router = new Router();
const picturseController = require('./pictures.controller');
pictures_router.get('/pictures', picturseController.getAllPictures);
module.exports = pictures_router;