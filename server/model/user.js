var mongoose  = require('mongoose');

var User = mongoose.model('User',{
	email:{
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = {User};




// var newUser = new User({
// 	email: 'a@gmail.com'
// });

// newUser.save().then((doc)=>{
// 	console.log('Saving user', doc);
// },(err)=>{
// 	console.log('Received error',err);
// })