var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		minlength: 1, 
		trim: true
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {Todo};






// var newTodo = new Todo({
// 	//no attributes are given a required property so no need to put in the other attributes
// 	text: 'Cook Dinner' 
// });

// newTodo.save().then((doc)=>{
// 	console.log('Save todo',doc);
// },(err)=>{
// 	console.log('unable to save todo');
// });

// var newTodo = new Todo({
// 	text: 'Write Code  '
// 	// completed: true,
// 	// completedAt: 81417	
// });


// newTodo.save().then((doc)=>{
// 	console.log('Saving new todo', JSON.stringify(doc,undefined,2));
// },(err)=>{
// 	console.log('Unable to save todo');
// });
