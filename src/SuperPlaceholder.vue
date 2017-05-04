<template>
  <input v-bind:value="value" placeholder="" @input="updateValue($event.target.value)" />
</template>
<script>
import superplaceholder from 'superplaceholder';

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    sentences: {
      type: Array,
      default: [],
    },
    options: {
      type: Object,
      default: () => ({}),
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
    this.superplaceholder = superplaceholder({
      el: this.$el,
      options: this.options,
      sentences: this.sentences,
    });
  },

  beforeDestroy() {
    this.superplaceholder.destroy();
  },
};
</script>
