var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aboutme.jade', { title: 'About Me' });
});

router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/helloworld', function(req, res) {
	res.render('helloworld', {title: 'Hello, World!', dumbshit: 'my name is alexander moran'})
});

router.get('/userlist', function(req, res) {
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({}, {}, function(e, docs) {
		res.render('userlist', {
			"userlist" : docs
		});
	});
});

module.exports = router;
