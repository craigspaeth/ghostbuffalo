express = require 'express'
PORT = process.env.PORT or 3000
NODE_ENV = process.env.NODE_ENV or 'development'
fs = require 'fs'
_ = require 'underscore'

# Setup
app = module.exports = express()
app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'
if "development" is NODE_ENV
  app.use require("stylus").middleware
    src: __dirname + '/stylesheets'
    dest: __dirname + '/public'
app.use express.static __dirname + '/public'

# Routes
app.get '/', (req, res) ->
  res.render 'index'
app.get '/cartoons', (req, res) ->
  fs.readdir __dirname + '/public/cartoons', (err, files) ->
    res.render 'cartoons', source: _.sample files
app.get '/animations', (req, res) ->
  res.render 'animations'

# Listen
app.listen PORT, ->
  console.log 'Listening on ' + PORT