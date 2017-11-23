const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/index', function (req, res) {
    res.send('Hello World!')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app