<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  labelPosition: {
    type: String,
    validation: (val) => {
      return ["left", "right", "top"].includes(val);
    },
    default: "left",
  },
});
</script>

<template>
  <div class="form-item">
    <label
      class="form-label"
      :class="{
        'd-block': labelPosition === 'top',
      }"
      for="formItem"
    >
      {{ label }}
    </label>
    <div class="form-field">
      <input class="form-input" id="formItem" type="text" />
    </div>
  </div>
</template>

<style lang="less">
.form-item {
  margin-bottom: 2.12em;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-label {
  color: #756f86;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  &.d-block {
    display: block;
    text-align: left;
    margin-bottom: 0.22em;
  }
}

.form-field {
  display: flex;
  justify-content: start;
  width: 100%;

  input {
    display: block;
    flex-basis: 100%;
    width: inherit;
  }
}

.form-input {
  @input-border-color: @color-el-inactive;

  color: @color-basic-black-2;
  background-color: @color-basic-white;
  border: 1px solid @color-el-inactive;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  padding: 1em;
  border-radius: 6px;
  outline: none;
  transition: 0.1s ease-in;

  &::placeholder {
    color: #7c9cbf;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }

  &:focus {
    @input-border-color: @color-el-inactive;
    border-color: @color-el-active;
    box-shadow: 0px 4px 8px rgba(@color-basic-black-2, 4%);
  }
}
</style>
