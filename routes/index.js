var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/xyz', function(req, res, next) {
    res.redirect(301,'http://localhost:3001')
});

module.exports = router;
