# Metadata with Open Graph for SSR SPAs

### Usage

```javascript
import { meta, done } from '@sveltech/meta'

meta('title', 'Title of my website')
meta('description', 'Description of my website')
meta('twitter:card', 'summary')
```

This produces the following HTML in `<head>`

```HTML
<meta name="title" content="Title of my website">
<meta property="og:title" content="Title of my website">
<meta name="description" content="Description of my website">
<meta property="og:description" content="Description of my website">
<meta name="twitter:card" content="summary">
```
###### Metadata without a colon in the name will produce an additional Open Graph element.

The meta function can be disabled by calling ``done()`` or firing an ``app-loaded`` event.



