BIN = node_modules/.bin

s:
	$(BIN)/coffee index.coffee

assets:
	$(BIN)/stylus stylesheets/index.styl -o public/

commit: assets
	git add .
	git commit -a -m 'deploying...'
	git push git@github.com:craigspaeth/ghostbuffalo.git master

deploy: commit
	git push git@heroku.com:ghostbuffalo.git master
	open http://ghostbuffalo.com/

compress:
	$(foreach file, $(shell find public/_cartoons -name '*.jpg' | cut -d '.' -f 1 | cut -d '/' -f 3), \
		convert -strip -interlace Plane -quality 80% public/_cartoons/$(file).jpg public/cartoons/$(file).jpg \
	)