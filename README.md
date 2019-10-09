# vue2-superplaceholder

SuperPlaceholder based on [superplaceholder.js](https://github.com/chinchang/superplaceholder.js) for Vue 2.x.

[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-airbnb/prettier-FF5A5F.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## Installation

```bash
# yarn
$ yarn add vue2-superplaceholder

# npm
$ npm install vue2-superplaceholder --save
```

## Example

```vue
<template>
  <super-placeholder
    :sentences="['Something to show', 'Another thing to show']"
    v-model="form.email"
    :options="{ cursor: '_' }"
  >
  </super-placeholder>
</template>

<script>
import SuperPlaceholder from 'vue2-superplaceholder';

export default {
  data() {
    return {
      form: {
        email: null,
      },
    };
  },
  components: {
    SuperPlaceholder,
  },
};
</script>
```

---

### Customization

Optional `options` object for custom settings.

```js
options: {
		// delay between letters (in milliseconds)
		letterDelay: 100, // milliseconds
		// delay between sentences (in milliseconds)
		sentenceDelay: 1000,
		// should start on input focus. Set false to autostart
		startOnFocus: true, // [DEPRECATED]
		// loop through passed sentences
		loop: false,
		// Initially shuffle the passed sentences
		shuffle: false,
		// Show cursor or not. Shows by default
		showCursor: true,
		// String to show as cursor
		cursor: '|',
		// Control onFocus behaviour. Default is `superplaceholder.Actions.START`
		onFocusAction: superplaceholder.Actions.[NOTHING|START|STOP]
		// Control onBlur behaviour. Default is `superplaceholder.Actions.STOP`
 		onBlurAction: superplaceholder.Actions.[NOTHING|START|STOP]
	}
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/vue2-superplaceholder.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/vue2-superplaceholder
[npm-downloads-src]: https://img.shields.io/npm/v/vue2-superplaceholder/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/vue2-superplaceholder
[david-dm-src]: https://david-dm.org/gomah/vue2-superplaceholder/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/vue2-superplaceholder
