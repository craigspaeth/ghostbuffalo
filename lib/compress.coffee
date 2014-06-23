fs = require 'fs'
{ resolve } = require 'path'
{ exec } = require 'child_process'

files = fs.readdirSync resolve __dirname, '../public/_cartoons'
for file, i in files when file.match /\.jpg/i
  exec(
    "convert -strip -interlace Plane -quality 80% " +
    "'#{resolve(__dirname, '../public/_cartoons')}/#{file}' " +
    "'#{resolve(__dirname, '../public/cartoons')}/#{i}.jpg'"
  )