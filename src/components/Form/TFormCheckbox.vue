<script setup>
import { defineProps, defineEmits, ref } from "vue";

defineProps({
  label: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["input"]);

let isChecked = ref(false);

function onChangeChecked(val) {
  isChecked.value = val;
}
</script>

<template>
  <span class="form-checkbox--box">
    <input type="checkbox" style="display: none" v-model="isChecked" />
    <span
      tabindex="0"
      class="form-checkbox"
      :class="{ checked: isChecked }"
      @click="onChangeChecked(!isChecked)"
      @keypress.space="onChangeChecked(!isChecked)"
    >
      <span>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          xmlns="http://www.w3.org/2000/svg"
          v-if="isChecked"
        >
          <path
            d="M14.6343 0.634308C14.9467 0.321889 15.4533 0.321889 15.7657 0.634308C16.0781 0.946728 16.0781 1.45326 15.7657 1.76568L6.16567 11.3657C5.85325 11.6781 5.34672 11.6781 5.0343 11.3657L1.0343 7.36568C0.721883 7.05326 0.721883 6.54673 1.0343 6.23431C1.34672 5.92189 1.85325 5.92189 2.16567 6.23431L5.59999 9.66862L14.6343 0.634308Z"
            fill="#0880AE"
          />
        </svg>
      </span>
    </span>

    <template v-if="label">
      <label
        for="inputPrivacy"
        @click="onChangeChecked(!isChecked)"
        @keypress.space="onChangeChecked(!isChecked)"
      >
        <slot />
      </label>
    </template>
  </span>
</template>

<style lang="less">
.form-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  background: @color-basic-white;
  border: 1px solid @color-el-inactive;
  transition: 0.1s ease-in;
  border-radius: 4px;
  height: 24px;
  width: 24px;

  &.checked,
  &:focus,
  &:hover {
    cursor: pointer;
    border-color: @color-el-active;
    box-shadow: 0px 4px 8px rgba(@color-basic-black-2, 4%);
  }

  &--box {
    display: flex;
    align-items: center;
    vertical-align: middle;

    label {
      color: #756f86;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      margin-left: 8px;
      text-align: left;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
