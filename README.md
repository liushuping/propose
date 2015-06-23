# propose
Propse a word when the input word is not in the dictionary

[![build status](https://travis-ci.org/liushuping/propose.svg?branch=master)](https://travis-ci.org/liushuping/propose.svg?branch=master)

This module can be used to propse the right command in the scenario when there is a typo or mis-spell in the command line, it looks up the given dictionary and identifies the most similar word. It can also be used in any case that the string is formed by one or a series of known words, for example URL, directory path etc.

## Example
```javascript
var propose = require('propose');
var dictionary = ['hello', 'world'];
var word = 'hallo';
propose(word, dictionary); //hello
```

## Options
`threshold` [0~1] specifies only the word with similarity equals to or higher than that value will be returned
```javascript
var propose = require('propose');
var dictionary = ['aaaaaaaa', 'baabbbb', 'ccccc'];
var word = 'ab';
propose(word, dictionary, {
    threshold: 0.5
}); // null as the most similar word does not meet the threshold value
```

`ignoreCase` [true, false] specifies whether ignore case when comparing two words
```javascript
var propose = require('propose');
var dictionary = ['HELLO', 'hallo'];
var word = 'hello';
propose(word, dictionary, {
    ignoreCase: true
}); //'HELLO'
```

## Test
Make sure `mocha` is installed globally
```
npm install mocha -g
```
Run `npm test` to run unit test

## Dependencies
levenshtein-edit-distance

## License
MIT