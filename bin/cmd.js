#!/usr/bin/env node
// https://gist.github.com/azu/aed39e9917e3085439a2
var getMarkdownTitle = require('get-md-title');
var concat = require('concat-stream');
var fs = require('fs');
var file = process.argv[2];
var input = file && file !== '-'
        ? fs.createReadStream(process.argv[2])
        : process.stdin
    ;
input.pipe(concat(function (buf) {
    console.log(getMarkdownTitle(buf.toString('utf8')).text);
}));