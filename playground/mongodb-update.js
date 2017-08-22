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

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("599c8dcdec9d556ed851b8b5")
	// }, { //mongo db update operators
	// 	$set:{
	// 		completed: true
	// 		}
	// 	}, {
	// 		returnOriginal:false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({_id: 123},
		{
		$set:{name:'Abel'},
		$inc:{age: 1}
	},
		{returnOriginal: false}
	).then((result)=>{
		console.log(result);
	});


	// //Close DB
	// db.close();

});