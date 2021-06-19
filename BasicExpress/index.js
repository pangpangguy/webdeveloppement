const express = require('express');
const app = express();
const path = require('path')
app.set('view engine', 'ejs')
//app.use((req, res) => {
    //console.log("We have a new request!")
    //res.send("<h1>Welcome!<h1>")
//})

app.use(express.static('public'))
//Set absolute path:
//app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
//    res.send("<h1>Homepage<h1>")
res.render('home')
})

app.get('/cats', (req,res)=>{
    console.log("Cat request!")
    const cats = ['Tommy', 'Bunny', 'Lucio', 'PewPew', 'Meowyy']
    res.render('cats', {cats})
})

app.get('/random', (req,res)=>{
    const rand = Math.floor(Math.random() * 10) + 1

    res.render('random.ejs', {random_num : rand})
})

app.get('/r/:subreddit', (req,res) =>{
    const {subreddit} = req.params
    res.render('subreddit', {subreddit})
})








//Everything else
app.get('*', (req,res)=>{
    res.send("Page not found!")
})
app.listen(8080, () => {
    console.log("Listening...")
})