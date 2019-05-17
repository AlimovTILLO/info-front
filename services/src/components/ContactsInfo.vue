<template>
  <div class="contactsInfo">
        <div class="container">
          <p>Контактная информация</p>
          <p>Фотография</p>
          <form action="">
            <div class="row">
              <div class="col-md-5">
                <div class="contactsInfo__profile">
                  <div class="contactsInfo__fotoWrap">
                    <div class="contactsInfo__foto"><img src="images/privat/Mask Group.jpg" alt=""></div>
                    <div class="contactsInfo__fotoEdit"><i class="fal fa-edit"></i> <input type="file" name="img"
                        accept="image/jpeg,image/png,image/gif" title="Выберите фото"></div>
                    <p>Редактировать фотографию</p>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="contactsInfo__detail">
                  <div class="contactsInfo__inputWrap"><i class="icon-user"></i>
                    <input type="text" v-model="user.full_name" class="registration__input registration__input--registrationInput" name="Имя" placeholder="Имя">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-envelope"></i>
                  <input type="text" v-model="user.email" class="registration__input registration__input--registrationInput" name="Email"
                      placeholder="Email">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-phone"></i>
                    <input type="text" class="registration__input registration__input--registrationInput phone-js"
                      placeholder="+996 999 999" name="Телефон">
                  </div>
                  <button type="submit" class="btn">Сохранить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ContactsInfo',
  computed: {
    ...mapState({
      account: state => state.account.user,
      profile: state => state.account.user.profile
    })
  },
  data () {
    return {
      loading: false,
      user: [],
      submitted: false
    }
  },
  async created () {
    this.refreshUser()
  },
  methods: {
    ...mapActions('account', {
      getUser: 'getUser'
    }),
    refreshUser () {
      this.getUser(this.account.user_id)
      this.loading = true
      this.user = this.profile || {}
      this.loading = false
    }
  }
}
</script>
