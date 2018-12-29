const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('quete', { title: 'uploaddufichier' });
});

router.post('/', upload.array('monfichier'), function(req, res, next) {
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
});

module.exports = router;
