# A jqmath wrapper for webpack
> jqmath is a wonderful library for rendering math in web. The official site is [http://www.mathscribe.com/author/jqmath.html](http://www.mathscribe.com/author/jqmath.html)

## usage
### webpack
```js
var parseMath = require('jqmath').parseMath
parseMath(document.body)
```

### ES6
```js
import {parseMath} from 'jqmath'
parseMath(document.body)
```