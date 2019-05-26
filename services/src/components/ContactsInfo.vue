<template>
  <div class="contactsInfo">
        <div class="container">
          <p>Контактная информация</p>
          <p>Фотография</p>
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-5">
                <div class="contactsInfo__profile">
                  <div class="contactsInfo__fotoWrap">
                    <div class="contactsInfo__foto">
                      <img v-if="profile.mainImage" :src="profile.mainImage.thumb_256" alt="">
                    </div>
                    <div class="contactsInfo__fotoEdit"><i class="fal fa-edit"></i>
                    <input type="file" name="img" ref="img" accept="image/jpeg,image/png,image/gif" title="Выберите фото" v-on:change="handleImageUpload()"></div>
                    <p>Редактировать фотографию</p>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="contactsInfo__detail">
                  <div class="contactsInfo__inputWrap"><i class="icon-user"></i>
                    <input type="text" v-model="profile.userData.full_name" class="registration__input registration__input--registrationInput" name="Имя" placeholder="Имя">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-envelope"></i>
                  <input type="text" v-model="profile.userData.email" class="registration__input registration__input--registrationInput"
                  name="Email" placeholder="Email">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-phone"></i>
                    <input type="text" v-model="profile.userData.phone" class="registration__input registration__input--registrationInput phone-js"
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
      profile: state => state.items.profile || []
    })
  },
  data () {
    return {
      file: '',
      loading: false,
      submitted: false
    }
  },
  created () {
    this.getUser(this.account.user_id)
  },
  methods: {
    ...mapActions(
      'items', {getUser: 'getUser', updateProfile: 'updateProfile'}
    ),
    submitForm (e) {
      let formData = new FormData()
      formData.append('image', this.file)
      formData.append('name', this.profile.userData.full_name)
      formData.append('email', this.profile.userData.email)
      formData.append('phone', this.profile.userData.phone)
      this.updateProfile({formData, id: this.account.user_id})
    },
    handleImageUpload () {
      this.file = this.$refs.img.files[0]
    }
  }
}
</script>
