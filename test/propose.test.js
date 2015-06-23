var assert = require('assert');
var propose = require('../propose.js');

describe('#propose', function() {
    it('should propose the word with short edit distance', function() {
        var dictionary = ['hello', 'world'];
        var word = 'hallo';
        var propsed = propose(word, dictionary);
        assert.strictEqual(propsed, 'hello');
    });

    it('should propose the word when it exactly matches', function() {
        var dictionary = ['hollo', 'hello', 'hillo'];
        var word = 'hello';
        var proposed = propose(word, dictionary);
        assert.strictEqual(proposed, 'hello');
    });

    it('should propose the word within the given threshhold', function() {
        var dictionary = ['aaaaaaaa', 'baabbbb', 'ccccc'];
        var word = 'ab';
        var proposed = propose(word, dictionary, {
            threshold: 0.5
        });
        assert.strictEqual(proposed, null);
        proposed = propose(word, dictionary, {
            threshold: 0.2
        });
        assert.strictEqual(proposed, 'baabbbb');
    });

    it('should ignore case when the "ignoreCase" option is on', function() {
        var dictionary = ['HELLO', 'hallo'];
        var word = 'hello';
        assert.strictEqual(propose(word, dictionary), 'hallo');
        assert.strictEqual(propose(word, dictionary, {
            ignoreCase: true
        }), 'HELLO');
    });
});