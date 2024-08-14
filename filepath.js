
const fs = require('fs')
const path = require('path')

//read file



fs.readFile(path.join(__dirname,'files','start.txt'), 'utf8',(err,data)=>{
    if(err) {
        throw err;
        
   }
    console.log(data)
    
})


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
       /* fs.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','testchnage.txt'),(err)=>{
            if(err){
                throw err
            }
            console.log('file renamed')
        })*/
    })
         
})

