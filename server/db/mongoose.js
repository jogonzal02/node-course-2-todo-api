const mongoose = require('mongoose');


mongoose.Promise = global.Promise;// Set-up to use built in Promises
mongoose.connect('mongodb://localhost:27017/TodoApp'); // connect to database

module.exports = {
	mongoose //: mongoose
}