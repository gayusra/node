
/*const nodemailer = require('nodemailer')
const path = require('path')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dhana.gayathri100@gmail.com',
        pass:'kxiz zakw ayqp tthh',
   }
})

const mailOptions = {
    from:'dhana.gayathri100@gmail.com',
    to:'dhana.gayathri100@gmail.com',
    subject:'File Attachments',
    text:'please see the attached file an image',
    html:'<h1>Hello</h1> <p>please see the attached file an image </p>',
    attachments:[
        {
            filename:'write.txt',
            path:path.join(__dirname,'files','write.txt')
        },
    ]
}
console.log('Attachment Path:', path.join(__dirname, 'files', 'write.txt'));


transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log('error occured:', error.message);

    }
    console.log('email sent',info.response)
})*/


const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dhana.gayathri100@gmail.com',
        pass:'kxiz zakw ayqp tthh',

    }
})

const mailOptions ={
    from:'dhana.gayathri100@gmail.com',
    to:'dhana.gayathri100@gmail.com',
    subject:'image file',
    html:'<h1>Hello Gayu</h1> <h4>I attached a image for you</h4>',
    attachments:[
        {
            filename:'image.jpeg',
            path:path.join(__dirname,'images','image.jpeg')
          
        }
    ]
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log('error occured' ,error.message)
    }
    console.log('email sent',info.response)
})