<template>
  <form class="form">
    <div class="form-title">
      <slot name="title" />
    </div>
    <slot />
  </form>
</template>

<style lang="less">
.form {
  background-color: @color-basic-white;
  box-shadow: 0px 12px 24px rgba(@color-basic-black-2, 2%),
    0px 32px 64px rgba(@color-basic-black-2, 4%);
  border-radius: 24px;
  margin: 0 auto;
  padding: 2em 1.87em;

  &-title {
    color: @color-basic-black-2;
    font-family: "IBM Plex Sans";
    font-weight: 700;
    text-align: left;
    font-size: 34px;
    line-height: 44px;
    margin-top: 0;
    margin-bottom: 1.7em;

    > span {
      text-decoration: none;
      font-family: "IBM Plex Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }

    > span {
      display: block;
      margin-top: 0.5em;
    }
  }

  .btn {
    background: @color-el-active;
    box-shadow: 0px 2px 4px rgba(@color-basic-black-2, 8%),
      0px 4px 8px rgba(@color-basic-black-2, 8%);
    padding: 1.05em;
  }
}
</style>
