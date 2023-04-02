const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world');
})

app.listen(5000, (req, res) => {
    console.log('listening on http://localhost:5000')
});