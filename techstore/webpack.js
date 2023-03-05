const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
var outputLog = {};
const fs = require('fs');

const outputLogPath = "/Desktop/wlstore/wlstoreapp/statlogs/nodelogs/"

const fileWritePath = function () {
    var chunksWritePath = '';
    if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() == 'prod') {
        chunksWritePath = '/Desktop/wlstore/wlstoreapp/pwagifs/';
    } else if () {
        
    } else if () {
        
    } else {

    }
}