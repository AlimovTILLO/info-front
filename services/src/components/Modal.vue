<template>
  <transition>
    <div class="registration blurEffect">
        <div class="registration__modalWindow">
            <div class="closeBtn" @click="close"><i class="fal fa-times"></i></div>
            <div class="registration__logoSide" id="block1">
                <h2>Ishu Info</h2>
                <p>Worldwide. 24/7. Simple. Private.</p>
            </div>
            <div class="registration__registrationSide" id="block2">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist"><a class="nav-item nav-link active"
                            id="signIn-tab" data-toggle="tab" href="#signIn" role="tab" aria-controls="signIn"
                            aria-selected="true">Вход</a> <a class="nav-item nav-link" id="registration-tab"
                            data-toggle="tab" href="#registration" role="tab" aria-controls="registration"
                            aria-selected="false">Регистрация</a></div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="signIn" role="tabpanel" aria-labelledby="signIn-tab">
                        <form>
                            <div class="registration__inputWrap"><label for="E-mail">E-mail</label> <input type="text"
                                    class="registration__input" name="E-mail" id="E-mail"></div>
                            <div class="registration__inputWrap"><label for="pass">Пароль</label> <input type="password"
                                    class="registration__input" name="Пароль" id="pass"></div><a href="#"
                                class="forget">Забыли пароль?</a> <button class="btn" type="submit">Войти</button>
                            <div class="registration__signIn">
                                <p>Войти через аккаунт в социальных сетях</p>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="registration" role="tabpanel" aria-labelledby="registration-tab">
                        <form>
                            <div class="registration__inputWrap"><i class="icon-user"></i> <input type="text"
                                    class="registration__input registration__input--registrationInput" name="Имя"
                                    placeholder="Имя"></div>
                            <div class="registration__inputWrap"><i class="icon-envelope"></i> <input type="text"
                                    class="registration__input registration__input--registrationInput" name="Email"
                                    placeholder="Email"></div>
                            <div class="registration__inputWrap"><i class="icon-phone"></i> <input type="text"
                                    class="registration__input registration__input--registrationInput phone-js"
                                    name="Телефон"></div>
                            <div class="registration__inputWrap"><i class="icon-unlock"></i> <input type="text"
                                    class="registration__input registration__input--registrationInput" name="Пароль"
                                    placeholder="Пароль"></div>
                            <div class="registration__inputWrap"><i class="icon-unlock"></i> <input type="text"
                                    class="registration__input registration__input--registrationInput"
                                    name="Подтвердите пароль" placeholder="Подтвердите пароль"></div>
                            <p>Регистрируясь, вы соглашаетесь с <a href="#">Пользовательское соглашение </a>и <a
                                    href="#">Конфиденциальность </a>ishu.info</p><button class="btn"
                                type="submit">Регистрация</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
