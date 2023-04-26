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
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 2%),
    0px 32px 64px rgba(44, 39, 56, 4%);
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
    background: #0880ae;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 8%),
      0px 4px 8px rgba(44, 39, 56, 8%);
    padding: 1.05em;
  }
}
</style>
