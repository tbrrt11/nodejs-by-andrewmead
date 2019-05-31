const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Helper here.')
})

app.get('/about', (req, res) => {
    res.send('About page.')
})

app.get('/weather', (req, res) => {
    res.send('Watch out for the rain that is coming.')
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})