var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'mohamedmansormemo67@gmail.com',
        pass:'memo2020'
    }
});

var mailoption = {
    from: 'mohamedmansormemo67@gmail.com',
    to: 'mohamedmansor212@gmail.com',
    subject: 'Sending mail using Node js',
    text: 'Take it easy!'
};

transporter.sendMail(mailoption, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent' + info.response )
    }
});