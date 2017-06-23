<h1 align="center"><img src="https://img.fortawesome.com/349cfdf6/gh-logo.svg" alt="Font Awesome 5" width="50%"></h1>

Our $1,000,000 Kickstarter stretch goal brought our **SVG Framework** to all of
Font Awesome 5. We are super-excited to bring this to you.

As a Pro backer your early access preview gives you access to this new
framework and we need your help!

[We're collecting feedback here.](https://github.com/FortAwesome/Font-Awesome-Pro/issues/412)

## Different styles

With Font Awesome 5 Pro we are introducing three styles of icons - Solid, Regular, and Light. Each icon will look similar across styles, but will generally have different line thickness or outlines instead of solid fills. Also, some icons may have more customized treatments across styles as well.

| Style   | prefix |
|---------|--------|
| solid   | fa*    |
| regular | far    |
| light   | fal    |

\* Use can use `fas` as well. This is an alias for `fa`

## How do I try the SVG Framework out?

You have two options:

### Option 1: JavaScript

1. Grab one or more of the styles (ex: `alpha/solid.js`) in the `alpha` directory
1. Grab the loader `alpha/loader.js`
1. Place these files in your project static files
1. Include them in the `<head>` of your document

Example:

```html
<head>
  <script defer src="./solid.js"></script>
  <script defer src="./loader.js"></script>
</head>
<body>
  <i class="fa fa-user"></i>
</body>
```

Or if you want to use the light style:

```html
<head>
  <script defer src="./light.js"></script>
  <script defer src="./loader.js"></script>
</head>
<body>
  <i class="fal fal-user"></i>
</body>
```

Or multiple styles:

```html
<head>
  <script defer src="./light.js"></script>
  <script defer src="./regular.js"></script>
  <script defer src="./loader.js"></script>
</head>
<body>
  <i class="fal fal-user"></i>
  <i class="far far-magic"></i>
</body>
```

Optional prefix:

```html
<head>
  <script defer src="./solid.js"></script>
  <script defer src="./loader.js"></script>
</head>
<body>
  <i class="fas-user"></i> You don't have to have the prefix
</body>
```

You can also check out the `alpha/demo-js.html` file included to see an example of how to set this up as well as a reference for what icons you can currently use.

Pros:

- Most familiar (still use `<i class="fa fa-user"></i>`)
- Replaces icons with inline `<svg>` elements for you
- Includes and packages the CSS features of Font Awesome (like `.fa-spin`)
- Easy, automatic accessibility handling
- Support for unicode and ligatures (not complete yet)

Cons:

- You need JavaScript
- Not as performant as sprites
- DOM mutations take special handling
- Has a few moving parts

Browser support (tested using BrowserStack):

| On               | Edge   | IE              | Chrome                     | Firefox                    | Safari    | Opera  | Yandex |
|------------------|--------|-----------------|----------------------------|----------------------------|-----------|--------|--------|
| Desktop versions | last 2 | last 2 (10, 11) | last 2                     | last 2                     | last 2    | last 2 | 14     |
| Mobile versions  | -      | -               | iOS latest Android 6, 5, 4 | iOS latest Android 6, 5, 4 | iOS 9, 10 | -      | -      |

### Option 2: SVG Sprite

1. Grab one of the sprite files (`alpha/solid.svg`) in the `alpha` directory
1. Place this file in your project static files
1. In your HTML put something like this:

```html
<body>
  <svg>
    <use xlink:href="solid.svg#alarm-clock"></use>
  </svg>
</body>
```

You can also check out the `alpha/demo-sprite.html` file included to see an example of how to set this up as well as a reference for what icons you can currently use.

The way SVG Sprites work in this example is by auto-loading the URL for `solid.svg` and then using the `<symbol>` with the id of `alarm-clock`.

**Cross-origin caveat** This requires that you are serving the sprite from the same domain and port as the page.

**Serving locally** For this sprite to load you need to be serving it from `http` or `https`. If you try to open
`alpha/demo-sprite.html` from the file system (if your address begins with `file://`) it will fail to load.

Pros:

- No JavaScript
- Super simple
- Fast!

Cons:

- Cross-origin loading (like a CDN) is pretty tough
- Doesn't include the CSS framework
- Not backward compatible (cannot use `<i>`)
- Takes extra effort to make it accessible

Browser support (tested using BrowserStack):

| On               | Edge   | IE              | Chrome                     | Firefox                    | Safari    | Opera  | Yandex |
|------------------|--------|-----------------|----------------------------|----------------------------|-----------|--------|--------|
| Desktop versions | last 2 | no*             | last 2                     | last 2                     | last 2    | last 2 | 14     |
| Mobile versions  | -      | -               | iOS latest Android 6, 5, 4 | iOS latest Android 6, 5, 4 | iOS 9, 10 | -      | -      |

\* IE will not automatically download SVG documents referenced with `xlink:href`

## See it in action using a HTTP server on localhost

The quickest way to see these things in action is to launch a cheap (as in time) web server:

1. Open a shell/terminal window and `cd svg-framework/alpha`
1. Run `python -m SimpleHTTPServer 8080`
1. Open [`http://localhost:8080/demo-js.html`](http://localhost:8080/demo-js.html) or [`http://localhost:8080/demo-sprite.html`](http://localhost:8080/demo-sprite.html) in your browser
