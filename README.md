# Overview

A simple, unopinionated React hook for lazy-loading.

**NOTE:** This library uses Interaction Observer API so you will need to use
a polyfill to support older browsers.

### Usage

```js
import { useLazyLoading } from 'use-lazy-loading'

const { lazyLoad } = useLazyLoading(target => {
  target.setAttribute('src', target.getAttribute('data-src'))
  target.classList.add('loaded')
})
React.useEffect(() => {
  lazyLoad()
}, [])
```

## Initialization

`useLazyLoading(entryCallback, target, config)`

### Arguments

| name            | type       | required | default            | description                                                                                                                                          |
| --------------- | ---------- | -------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entryCallback` | `Function` | yes      |                    | A function that is invoked once the target becomes visible. The function should accept the parameter `target` that is the element being operated on. |
| `target`        | `String`   | no       | `[data-src]`       | The query selector used to find the element that needs to be loaded.                                                                                 |
| `config`        | `Object`   | no       | `{threshold: 1.0}` | The configurations used to instantiate the intersection observer object.                                                                             |

## API

### Methods

#### `lazyLoad()`

Creates the Intersection Observer and binds the scroll handler.
