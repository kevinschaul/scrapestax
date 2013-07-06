#!/usr/bin/env node

var jsdom = require('jsdom');
var optimist = require('optimist');
var fs = require('fs');
var jquery = fs.readFileSync('./jquery.js', 'utf-8');

var argv = optimist
    .usage('Usage: node haystax-scrape.js URL [options]')
    .options('s', {
        alias: 'selector',
        describe: 'jQuery selector'
    })
    .options('m', {
        alias: 'mode',
        describe: 'scraping mode',
        default: 'table',
    })
    .options('h', {
        alias: 'help',
        describe: 'Display help',
        default: false
    })
    .check(function(argv) {
        if (argv._.length !== 1) throw new Error('URL must be given.');
        if (!argv.s || !argv.selector) throw new Error('A selector must be given.');
    })
    .argv;

if (argv.h || argv.help) return optimist.showHelp();

var url = argv._[0];
var selector = argv.s || argv.selector;
var mode = argv.m || argv.mode;

jsdom.env({
    url: url,
    src: [jquery],
    done: function (errors, window) {
        var $ = window.$;

        switch (mode) {
            case 'table': {
                var out = [];

                var table = $(selector);
                var trs = table.find('tr');

                $.each(trs, function() {
                    var tr = $(this);
                    var tds = tr.find('td');

                    $.each(tds, function(i) {
                        var td = $(this);
                        out.push($.trim(td.text()));

                        if (i < tds.length) {
                            out.push(',');
                        }
                    });
                    out.push('\n');
                });

                console.log(out.join(''));

                break;
            }
            default: {
                console.log('Unknown mode');
            }
        }
    }
});

