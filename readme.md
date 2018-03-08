# donejs-error-format

An error formatter for Errors that are emitted by [done-ssr](https://github.com/donejs/done-ssr).

# Install

```shell
npm install donejs-error-format --save
```

# Usage

If you are using done-serve, it already uses donejs-error-format internally. If you use done-ssr or done-ssr-middleware, you can use this module to format your error messages.

## done-ssr

```js
const errorFormat = require("donejs-error-format");
const ssr = require("done-ssr");

const render = ssr({ config: __dirname + "/package.json" });

function app(request, response) {
	// More stuff here, obviously, like static assets, etc.

	let stream = render(request);

	stream.on("error", function(error){
		let parts = errorFormat.extract(error);
		let html = errorFormat.html(parts);

		console.error(error);

		response.writeHead(200, { type: "text/html" });
		response.end(html);
	});

	stream.pipe(response);
}

require("http").createServer(app).listen(8080);
```

## done-ssr-middleware

```js
const express = require("express");
const errorFormat = require("donejs-error-format");
const ssr = require("done-ssr-middleware");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(ssr({ config: __dirname + "/package.json!npm" }));


// The last middleware should be the error handler
app.use(function(error, request, response, next) {
	let parts = errorFormat.extract(error);
	let html = errorFormat.html(parts);

	console.error(error);

	response.type("html").end(html);
});
```

# License

MIT
