install:
	npm install
lint:
	npm run eslint .
publish:
	rm -rf dist
	npm publish
start:
	npm run babel-node -- src/bin/brain-games.js