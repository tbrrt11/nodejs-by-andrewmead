const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../mvc/views')
const partialsPath = path.join(__dirname, '../mvc/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Thiago Barreto'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Thiago Barreto'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Thiago Barreto'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a search term.'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        } else {
            forecast(latitude, longitude, (error, data) => {
                if (error) {
                    return res.send({ error })
                } else {
                    return res.send({
                        forecast: data,
                        location
                    })
                }
            })
        }
    })
})

app.get('/products/', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term.'
        })
    }
    
    res.send({
        products: [req.query.search]
    })
})

app.get('/help/*', (req, res) => {
    res.render('help404', {
        title: 'Help 404',
        name: 'Thiago Barreto'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page not found 404',
        name: 'Thiago Barreto'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})