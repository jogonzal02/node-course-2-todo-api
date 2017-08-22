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

	// //fetch everything in Todos array
	//  db.collection('Todos').find().toArray().then((docs)=>{
	//  	console.log('Todos');
	//  	console.log(JSON.stringify(docs,undefined,2));

	//  },(err)=>{
	//  	console.log('Unable to fetch todos',err);
	//  });

	// //Query all collections in Todos that has a completed property equal to false
	//  db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
	//  	console.log('Todos');
	//  	console.log(JSON.stringify(docs,undefined,2));

	//  },(err)=>{
	//  	console.log('Unable to fetch todos',err);
	//  });

	//Query by collection id
	 // db.collection('Todos').find({
	 // 	_id: new ObjectID("599c7c30e2a1bc17349a704e")
	 // 	}).toArray().then((docs)=>{
	 // 	console.log('Todos');
	 // 	console.log(JSON.stringify(docs,undefined,2));

	 // },(err)=>{
	 // 	console.log('Unable to fetch todos',err);
	 // });

	 //Determine Todos count  value
	 // db.collection('Todos').find().count().then((count)=>{
	 // 	console.log(`Todos count: ${count}`);
	 // },(err)=>{
	 // 	console.log('Unable to fetch todos',err);
	 // });

	//Query all collections in Users that has a name property equal to John
	 db.collection('Users').find({name: 'John'}).toArray().then((docs)=>{
	 	console.log('Users');
	 	console.log(JSON.stringify(docs,undefined,2));

	 },(err)=>{
	 	console.log('Unable to fetch user',err);
	 });



	// //Close DB
	// db.close();

});