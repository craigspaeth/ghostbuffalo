s:
	node_modules/.bin/coffee index.coffee

commit:
	git add .
	git commit -a -m 'deploying...'
	git push git@github.com:craigspaeth/ghostbuffalo.git master

deploy: commit
	git push git@heroku.com:ghostbuffalo.git master
	open http://ghostbuffalo.com/