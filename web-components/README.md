# UMD Libraries Web Components

This package is a standalone Lit distribution of the first static UMD Libraries components. It does not change or replace the Drupal Single Directory Components.

## Use In A Project

Build the package and publish or copy the contents of `dist/` to an asset directory in the consuming project:

```bash
npm install
npm run build
```

The build produces predictable JavaScript and CSS bundle names in `dist/`:

```text
dist/umd-libraries-components.js
dist/umd-libraries-components.css
```

Include both files in the consuming HTML document. The JavaScript must be loaded as a module; it registers all four custom elements. Lit is bundled into this file and does not need to be included separately.

```html
<link rel="stylesheet" href="/assets/umd-libraries-components.css">
<script type="module" src="/assets/umd-libraries-components.js"></script>
```

The filenames are configured in `vite.config.js` through Vite's Rollup output configuration. The JavaScript and CSS files are intentionally un-hashed, so deployment systems should replace or version the assets as a unit when publishing a new build.

The components can be used in plain HTML, server-rendered pages, or another frontend framework. Wait for the module to load before creating elements dynamically, or use `customElements.whenDefined("umd-image")` when necessary.

## Shared SDC styles

The matching Drupal component stylesheets are imported directly from `components/` with Vite's `?inline` import and added to each element's shadow-root stylesheet. The CSS is bundled when this package is built, so it does not require Drupal or a runtime request for the theme files.

The standalone package still owns its design-token and utility CSS because those styles are global in Drupal and cannot cross a Shadow DOM boundary automatically. Changes to a matching SDC stylesheet are picked up by the next `npm run build`.

## Components

### Separator

`umd-separator` renders a horizontal rule.

Attributes:

- `variant`: `red`, `yellow`, `gray`, `bronze`, or `black`. Defaults to `red`.
- `margin`: `wide`, `medium`, or `small`. Defaults to `medium`.
- `componentid`: Optional element ID.

```html
<umd-separator
  variant="bronze"
  margin="wide"
  componentid="section-divider"
></umd-separator>
```

### Image

`umd-image` renders a responsive image and an optional caption.

Attributes:

- `src`: Image URL.
- `alt`: Alternative text.
- `variant`: `freeform`, `sixteen_to_nine`, `three_to_two`, `four_to_three`, or `one_to_one`. Defaults to `freeform`.
- `orientation`: `landscape` or `portrait`. Defaults to `landscape`.
- `componentid`: Optional element ID.

Use the named `caption` slot for caption content:

```html
<umd-image
  src="/images/library.jpg"
  alt="Library shelves"
  variant="three_to_two"
  orientation="landscape"
>
  <span slot="caption">The library stacks.</span>
</umd-image>
```

### Text

`umd-text` renders arbitrary HTML through its default slot.

Attributes:

- `label`: Optional label displayed above the content.
- `componentid`: Optional element ID.
- `component-class`: Optional additional CSS class.

```html
<umd-text label="Hours and access" componentid="hours-content">
  <p>Library access is available to all registered students.</p>
  <ul>
    <li>Monday through Friday: 8 a.m. to 10 p.m.</li>
    <li>Saturday and Sunday: 10 a.m. to 6 p.m.</li>
  </ul>
</umd-text>
```

### Text Callout

`umd-text-callout` renders slotted HTML in a highlighted note region.

Attributes:

- `componentid`: Optional element ID.

```html
<umd-text-callout componentid="renewal-note">
  <p>Items can be renewed online before their due date.</p>
</umd-text-callout>
```

### Accordion

`umd-accordion` renders one expandable accordion item. The title and body are named slots so they can contain text or HTML from a consuming application.

Attributes:

- `heading-level`: `h2`, `h3`, `h4`, `h5`, or `h6`. Defaults to `h3`.
- `default-open`: Boolean attribute. Opens the item initially when present.
- `link-text`: Optional link text shown below the body.
- `link-url`: Optional link URL. The link is shown only when both link attributes are present.
- `componentid`: Optional ID used for the accordion container and generated body relationship.

