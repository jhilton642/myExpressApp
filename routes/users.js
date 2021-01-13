var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', function (req, res, next) {
  res.render('users', {
    'users': usersList,
    'title': 'This is the title text for our page'
  });
});
var User = function(fname, lname, phone) {
  this.FirstName = fname;
  this.LastName = lname;
  this.Phone = phone;
};

var usersList = [];

function addUsers() {
  usersList.push(new User('Keith', 'Richards', '801-AC5-2030'));
  usersList.push(new User('Joe', 'Cocker', '801-FR3-7789'));
  usersList.push(new User('B.B.', 'King', '202-AAA-2345'));
};

addUsers();
module.exports = router;
