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
  <button class="btn" :type="props.type">
    <slot />
  </button>
</template>

<style lang="less">
.btn {
  color: #ebf4f8;
  border: 1px solid;
  background-color: @color-el-active;
  border-color: transparent;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  border-radius: 7px;
  transition: 0.15s ease-in;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 12px 24px rgba(@color-basic-black-2, 8%),
      0px 24px 48px rgba(@color-basic-black-2, 16%);
  }

  &:focus {
    box-shadow: 0px 2px 4px rgba(@color-basic-black-2, 0.001%),
      0px 4px 8px rgba(@color-basic-black-2, 8%);
    border: 1px solid rgba(@color-basic-black-2, 86%);
  }

  &[disabled] {
    color: @color-basic-black-2;
    background: @color-el-inactive;
    box-shadow: 0px 4px 8px rgba(@color-basic-black-2, 8%);
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
