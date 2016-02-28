var express = require('express');
var webpack = require('webpack');
var path = require('path');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var webpackConfig = require('./webpack.config.js');

var app = express();

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true, 
		chunks: false
	}
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
	var memoryFs = compiler.outputFileSystem;
	var index = path.join(webpackConfig.output.publicPath, 'index.html');
	var html = memoryFs.readFileSync(index);
	res.end(html)
});

app.listen(3000);