<script setup>
import TButton from "@/components/TButton.vue";

function submit() {
  console.log("submit");
}
</script>

<template>
  <section>
    <h1>Регистрация</h1>
    <p>
      <span>Уже есть аккаунт? </span>
      <RouterLink :to="{ name: 'SignIn' }">Войти</RouterLink>
    </p>

    <form class="form" @submit.prevent="submit">
      <div class="form-item">hello</div>

      <div class="form-item">
        <t-button type="submit">Зарегистрироваться</t-button>
      </div>
    </form>
  </section>
</template>

<style lang="less" scoped>
.form {
  background-color: #fff;
}
</style>
