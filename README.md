# remark-custom-blockquotes

Encapsulates a blockquote with a defined classname.

## Options

`mapping` (required) Object

```js
{
  'T>': 'tip',
  'W>': 'warning',
  '?>': 'todo'
}
```

## Example

Given

T> My blockquote text.

It will output

```html
<blockquote class="tip">
  <p>My blockquote text</p>
</blockquote>
```
