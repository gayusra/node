// Import the nodemailer package
const nodemailer = require('nodemailer');

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: 'dhana.gayathri100@gmail.com', // Your email address
        pass: 'kxiz zakw ayqp tthh'   // Your email password or app-specific password
    }
});

// Define the email options
const mailOptions = {
    from: 'dhana.gayathri100@gmail.com', // Sender address
    to: 'dhana.gayathri@gmail.com ,dhana.spiderlingz@gmail.com' ,  // List of recipients
    subject: 'Hello from Nodemailer', // Subject line
    text: 'This is a simple text email sent using Nodemailer.', // Plain text body
    html: '<h1>Hello</h1><p>This is a simple HTML email sent using Nodemailer.</p>' // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ', error.message);
    }
    console.log('Email sent: ' + info.response);
});



//------------------------------
/*
Transporter Object: This is the SMTP transporter you create using nodemailer.createTransport. It defines the SMTP server details, including authentication.

Mail Options: This object contains the details of the email, such as from, to, subject, and body.

Sending the Email: The sendMail function sends the email using the transporter. The callback function handles the response, logging either an error or success message.

*/
