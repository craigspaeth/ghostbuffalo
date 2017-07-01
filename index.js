const express = require('express')
const fs = require('fs')
const _ = require('underscore')

const PORT = process.env.PORT || 3000
let NODE_ENV = process.env.NODE_ENV || 'development'

// Setup
let app = module.exports = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
if (NODE_ENV === 'development') {
  app.use(
    require('stylus').middleware({
      src: __dirname + '/stylesheets',
      dest: __dirname + '/public'
    })
  )
}
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', (req, res) => res.render('index'))
app.get('/cartoons', (req, res) =>
  fs.readdir(__dirname + '/public/cartoons', (err, files) =>
    res.render('cartoons', { source: _.sample(files) })))
app.get('/animations', (req, res) => res.render('animations'))
app.get('/interactive-cartoons', (req, res) =>
  res.render('interactive-cartoons'))

// Listen
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
