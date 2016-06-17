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
    var string = buf.toString('utf8');
    try {
        console.log(getMarkdownTitle(string).text);
    } catch (error) {
        console.error(new Error("Not found title :\n" + string));
        process.exit(1);
    }
}));