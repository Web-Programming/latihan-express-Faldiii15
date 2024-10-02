var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Mobile Legends' });
});

router.get('/Kontak', function(req, res, next) {
  res.render('Kontak', { title: 'Nomor Kontak' });
});

module.exports = router;
