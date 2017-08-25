// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); //this is identical to the code above

----------------------------------------------------------------------------------
// //Object destructuring
// //let you pull out objects properties and set them into variables
// var user = {name: 'John',age: 21};
// var {name} = user;
// console.log(name);
-----------------------------------------------------------------------------------


//Connnect to mongo db
//mongodb://localhost:27017/TodoApp database does not need to be created before use
//however mongo will not save database until contains a collection
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{

	//Send a message
	if(err){
		return console.log('Unable to connnect to mongodb server');
	}

	console.log('Connected to mongodb server')
	//insert records

	// db.collection('Todos').insertOne({
	// 	text: 'Something todo',
	// 	completed: false

	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert Todo',err);
	// 	}

	// 	console.log(JSON.stringify(result.ops,undefined,2));

	// });

	// db.collection('Users').insertOne({
	// 	//_id: 123,  //you can run your own id for collection object
	// 	name: 'John',
	// 	age: 21,
	// 	location: 'Queens'

	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert Users',err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());

	// });





	//Close DB
	db.close();

});