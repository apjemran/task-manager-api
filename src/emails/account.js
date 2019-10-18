const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'post4emran@gmail.com',
        subject: 'Welcome to task manager app',
        text: `Hi ${name} thanks for registering to my task manager app`
    })
}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'post4emran@gmail.com',
        subject: 'Task Manager Cancellation Confirmation Email !',
        text: `${name} Sorry to hear that you are no longer interested in task manager app please 
        let us know why`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}