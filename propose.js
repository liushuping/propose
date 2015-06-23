var levenshtein = require('levenshtein-edit-distance');

function propose() {
    var ratio;
    var distance;
    var proposed;
    var threshhold;
    var ignorecase;
    var max_ratio = 0;
    var word = arguments[0];
    var dictionary = arguments[1];
    var len = dictionary.length;
    var options = arguments[2];

    if (options) {
        threshhold = options.threshhold;
        ignorecase = options.ignorecase;
    }

    if (threshhold === undefined)
        threshhold = 0;

    for (var i = 0; i < len; ++i) {
        distance = levenshtein(word, dictionary[i]);
        if (distance > word.length)
            ratio = 1 - distance / dictionary[i].length;
        else
            ratio = 1 - distance / word.length;

        if (ratio > max_ratio) {
            max_ratio = ratio;
            proposed = dictionary[i];
        }
    }

    if (max_ratio >= threshhold)
        return proposed;

    return null;
}

module.exports = propose;