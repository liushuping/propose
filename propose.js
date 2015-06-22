var levenshtein = require('levenshtein-edit-distance');

function propose() {
    var ratio;
    var distance;
    var proposed;
    var min_ratio = 2;
    var word = arguments[0];
    var dictionary = arguments[1];
    var len = dictionary.length;
    var threshhold_ratio = arguments[2];

    if (threshhold_ratio === undefined)
        threshhold_ratio = 2;

    for (var i = 0; i < len; ++i) {
        distance = levenshtein(word, dictionary[i]);
        if (distance > word.length)
            ratio = distance / dictionary[i].length;
        else
            ratio = distance / word.length;

        if (ratio < min_ratio) {
            min_ratio = ratio;
            proposed = dictionary[i];
        }
    }

    if (min_ratio <= threshhold_ratio)
        return proposed;

    return null;
}

module.exports = propose;