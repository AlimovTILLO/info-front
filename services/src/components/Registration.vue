<template>
  <form @submit.prevent="handleSubmit">
    <div class="registration__inputWrap">
      <i class="icon-user"></i>
      <input
        type="text"
        v-model="user.full_name"
        v-validate="'required'"
        name="full_name"
        :class="{ 'is-invalid': submitted && errors.has('username') }"
        class="registration__input registration__input--registrationInput"
        placeholder="Имя"
      >
      <div
        v-if="submitted && errors.has('full_name')"
        class="invalid-feedback"
      >{{ errors.first('full_name') }}</div>
    </div>
    <div class="registration__inputWrap">
      <i class="icon-envelope"></i>
      <input
        type="text"
        v-model="user.email"
        v-validate="'required|email'"
        name="email"
        :class="{ 'is-invalid': submitted && errors.has('lastName') }"
        class="registration__input registration__input--registrationInput"
        placeholder="Email"
      >
      <div
        v-if="submitted && errors.has('email')"
        class="invalid-feedback"
      >{{ errors.first('email') }}</div>
    </div>
    <!-- <div class="registration__inputWrap">
      <i class="icon-phone"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput phone-js"
        name="Телефон"
        placeholder="Телефон"
      >
    </div> -->
    <div class="registration__inputWrap">
      <i class="icon-unlock"></i>
      <input
        type="password"
        v-model="user.password"
        v-validate="{ required: true, min: 6 }"
        ref="password"
        name="password"
        :class="{ 'is-invalid': submitted && errors.has('password') }"
        class="registration__input registration__input--registrationInput"
        placeholder="Пароль"
      >
      <div
        v-if="submitted && errors.has('password')"
        class="invalid-feedback"
      >{{ errors.first('password') }}</div>
    </div>
    <div class="registration__inputWrap">
      <i class="icon-unlock"></i>
      <input
        type="password"
        v-model="user.re_password"
        v-validate="'required|confirmed:password'"
        name="re_password"
        :class="{ 'is-invalid': submitted && errors.has('re_password') }"
        class="registration__input registration__input--registrationInput"
        placeholder="Подтвердите пароль"
      >
      <div
        v-if="submitted && errors.has('re_password')"
        class="invalid-feedback"
      >{{ errors.first('re_password') }}</div>
    </div>
    <p>
      Регистрируясь, вы соглашаетесь с
      <a href="#">Пользовательское соглашение</a>и
      <a href="#">Конфиденциальность</a>ishu.info
    </p>
    <button class="btn" type="submit" :disabled="status.registering">Регистрация</button>
    <img
      v-show="status.registering"
      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
    >
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        full_name: '',
        password: '',
        re_password: ''
      },
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit (e) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.register(this.user)
        }
      })
    }
  }
}
</script>
