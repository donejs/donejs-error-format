const assert = require('assert');
const {extract, html: formatHTML} = require('../main');

// Fixtures
var fourOhFourError = require('./fixtures/404');

describe('Errors with codeFrame', function(){
	it('Creates good HTML', function(){
		let parts = extract(fourOhFourError);
		let html = formatHTML(parts);

		assert.ok(html, "got some html");
	});
});
