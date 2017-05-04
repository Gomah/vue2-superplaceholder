# vue2-superplaceholder

SuperPlaceholder based on [superplaceholder.js](https://github.com/chinchang/superplaceholder.js) for Vue 2.x.

---------------

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
<SuperPlaceholder
  :sentences="[ 'Something to show', 'Another thing to show']"
  v-model="form.email"
  :options="{ cursor: '_' }"
>
</SuperPlaceholder>
</template>

<script>
import SuperPlaceholder from 'vue2-superplaceholder'

export default {
  data() {
    return {
      form: {
        email: null,
      },
    };
  },
  components: {
    SuperPlaceholder
  }
}
</script>
```

---------------

### Customization

Optional `options` object for custom settings.

```js
options: {
  // delay between letters (in milliseconds)
  letterDelay: 100, // milliseconds
  // delay between sentences (in milliseconds)
  sentenceDelay: 1000,
  // should start on input focus. Set false to autostart
  startOnFocus: true,
  // loop through passed sentences
  loop: false,
  // Initially shuffle the passed sentences
  shuffle: false,
  // Show cursor or not. Shows by default
  showCursor: true,
  // String to show as cursor
  cursor: '|'
}
```
