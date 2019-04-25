<template>
  <!-- <form @submit.prevent="submitForm">
    <div class="registration__inputWrap">
      <i class="icon-user"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput"
        name="Имя"
        placeholder="Имя"
      >
    </div>
    <div class="registration__inputWrap">
      <i class="icon-envelope"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput"
        name="Email"
        placeholder="Email"
      >
    </div>
    <div class="registration__inputWrap">
      <i class="icon-phone"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput phone-js"
        name="Телефон"
      >
    </div>
    <div class="registration__inputWrap">
      <i class="icon-unlock"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput"
        name="Пароль"
        placeholder="Пароль"
      >
    </div>
    <div class="registration__inputWrap">
      <i class="icon-unlock"></i>
      <input
        type="text"
        class="registration__input registration__input--registrationInput"
        name="Подтвердите пароль"
        placeholder="Подтвердите пароль"
      >
    </div>
    <p>
      Регистрируясь, вы соглашаетесь с
      <a href="#">Пользовательское соглашение</a>и
      <a href="#">Конфиденциальность</a>ishu.info
    </p>
    <button class="btn" type="submit">Регистрация</button>
  </form>-->
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="email">E mail</label>
      <input
        type="text"
        v-model="user.email"
        v-validate="'required'"
        name="email"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('email') }"
      >
      <div
        v-if="submitted && errors.has('email')"
        class="invalid-feedback"
      >{{ errors.first('email') }}</div>
    </div>
    <div class="form-group">
      <label for="full_name">Full Name</label>
      <input
        type="text"
        v-model="user.full_name"
        v-validate="'required'"
        name="full_name"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('full_name') }"
      >
      <div
        v-if="submitted && errors.has('full_name')"
        class="invalid-feedback"
      >{{ errors.first('full_name') }}</div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        v-model="user.password"
        v-validate="{ required: true, min: 6 }"
        name="password"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('password') }"
      >
      <div
        v-if="submitted && errors.has('password')"
        class="invalid-feedback"
      >{{ errors.first('password') }}</div>
    </div>
    <div class="form-group">
      <label for="re_password">Password</label>
      <input
        type="password"
        v-model="user.re_password"
        v-validate="{ required: true, min: 6 }"
        name="re_password"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('re_password') }"
      >
      <div
        v-if="submitted && errors.has('re_password')"
        class="invalid-feedback"
      >{{ errors.first('re_password') }}</div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Register</button>
      <router-link to="/login" class="btn btn-link">Cancel</router-link>
    </div>
  </form>
</template>

<script>
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
  methods: {
    submitForm (event) {
      console.log(this.user)
      this.registerUser()
      // this.user.email = ''
      // this.user.full_name = ''
      // this.user.password = ''
      // this.user.re_password = ''
      event.preventDefault()
    },
    registerUser () {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$store.dispatch('registerUser', { email: this.user.email, full_name: this.user.full_name, password: this.user.password, re_password: this.user.re_password })
        }
      })
    }
  }
}
</script>
