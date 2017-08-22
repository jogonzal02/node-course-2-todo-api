// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); //this is identical to the code above

//Connnect to mongo db
//mongodb://localhost:27017/TodoApp database does not need to be created before use
//however mongo will not save database until contains a collection
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{

	//Send a message
	if(err){
		return console.log('Unable to connnect to mongodb server');
	}

	console.log('Connected to mongodb server')
	//remember that this fucntion also needs a err callback function
	//delete many
	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	//delete one
	// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	//find one and delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'John'}).then((result) =>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID("599c7da574ef500dc077a551")}).then((result) =>{
		console.log(result);
	});

	// //Close DB
	// db.close();

});