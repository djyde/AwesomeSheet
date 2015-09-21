# AwesomeSheet

Frontend UIActionSheet

![](http://ww3.sinaimg.cn/large/62580dd9gw1ewa8c6kiu3g208q0el0tr.gif)

# Install

```shell
$ npm install awesomesheet
```

# Usage

```javascript

// require core javascript
var as = require('awesomesheet');

// require style
require('awesomesheet/lib/AwesomeSheet.scss'); // or css

as.show();
as.hide();
```

HTML:

```html
<div id="awesome-sheet">
  <div class="sheet">
    <div class="item">sheet 1</div>
    <div class="item">sheet 1</div>
    <div class="item">sheet 1</div>
  </div>
</div>
```

# Customize

You can edit `lib/Awesome.css` `lib/Awesome.scss` or write your own stylesheet file to overwrite default style.

# License

MIT License
