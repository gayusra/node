


/*Where to Use the fs Module:
    File Management: When your application needs to manage files, such as saving user-generated content, reading configuration files, or generating reports.
    Logging: To create and maintain log files for recording events or errors in your application.
    Temporary File Storage: If your app needs to store temporary data that can be read and deleted later.
    Configuration Management: For reading and writing configuration files, particularly in server-side applications.
    Batch Processing: When you need to process files in bulk, such as reading, processing, and moving files between directories.





*/
//read files 
/*let http = require('http');
let fs = require('fs');

 const server = http.createServer(function(req,res){
   fs.readFile('test.html' ,function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(data)
   })
})

server.listen(5000,()=>{
    console.log('server is running on the port 5000')
})*/

//----------------------

//create files
/*The File System module has methods for creating new files:
fs.appendFile()
fs.open()
fs.writeFile()*/

//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

/*let http = require('http')
let fs = require('fs')

const server = http.createServer(function(req,res){
    fs.appendFile('test.html','\n<h3>hello content</h3>\n' ,function(err){
        if(err){
            throw err;
        }
        
        console.log('saved!')
    })
})
server.listen(5000,()=>{
    console.log('server is running on the port')
})*/

//---------------------

//fs open

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

/*let http = require('http')
let fs = require('fs')

const server = http.createServer(function(req,res){
    fs.open('test.html','w',function(err,file){
        if(err){
            throw err;
        }
        console.log('save!')
    })
})

server.listen(5000,()=>{
    console.log('server is running on the port 5000')
})*/

//----------

//update file
//The File System module has methods for updating files:
/*fs.appendFile()
fs.writeFile()
*/

//The fs.appendFile() method appends the specified content at the end of the specified file:

/*let http = require('http')
let fs = require('fs')

const server = http.createServer(function(req,res){
    fs.appendFile('test.html','\n<p>welcome</p>',function(err){
        if(err){
            throw err
        }
        console.log('updated!')
    })
})

server.listen(5000,()=>{
    console.log('server is running on the port')
})*/

//The fs.writeFile() method replaces the specified file and content:

/*let http = require('http')
let fs = require('fs')

const server = http.createServer(function(req,res){
    fs.writeFile('test.html','<p>bye</p>',function(err){
        if(err){
            throw err
        }
        console.log('replaced')
    })
})

server.listen(5000,()=>{
    console.log('server is running on the port 5000')
})
*/

//-------------------------

//Delete files
//To delete a file with the File System module,  use the fs.unlink() method.

/*let http = require('http')
let fs = require('fs')

const server = http.createServer(function(req,res){
    fs.unlink('sample.html',function(err){
        if(err){
             throw err
        }
        console.log('deleted files')
    })
})

server.listen(5000,()=>[
    console.log('server is running on the port')
])*/


