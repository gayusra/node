const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dhana.gayathri100@gmail.com',
        pass:'kxiz zakw ayqp tthh',
    }
})

//generate a 6-digits otp

const otp = otpGenerator.generate(4,{upperCaseAlphabets:false,specialChars:false,numbers:true,lowerCaseAlphabets:false})
console.log('Generated OTP:',otp);

const mailOptions ={
    from:'dhana.gayathri100@gamil.com',
    to:'dhana.gayathri100@gmail.com',
    subject:'Your OTP Code',
    text:`your OTP Code is ${otp} It is valid for 10 minutes`,
    html:`<h1>your OTP code is ${otp} it is valid for 10 minutes`,
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error)
    }
    console.log('email sent:' ,info.response)
})