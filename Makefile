BIN = node_modules/.bin

s:
	$(BIN)/coffee index.coffee

assets:
	$(BIN)/stylus stylesheets/index.styl -o public/

commit:
	git add .
	git commit -a -m 'deploying...'
	git push git@github.com:craigspaeth/ghostbuffalo.git master

deploy: commit
	git push git@heroku.com:ghostbuffalo.git master
	open http://ghostbuffalo.com/