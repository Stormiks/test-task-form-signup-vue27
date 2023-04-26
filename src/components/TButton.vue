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
  background-color: #0880ae;
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
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 8%),
      0px 24px 48px rgba(44, 39, 56, 16%);
  }

  &:focus {
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.001%),
      0px 4px 8px rgba(44, 39, 56, 8%);
    border: 1px solid rgba(#2c2738, 86%);
  }

  &[disabled] {
    color: @color-basic-black-2;
    background: @color-el-disabled;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 8%);
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
