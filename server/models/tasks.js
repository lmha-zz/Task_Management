var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	name: String,
	priority: String,
	deadline: { type: Date },
	created: { type: Date, default: Date.now },
	hidden: Boolean,
});

TaskSchema.path('name').required(true, 'Task name cannot be blank');
TaskSchema.path('deadline').required(true, 'Task deadline cannot be blank');

mongoose.model('Task', TaskSchema);