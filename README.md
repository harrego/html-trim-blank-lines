# html-trim-blank-lines
Remove blank lines from HTML while preserving `pre` content.

- Removes blank lines from HTML, while retaining lines within `pre` tags
- Does no other processing to the HTML
- No dependencies
- Single file, easy to audit code
 
# Usage

`htmlTrimBlankLines(html)` is the only method provided: it's only argument is the input HTML as a string, and it returns the trimmed HTML as a string.

```javascript
const { htmlTrimBlankLines } = require("html-trim-blank-lines")

const html = `
<h1>Example page</h1>

<ul>
  <li>Item one</li>
  
  
  <li>Item two</li>
  
</ul>
<pre>
multi-line pre content

- item one
  - subitem
 
</pre>
`

const trimmed = htmlTrimBlankLines(html)
console.log(trimmed)
```

```html
<h1>Example page</h1>
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
<pre>
multi-line pre content

- item one
  - subitem
 
</pre>
```

## Installation

[Available on NPM](https://www.npmjs.com/package/html-trim-blank-lines).

```
npm i html-trim-blank-lines
```
