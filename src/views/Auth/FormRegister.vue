<script setup>
import TForm from "@/components/Form/TForm.vue";
import TFormItem from "@/components/Form/TFormItem.vue";
import TFormCheckbox from "@/components/Form/TFormCheckbox.vue";
import TFormSelect from "@/components/Form/Select/TFormSelect.vue";
import TButton from "@/components/TButton.vue";

function submit() {
  console.log("submit");
}
</script>

<template>
  <section class="section__form-auth">
    <t-form @submit.prevent="submit">
      <template v-slot:title>
        Регистрация
        <span>
          <span>Уже есть аккаунт? </span>
          <RouterLink :to="{ name: 'SignIn' }">Войти</RouterLink>
        </span>
      </template>

      <t-form-item :label="'Имя'" :label-position="'top'"></t-form-item>
      <t-form-item :label="'Email'" :label-position="'top'"></t-form-item>
      <t-form-item :label="'Номер телефона'" :label-position="'top'">
      </t-form-item>
      <t-form-item :label="'Язык'" :label-position="'top'">
        <template #field-content>
          <t-form-select />
        </template>
      </t-form-item>

      <div class="form-item">
        <t-form-checkbox :label="true">
          Принимаю <a href="#">условия</a> использования
        </t-form-checkbox>
      </div>

      <div class="form-item form-controls">
        <t-button type="submit">Зарегистрироваться</t-button>
      </div>
    </t-form>
  </section>
</template>

<style lang="less" scoped>
.section__form-auth {
  max-width: 460px;
  margin: auto;

  .form-controls .btn {
    width: 100%;
  }
}
</style>