```html
<umd-accordion
  heading-level="h3"
  default-open
  link-text="View all research guides"
  link-url="/research-guides"
  componentid="research-guides-accordion"
>
  <span slot="title">Research guides</span>
  <div slot="body">
    <p>Find subject-specific guidance created by our librarians.</p>
  </div>
</umd-accordion>
```

### Alert

`umd-alert` renders an in-page or site-wide alert. Site-wide alerts include a close button; closing the element removes it from the rendered component.

Attributes:

- `variant`: `in_page` or `site_wide`. Defaults to `in_page`.
- `heading-level`: `h2` through `h6` for in-page alerts. Defaults to `h2`.
- `image`: Optional image URL. Site-wide alerts require `image-alt` when an image is supplied.
- `image-alt`: Alternative text for the optional image.
- `link-text`: Optional link text.
- `link-url`: Optional link URL. The link is shown only when both link attributes are present.
- `customization-class`: Optional additional CSS class for site-wide customization.
- `componentid`: Optional stable ID for the alert.

```html
<umd-alert
  variant="site_wide"
  componentid="summer-hours-alert"
  image="/images/summer-hours.jpg"
  image-alt="Students studying in the library"
  link-text="See all hours"
  link-url="/hours"
>
  <span slot="title">Summer hours are now in effect</span>
  <p slot="description">Check the updated schedule before planning your visit.</p>
</umd-alert>
```

### Scroll To Top

`umd-scroll-to-top` renders a fixed, accessible scroll-to-top button. It becomes visible after the page scrolls past the threshold.

Attributes:

- `threshold`: Number of pixels to scroll before showing the button. Defaults to `300`.

```html
<umd-scroll-to-top threshold="500"></umd-scroll-to-top>
```

### Tabs

`umd-tabs` manages a tablist, its tab triggers, and associated tab panels. Supply native buttons with `role="tab"` and panels with `role="tabpanel"` through the named slots. Each trigger ID must be `tab-{value}`, and its panel ID must be `tabpanel-{value}`.

Attributes:

- `default-tab`: The tab value selected initially, for example `catalog` for `tab-catalog`.
- `tab-label`: Accessible label for the tablist.
- `id` or `componentid`: Optional container ID used when writing a compound URL hash.

The element provides roving keyboard focus, Left/Right arrow navigation, Home/End navigation, active panel visibility, responsive indicator positioning, and URL hashes such as `#library-tabs--catalog` when the component has an ID.

```html
<umd-tabs id="library-tabs" default-tab="catalog" tab-label="Library resources">
  <button
    slot="triggers"
    id="tab-catalog"
    type="button"
    role="tab"
    aria-controls="tabpanel-catalog"
  >
    Catalog
  </button>
  <button
    slot="triggers"
    id="tab-guides"
    type="button"
    role="tab"
    aria-controls="tabpanel-guides"
  >
    Research guides
  </button>

  <div slot="content" id="tabpanel-catalog" role="tabpanel" aria-labelledby="tab-catalog">
    <p>Search books, journals, and other library materials.</p>
  </div>
  <div slot="content" id="tabpanel-guides" role="tabpanel" aria-labelledby="tab-guides">
    <p>Browse subject and course research guides.</p>
  </div>
</umd-tabs>
```

The components use Shadow DOM and preserve the existing variant names and content concepts. Content passed through slots remains in the light DOM, while component markup and imported component styles are encapsulated.

```html
<umd-image src="/image.jpg" alt="Library shelves" variant="three_to_two">
  <span slot="caption">Caption text</span>
</umd-image>
```

## Development

```bash
npm install
npm run dev
npm run build
```

Run `npm run dev` to open the local demonstration page at the Vite development URL. The demonstration source is [index.html](index.html); it shows the components working together and is not required by consuming projects.
