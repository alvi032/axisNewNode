const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const {formRouter} = require('./routes/FormRouter');

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/contact', (req, res) => res.render('contact'))
app.get('/digital-marketing', (req, res) => res.render('digital-marketing'))
app.get('/graphic-designing', (req, res) => res.render('graphic-designing'))
app.get('/wordpress', (req, res) => res.render('wordpress'))
app.get('/web-development', (req, res) => res.render('web-development'))
app.get('/seo', (req, res) => res.render('seo'))
app.get('/android-development', (req, res) => res.render('android-development'))
app.get('/animation&designing', (req, res) => res.render('animation&designing'))
app.get('/advance-excel', (req, res) => res.render('advance-excel'))
app.get('/quickbooks', (req, res) => res.render('quickbooks'))
app.get('/professional-development', (req, res) => res.render('professional-development'))
app.get('/freelancing', (req, res) => res.render('freelancing'))
app.get('/ielts', (req, res) => res.render('ielts'))


app.use(express.static(path.join(__dirname, 'public')))



app.post('/send', (req, res) => {
    const output = `
    <p>AXIS LEARNING</p>
    <h3>Contact</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.number}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false,
        service: 'gmail',
        auth: {
            user: '', // generated ethereal user
            pass: '' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info =  {
        from: 'Axis Learning <email@host.com>', // sender address
        to: "", // list of receivers
        subject: "Axis Message", // Subject line
        // text: "Hello world?", // plain text body
        html: output // html body
    }

    transporter.sendMail(info, (error, info) => {
        if(error){
            return console.log(error)
        }
        console.log('Message sent %s', info.messageId)
        // res.render('contact', {msg: "message sent"})
        res.render('contact', {msg: `<p class="sent-message full">Message Sent</p>`})

    })

})

app.use('/downloadCourse', formRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
