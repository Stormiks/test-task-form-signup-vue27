<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "submit",
  },
});
</script>

<template>
  <button :type="props.type">
    <slot />
  </button>
</template>

<style lang="less">
button {
  border-radius: 7px;
}
</style>
