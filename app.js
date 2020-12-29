// import
const express = require('express')
const app = express()
const port = 3000


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/js', express.static(__dirname+'public/js'))
app.use('/images', express.static(__dirname+'public/images'))



// set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res)=>{
    // res.sendFile(__dirname+ '/views/index.html')
    //res.render('index')
    res.render('index', {text: 'this is EJS'})
})

app.get('/about', (req, res)=>{
    // res.sendFile(__dirname+ '/views/index.html')
    //res.render('index')
    res.render('about', {text: 'This is about'})
})





// listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))