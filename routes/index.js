var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('parent/index')
});


router.get('/about', function(req, res, next) {
    res.render('parent/about')
});

router.get('/work', function(req, res, next) {
    res.render('parent/work')
});

router.get('/contact', function(req, res, next) {
    res.render('parent/contact')
});

module.exports = router;
