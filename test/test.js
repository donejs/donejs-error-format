const assert = require('assert');
const {extract, html: formatHTML} = require('../main');

// Fixtures
var fourOhFourError = require('./fixtures/404');
var stackError = require('./fixtures/stack');

describe('Errors with codeFrame', function(){
	it('Creates good HTML', function(){
		let parts = extract(fourOhFourError);
		let html = formatHTML(parts);

		assert.ok(html, "got some html");
	});
});

describe('Errors with a stack', function(){
	it('Creates good HTML', function(){
		let parts = extract(stackError);
		let html = formatHTML(parts);

		assert.ok(!/class="message"/.test(html), "Message not included");
		assert.ok(/class="stack-trace"/.test(html), "Stack trace is included");
	});
})
