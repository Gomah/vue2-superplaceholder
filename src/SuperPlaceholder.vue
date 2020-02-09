<template>
  <input
    :value="value"
    placeholder=""
    @input="updateValue($event.target.value)"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    sentences: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    selector: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      superplaceholder: null,
    };
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },

  mounted() {
    const superplaceholder = require('superplaceholder');

    this.superplaceholder = superplaceholder({
      el: this.selector || this.$el,
      options: this.options,
      sentences: this.sentences,
    });
  },

  beforeDestroy() {
    if (this.superplaceholder) {
      this.superplaceholder.destroy();
    }
  },
};
</script>
