const assert = require('assert');
const {extract, html: formatHTML} = require('./main');
const fs = require("fs");

// Fixtures
var fourOhFourError = require('./test/fixtures/404');

let parts = extract(fourOhFourError);
let html = formatHTML(parts);

fs.writeFileSync(__dirname + "/example/error.html", html, "utf8");
