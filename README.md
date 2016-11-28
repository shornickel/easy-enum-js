# easy-enum-js
A javascript enumeration class for nodejs.

## Usage
The module exports a class **Enum**. Instantiation is easy:

``` javascript
let Enum = require('easy-enum-js');

const SampleEnum = new Enum('red', 'green', 'blue');
```

A number of functions are included:

### toString()

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.toString();

// output: { blue: 0; green: 1; red: 2 }
```

### toObject()

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.toObject();

// output: { "blue": 0, "green": 1, "red": 2 }
```

### getVal(key)

``` javascript
const SampleEnum = new Enum('red', 'green', 'blue');

SampleEnum.getVal('red');

// output: 2
```
