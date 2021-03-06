
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test:
	@npm install
	@./node_modules/.bin/mocha \
		--reporter spec \
		--require should

.PHONY: clean test
