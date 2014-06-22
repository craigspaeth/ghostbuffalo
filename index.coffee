express = require 'express'
PORT = process.env.PORT or 3000

# Setup
app = module.exports = express()
app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'

# Routes
app.get '/', (req, res) ->
  res.render 'index'

# Listen
app.listen PORT, ->
  console.log 'Listening on ' + PORT