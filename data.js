const mongoose = require('mongoose');
const { getModel } = require('./schemas/sample');

// Connection URL
const url = 'mongodb://localhost:27017/mydatabase';

async function main() {
  // Connect to MongoDB
  await mongoose.connect(url);
  console.log('Connected successfully to MongoDB');

  const data = {
    name: 'Dhana',
    age: 22,
    address: 'House No'
  }

  await getModel().create(data);





  

  // Define a schema
//   const schema = new mongoose.Schema({ name: String, age: Number, address: String });
  
  // Create a model
//   const MyModel = mongoose.model('MyModel', schema);

//   // Perform operations
//   const doc = await MyModel.create({ name: 'Example' });
//   console.log('Document inserted:', doc);

//   const docs = await MyModel.find({name: 'Example'});
//   console.log('Documents found:', docs);

  // Close the connection
  await mongoose.connection.close();
}

main().catch(console.error);
