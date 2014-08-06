var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = function Routes(app) {

	var error = '';

	app.get('/', function(req, res) {
		Task.find({}, function(err, tasks) {
			res.render('index', { title: 'Task Management', tasks: tasks, errors: error })
			error = '';
		})
	})
	app.post('/tasks/create', function(req, res) {
		console.log(req.body)
		var a = new Task(req.body);
		a.save(function(err) {
			if(err) {
				error = err;
				res.redirect('/');
			} else {
				res.redirect('/');
			}
		})
	})
	app.post('/tasks/delete/:id', function(req, res) {
		Task.remove( { '_id': req.params.id }, function(err, a) {
			res.redirect('/');
		});
	})
}