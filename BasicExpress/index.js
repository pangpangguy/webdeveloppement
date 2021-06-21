const express = require('express');
const app = express();
const path = require('path')
const {v4:uuid} = require('uuid');
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
//app.use((req, res) => {
    //console.log("We have a new request!")
    //res.send("<h1>Welcome!<h1>")
//})

app.use(express.static('public'))
//Set absolute path:
//app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

//GET request
app.get('/', (req,res)=>{
//    res.send("<h1>Homepage<h1>")
res.render('home')
})

app.use(express.urlencoded({extended:true}))

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

app.get('/registration', (req,res)=>{
    res.render('registration.ejs')
}
)


app.post('/register', (req,res) =>{
    console.log(req.body)
    res.send('Post request received')
})


//Dealing with RESTful
comments =[
    {
        id:uuid(),
        username:'Alice',
        comment: 'Lol that is so cute!'
    },
    {
        id:uuid(),
        username: 'Bob',
        comment: 'I like that!'
    },
    {
        id:uuid(),
        username: 'John',
        comment: 'Booom!'
    },
    {
        id:uuid(),
        username: 'Shauwn',
        comment: 'Very bad!'
    }
]

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments})
})

app.get('/new', (req,res)=>{
    res.render('comments/new')
})

app.post('/comments', (req,res)=>{
    console.log(req.body)
    const { username, comment } = req.body
    comments.push({id:uuid(), username, comment})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req,res) =>{
    const {id} = req.params 
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment, id})
})
app.patch('/comments/:id', (req, res) =>{
    const {id} = req.params
    const OldComment = comments.find(c => c.id === id)
    const newComment = req.body.comment
    OldComment.comment = newComment 
    res.redirect('/comments')
})

//Everything else
app.get('*', (req,res)=>{
    res.send("Page not found!")
})
app.listen(8080, () => {
    console.log("Listening...")
})