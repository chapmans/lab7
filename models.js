
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  "title": String,
  "date": Date,
  "summary": String,
  "image": String
});

var CommentSchema = new Mongoose.Schema({
	"name": String,
	"date": Date,
	"comment": String,
	"project": {type: Mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.Comment = Mongoose.model('Comment', CommentSchema);