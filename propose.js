var levenshtein = require('levenshtein-edit-distance');

function propose() {
    var ratio;
    var distance;
    var proposed;
    var threshold;
    var ignoreCase;
    var max_ratio = 0;
    var word = arguments[0];
    var dictionary = arguments[1];
    var len = dictionary.length;
    var options = arguments[2];

    if (options) {
        threshold = options.threshold;
        ignoreCase = options.ignoreCase;
    }

    if (threshold === undefined)
        threshold = 0;

    for (var i = 0; i < len; ++i) {
        if (ignoreCase)
            distance = levenshtein(word, dictionary[i], true);
        else
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

    if (max_ratio >= threshold)
        return proposed;

    return null;
}

module.exports = propose;