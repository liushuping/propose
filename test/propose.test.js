var assert = require('assert');
var propose = require('../propose.js');

describe('#propose', function() {
    it('should propose the word with short edit distance', function() {
        var dictionary = ['hello', 'world'];
        var word = 'hallo';
        var propsed = propose(word, dictionary);
        assert.strictEqual(propsed, 'hello');
    })
});