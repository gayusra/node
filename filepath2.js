
//const fs = require('fs')
//const path = require('path')

//read file

//----- normal async func----
/*console.log('test 1')
fs.readFile(path.join(__dirname,'files','start.txt'), 'utf8',(err,data)=>{
    if(err) {
        throw err;
        
   }
    console.log(data)
    
})
 
console.log('test 2')
//write file and append the file
fs.writeFile(path.join(__dirname,'files','write.txt'), 'welcome to write page text!',(err)=>{
    if(err){
        throw err
       
    }
    console.log('write complete')
    fs.appendFile(path.join(__dirname,'files','write.txt'),'\n\n thank you',(err)=>{
        if(err){
            throw err
        }
        console.log('file append')
        fs.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','testchnage.txt'),(err)=>{
            if(err){
                throw err
            }
            console.log('file renamed')
        })
    })
         
})*/

//---- async and await func ---------
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const file = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
        console.log(data)
        console.log('test')
        await fsPromises.writeFile(path.join(__dirname,'files','write.txt'),'welcome')
        console.log('write complete')

    }catch(err){
      console.log(err)
    }
}
file()