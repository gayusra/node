
/*const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/personaldata';

async function main(){
     await mongoose.connect(url)
    console.log('connected successfully')

    const schema = new mongoose.Schema({ name: String,age:Number,email:String });
  
// Create a model
const MyModel = mongoose.model('MyModel',schema);

//perform operations
const mydata = await MyModel.create({name:'Gayu',age:23,email:'aksara@gmail.com'})
console.log("data instered",mydata)


}
main().catch(console.error) 
*/


/*const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/testdata'

async function db(){
   await  mongoose.connect(url)
    console.log('connected to db')

   const schema = new mongoose.Schema({name:String})
    //create a model
    const mymodel = mongoose.model('summamodel',schema);
    
    //perform operation
    const  data = await mymodel.create({name:'Aksara'})


}

db()*/

const mongoose = require('mongoose')
const { getschema } = require('./schemas/testschema')

const url = 'mongodb://localhost:27017/testdata'

async function db(){
    await mongoose.connect(url)
    console.log('connected to db')


const details = {
    name:'aksra',
    password:123,
    email:'aksra@123'
}

await getschema().create(details)

}

db()