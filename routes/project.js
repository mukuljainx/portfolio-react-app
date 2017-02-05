var express = require('express');
var router = express.Router();

router.get('/plinth-2017', function(req, res, next) {
    res.render('parent/work/plinth');
});

router.get('/mun', function(req, res, next) {
    res.render('parent/work/mun');
});

router.get('/timespread', function(req, res, next) {
    res.render('parent/work/timespread');
});

router.get('/zento', function(req, res, next) {
    res.render('parent/work/zento');
});

router.get('/flash', function(req, res, next) {
    res.render('parent/work/flash');
});

router.get('/plinth-2016', function(req, res, next) {
    res.render('parent/work/plinth-2016');
});

router.get('/event-graphia', function(req, res, next) {
    res.render('parent/work/eg-old');
});

router.get('/event-graphia-angular', function(req, res, next) {
    res.render('parent/work/eg-new');
});

module.exports = router;
