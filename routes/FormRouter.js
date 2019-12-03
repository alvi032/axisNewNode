const express = require('express');
const nodemailer = require('nodemailer')
const formRouter = express.Router();



formRouter.post('/', (req, res) => {
    const output = `
    <p>AXIS LEARNING</p>
    <h3>Course Download</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.number}</li>
        <li>Course: ${req.body.course}</li>
    </ul>
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false,
        service: 'gmail',
        auth: {
            user: 'alvi.6862@gmail.com', // generated ethereal user
            pass: '' // generated ethereal password
        }
    })

    // send mail with defined transport object
    let info =  {
        from: 'Axis Learning <email@host.com>', // sender address
        to: "talha.6862@gmail.com", // list of receivers
        subject: "Axis Message", // Subject line
        // text: "Hello world?", // plain text body
        html: output // html body
    }

    transporter.sendMail(info, (error, info) => {
        if(error){
            return console.log(error)
        }
        console.log('Message sent %s', info.messageId)
        if(req.body.course == "Digital Marketing")
            res.download('public/pdf/lorem-temp.pdf', 'Digital Marketing.pdf')
        else if(req.body.course == "Graphic Designing")
            res.download('public/pdf/lorem-temp.pdf', 'Graphic Designing.pdf')
        else if(req.body.course == "WordPress")
            res.download('public/pdf/lorem-temp.pdf', 'WordPress.pdf')
        else if(req.body.course == "Web Development")
            res.download('public/pdf/lorem-temp.pdf', 'Web Development.pdf')
        else if(req.body.course == "SEO")
            res.download('public/pdf/lorem-temp.pdf', 'SEO.pdf')
        else if(req.body.course == "Android Development")
            res.download('public/pdf/lorem-temp.pdf', 'Android Development.pdf')
        else if(req.body.course == "3D Animation & Designing")
            res.download('public/pdf/lorem-temp.pdf', '3D Animation & Designing.pdf')
        else if(req.body.course == "Advance Excel")
            res.download('public/pdf/lorem-temp.pdf', 'Advance Excel.pdf')
        else if(req.body.course == "QuickBooks")
            res.download('public/pdf/lorem-temp.pdf', 'QuickBooks.pdf')
        else if(req.body.course == "Professional Development")
            res.download('public/pdf/lorem-temp.pdf', 'Professional Development.pdf')
        else if(req.body.course == "Freelancing")
            res.download('public/pdf/lorem-temp.pdf', 'Freelancing.pdf')
        else if(req.body.course == "IELTS")
            res.download('public/pdf/lorem-temp.pdf', 'IELTS.pdf')
        else{
            console.log("No such file")
        }
    })
});
module.exports = {
    formRouter
};
