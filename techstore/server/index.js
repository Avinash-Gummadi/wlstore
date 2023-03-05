require('@babel/register')({
    presets: ['@babel/react', '@babel/present-env']
});
require('@babel/core').transform("code", {
    plugins: ["dynamic-import-webpack"],
});
require("babel-polyfill");

var port = (typeof (process.env.PORT_M) !== 'undefined' ? process.env.PORT_M : 8083);
var fs = require('fs');

var Express = require('express');

var app = Express();
var router = require('./Router/routes');

var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var requestIp = require('request-ip');

var compression = require('compression');
app.use(compression());

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(requestIp.mw()); // define request ip middleware
app.use(cors());
app.use(cookieParser());

if (process.env.NODE_ENV !== 'PROD') {
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var versionData = JSON.parse(fs.readFileSync(__dirname + '/version.json', 'utf-8'));
    var chunkWritePath = require('../webpack');
    var config = require('../webpack.config')(Number(versionData.main_min), Number(versionData.jsChunks), Number(versionData.cssChunks), chunkWritePath);
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        writeToDisk: true,
        publicPath: config.output.publicPath,
        historyApiFallback: true
    }));
}

app.set('etag', false); // turn off

if (typeof (process.env.NODE_ENV_M) == 'undefined') {
    var domainName = process.env.NODE_ENV_M ? '' : 'localhost';
} else {
    var domainName = process.env.NODE_ENV_M ? '' : 'prod-techstore-nodejs';
}

app.listen(port, domainName, function (error) {
    console.log("index.js server port: ", port);
    if (error) {
        console.log("index.js server error: ", error);
    } else {
        console.log(`Listening on port ${port}. Browser localhost:${port}/`);
    }
});

// if (process.env.NODE_ENV_M == 'PROD') { // Kibana logs for later use
//     require('elastic-apm-node').start({
//         serviceName: 'prod-techstore-nodejs',
//         secretToken: 'P5FqLU1dMgu1',
//         serviceUrl: 'https://kibana-apm.intermesh.net:8300/',
//     });
// }

router(app);