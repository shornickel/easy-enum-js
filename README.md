# easy-enum-js
A javascript enumeration class for nodejs.

## Usage
The module exports a class **Enum**. Instantiation is easy:

``` javascript
let Enum = require('easy-enum-js');

const SampleEnum = new Enum('red', 'green', 'blue');
```

Values can be accessed by standard dot notation.

``` javascript

console.log(SampleEnum.green);

// output: 1
```

Or by the included function [getVal(key)](#getval).

A number of functions are included:

### toString()

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.toString();

// output: "{ "blue": 0; "green": 1; "red": 2 }"
```

### toObject()

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.toObject();

// output: { "blue": 0, "green": 1, "red": 2 }
```

### <a name="getval">getVal(key)</a>

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.getVal('red');

// output: 2
```
