<template>
  <form @submit.prevent="submitForm" class="loginForm">
    <div class="registration__inputWrap">
      <label for="email">E-mail</label>
      <input
        type="email"
        v-model="email"
        v-validate="'required'"
        class="registration__input"
        name="email"
        id="E-mail"
        :class="{ 'is-invalid': submitted && !email }"
      >
      <div v-show="submitted && !email" class="invalid-feedback">E-mail обязателен</div>
    </div>
    <div class="registration__inputWrap">
      <label for="password">Пароль</label>
      <input
        type="password"
        v-model="password"
        v-validate="'required'"
        class="registration__input"
        name="Пароль"
        id="pass"
        :class="{ 'is-invalid': submitted && !password }"
      >
      <div v-show="submitted && !password" class="invalid-feedback">Пароль обязателен</div>
    </div>
    <a href="#" class="forget">Забыли пароль?</a>
    <button class="btn" type="submit">Войти</button>
    <!--<div class="registration__signIn">-->
      <!--<p>Войти через аккаунт в социальных сетях</p>-->
    <!--</div>-->
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['loginUser']),
    submitForm (e) {
      this.submitted = true
      const { email, password } = this
      if (email && password) {
        this.loginUser({ email, password })
      }
    }
  }
}
</script>
