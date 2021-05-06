import Vue from 'vue';

let Parser = require('rss-parser');
let parser = new Parser();

let RssParser = {};

RssParser.install = function (Vue, options) {
  Vue.prototype.$parse = function (url) {
    let feed = parser.parseURL('https://www.reddit.com/.rss');
    return feed;
  }
}

Vue.use(RssParser);