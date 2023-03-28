const express = require("express")
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/express4", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const User = require("./models/model")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.set('view engine', 'ejs')
// app.use(express.static("public"))

app.get('/register', (req, res) => {
    // res.render("register")
    res.send("Register")
})

app.post('/register', async (req, res) => {
    try {
        const userRegister = new User({
            username: req.body.uname,
            password: req.body.password
        })
        await userRegister.save()
        res.redirect("login")
    } catch (error) {
        console.log(error)
    }
})

app.get('/login', (req, res) => {
    // res.render('login')
    res.send("Login")
})

app.post('/login', async (req, res) => {
    try {
        const loginLogin = await User.findOne({
            username:req.body.uname,
            password:req.body.password
        })
        if(loginLogin) {
            // res.render('success')
            res.send("Success")
        }
        else {
            console.log('User not found')
        }
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000)