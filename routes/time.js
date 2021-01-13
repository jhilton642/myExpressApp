var express = require('express');
var router = express.Router();
router.get('/now', function(req, res, next) {
    res.render('time',{title: 'Current Time',currentTime:new Date()});
});
module.exports = router;