var mongoose = require('mongoose'),
	Task = mongoose.model('Task');

module.exports = {
	index: function(req, res) {
		res.render('tasks/index', {title:'Welcome Page'});
	},
	index_json: function(req, res) {
		Task.find({}, function(err, results) {
			res.send(JSON.stringify(results));
		});
	},
	create: function(req, res) {
		var a = new Task(req.body);
		a.save(function(err) {
			if(err) {
				res.send(JSON.stringify(err));
			} else {
				res.send('success');
			}
		}) ;
	},
	show: function(req, res) {
		res.render('./../server/views/tasks/show', {title:'Welcome Page'});
	},
	edit: function(req, res) {
		res.render('./../server/views/tasks/edit', {title:'Welcome Page'});
	}
}