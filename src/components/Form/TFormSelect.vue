<script setup>
import { ref } from "vue";

let isVisibleDropdown = ref(false);
let value = ref("");

function handleChangeVisibleDropdown(val) {
  isVisibleDropdown.value = val;
}
</script>

<template>
  <div class="form-select">
    <div class="form-select__trigger">
      <div
        class="form-input"
        :class="{
          'form-select--active': isVisibleDropdown,
        }"
      >
        <div class="form-input__wrapper">
          <input
            type="text"
            class="form-input__inner"
            v-model="value"
            @focusout.stop="handleChangeVisibleDropdown(false)"
            @focus.stop="handleChangeVisibleDropdown(true)"
          />
          <button
            class="form-input__suffix"
            type="button"
            @mousedown.stop.prevent="
              handleChangeVisibleDropdown(!isVisibleDropdown)
            "
            @keypress.enter.prevent="
              handleChangeVisibleDropdown(!isVisibleDropdown)
            "
            @focusout.stop="handleChangeVisibleDropdown(false)"
            @focusin.stop.prevent="handleChangeVisibleDropdown(true)"
          >
            <span class="form-input__suffix-inner">
              <i class="form-select__icon icon">
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z"
                    fill="#0880AE"
                  />
                </svg>
              </i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.form-select {
  width: 100%;

  &--active {
    border-color: @color-el-active;
    box-shadow: 0px 4px 8px rgba(@color-basic-black-2, 4%);
  }

  &:hover,
  input,
  button {
    cursor: pointer;
  }

  button,
  input {
    padding: 0;
  }

  input {
    border: none;
    margin: 0;
    color: @color-basic-black-2;
    background-color: @color-basic-white;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
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

    &:focus,
    &:active {
      outline: none;
    }
  }
}

.form-input {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    border-radius: 0;
    margin: 0 0 0 8px;
    transition: transform 0.2s ease;
  }
}

.form-select--active {
  .form-input__suffix {
    transform: rotateX(180deg);
  }
}
</style>
