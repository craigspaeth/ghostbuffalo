express = require 'express'
PORT = process.env.PORT or 3000
NODE_ENV = process.env.NODE_ENV or 'development'

# Setup
app = module.exports = express()
app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'
if "development" is NODE_ENV
  console.log __dirname + '/stylesheets' 
  app.use require("stylus").middleware
    src: __dirname + '/stylesheets'
    dest: __dirname + '/public'
app.use express.static __dirname + '/public'

# Routes
app.get '/', (req, res) ->
  res.render 'index'

# Listen
app.listen PORT, ->
  console.log 'Listening on ' + PORT