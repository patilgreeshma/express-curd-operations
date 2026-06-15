


# 1. HTML Structure (HTML5 - Latest Version)

**HTML (HyperText Markup Language)** is the standard language for creating and structuring web pages using tags and elements. It defines how content such as text, images, and links are displayed in a web browser.

---

# 2. Block-Level Elements

Block-level elements:

- Start on a new line.
- Occupy the full available width by default.
- Stack vertically one below another.
- Can contain both block-level and inline elements.

## Examples

### `<div>`
A general-purpose container used to group and organize other HTML elements.

```html
<div>
    <p>This is inside a div element.</p>
</div>
```

### `<p>`
Defines a paragraph.

```html
<p>This is a paragraph.</p>
```

### `<h1>` to `<h6>`
Heading elements of different levels.

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
```

### `<ol>` and `<ul>`
Ordered and unordered lists.

```html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>

<ul>
    <li>Apple</li>
    <li>Orange</li>
</ul>
```

### `<table>`
Defines a table.

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
</table>
```

### `<form>`
Used to collect user input through HTML forms.

```html
<form>
    <label>Name:</label>
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>
```

### Semantic Block-Level Elements

These elements define meaningful sections of a webpage:

- `<section>` — Defines a section of content.
- `<article>` — Represents independent content.
- `<nav>` — Contains navigation links.
- `<aside>` — Contains related or sidebar content.
- `<header>` — Represents introductory content.
- `<footer>` — Represents footer information.

```html
<header>
    <h1>Website Title</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
</nav>

<section>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</section>

<aside>
    Related Links
</aside>

<footer>
    © 2025 My Website
</footer>
```
# 3. Inline Elements

Inline elements:

- Do **not** start on a new line.
- Occupy only the width required by their content.
- Appear within the flow of text.
- Cannot generally contain block-level elements.

## Examples

### `<span>`
A generic inline container used for styling or scripting parts of text.

```html
<p>This is a <span style="color: blue;">blue text</span> inside a paragraph.</p>
```

### `<a>`
Defines a hyperlink.

```html
<a href="https://example.com">Visit Example</a>
```

### `<strong>`
Represents important text (typically displayed in bold).

```html
<p>This is <strong>important</strong> text.</p>
```

### `<em>`
Represents emphasized text (typically displayed in italics).

```html
<p>This is <em>emphasized</em> text.</p>
```

### `<b>`
Displays text in bold without adding importance.

```html
<p>This is <b>bold</b> text.</p>
```

### `<i>`
Displays text in italics without adding emphasis.

```html
<p>This is <i>italic</i> text.</p>
```

### `<u>`
Displays underlined text.

```html
<p>This is <u>underlined</u> text.</p>
```

### `<mark>`
Highlights text.

```html
<p>This is <mark>highlighted</mark> text.</p>
```

### `<small>`
Represents smaller text.

```html
<p>This is <small>small text</small>.</p>
```

### `<sub>` and `<sup>`
Used for subscript and superscript text.

```html
<p>H<sub>2</sub>O</p>
<p>x<sup>2</sup></p>
```

### `<code>`
Represents inline code snippets.

```html
<p>Use the <code>console.log()</code> function to print output.</p>
```

### `<img>`
Embeds an image.

```html
<img src="image.jpg" alt="Sample Image" width="200">
```

### `<label>`
Defines a label for form elements.

```html
<label for="username">Username:</label>
<input type="text" id="username">
```

### `<input>`
Accepts user input.

```html
<input type="text" placeholder="Enter your name">
```

## Example of Multiple Inline Elements

```html
<p>
    Welcome to
    <a href="#">our website</a>.
    Please read the
    <strong>important</strong>
    instructions and visit the
    <em>help section</em>.
</p>
```

# 4. HTML Attributes

**HTML attributes** provide additional information about HTML elements. They are specified within the opening tag and usually consist of a **name-value pair**.

### Syntax

```html
<tagname attribute="value">Content</tagname>
```

### Example

```html
<a href="https://example.com">Visit Website</a>
```

Here:

- `href` is the attribute.
- `https://example.com` is the attribute value.

---

## Common HTML Attributes

### `id`

Provides a unique identifier for an element.

```html
<p id="intro">Welcome to HTML.</p>
```

### `class`

Assigns one or more class names to an element for styling or scripting.

```html
<p class="highlight">This text is highlighted.</p>
```

### `href`

Specifies the destination URL for a hyperlink.

```html
<a href="https://example.com">Visit Example</a>
```

### `src`

Specifies the source file for media elements such as images.

```html
<img src="image.jpg" alt="Sample Image">
```

### `alt`

Provides alternative text for an image.

```html
<img src="logo.png" alt="Company Logo">
```

### `title`

Displays additional information when the user hovers over an element.

```html
<p title="This is a tooltip">Hover over this text.</p>
```

### `style`

Applies inline CSS styles to an element.

```html
<p style="color: blue;">Blue Text</p>
```

### `width` and `height`

Define the width and height of an element.

```html
<img src="image.jpg" width="300" height="200">
```

### `target`

Specifies where a linked document should open.

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```

### `placeholder`

Provides a hint inside input fields.

```html
<input type="text" placeholder="Enter your name">
```

### `value`

Specifies the initial value of an input element.

```html
<input type="text" value="John">
```

### `disabled`

Disables an input element.

```html
<input type="text" disabled>
```

### `required`

Makes an input field mandatory.

```html
<input type="email" required>
```

---

## Global Attributes

These attributes can be used with most HTML elements:

- `id`
- `class`
- `style`
- `title`
- `hidden`
- `lang`
- `dir`
- `tabindex`

### Example

```html
<div id="main"
     class="container"
     title="Main Container">
    Content goes here.
</div>
```

---

## Multiple Attributes Example

```html
<img
    src="profile.jpg"
    alt="Profile Picture"
    width="200"
    height="200"
    title="User Profile">
```

### Output

An image will be displayed with:

- Source: `profile.jpg`
- Alternative text: `Profile Picture`
- Width: `200px`
- Height: `200px`
- Tooltip: `User Profile`




config:- types of configuration helps the ex-database collections,
handlers:- handle the input and output . take the logic and url combine
model:- to create the tables
route:- add url and function
servies:- business logic

/Users/greeshmapatil/Desktop/mern/src/config