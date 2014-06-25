BIN = node_modules/.bin

s:
	find . -name '*.DS_Store' -type f -delete
	$(BIN)/coffee index.coffee

assets:
	$(BIN)/stylus stylesheets/index.styl -o public/

commit: assets
	find . -name '*.DS_Store' -type f -delete
	git add .
	git commit -a -m 'deploying...'
	git push git@github.com:craigspaeth/ghostbuffalo.git master

deploy: commit
	git push git@heroku.com:ghostbuffalo.git master
	open http://ghostbuffalo.com/

compress:
	$(BIN)/imageOptim --directory public/cartoons