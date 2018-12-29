var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.array('monupload'), function(req, res, next) {
  if (req.files[0].mimetype === 'image/png' && req.files[0].size < 3072000) {
    fs.rename(
      req.files[0].path,
      'public/images/' + req.files[0].originalname,
      function(err) {
        if (err) {
          res.send('problème durant le déplacement, try again Bobby :(');
        } else {
          res.send('Fichier uploadé avec succès, Bobby! >^u^<');
        }
      }
    );
  } else {
    res.send('I SAID .png AND LESS THAN 3mb !!!!');
  }
});

module.exports = router;
