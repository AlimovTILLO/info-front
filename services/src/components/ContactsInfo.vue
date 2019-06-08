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
                      <img v-if="profile.main_image" :src="profile.main_image.thumb_256" alt="">
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
                    <input type="text" v-model="profile.full_name" class="registration__input registration__input--registrationInput" name="Имя" placeholder="Имя">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-envelope"></i>
                  <input type="text" v-model="profile.email" class="registration__input registration__input--registrationInput"
                  name="Email" placeholder="Email">
                  </div>
                  <div class="contactsInfo__inputWrap"><i class="icon-phone"></i>
                    <input type="text" v-model="profile.phone" class="registration__input registration__input--registrationInput phone-js"
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
      profile: state => state.account.user || []
    })
  },
  data () {
    return {
      file: '',
      loading: false,
      submitted: false
    }
  },
  methods: {
    ...mapActions(
      'account', {updateProfile: 'updateProfile'}
    ),
    submitForm (e) {
      let formData = new FormData()
      formData.append('name', this.profile.full_name)
      formData.append('email', this.profile.email)
      formData.append('phone', this.profile.phone)
      this.updateProfile({user: formData, id: this.profile.user_id})
    },
    handleImageUpload () {
      let formData = new FormData()
      formData.append('image', this.$refs.img.files[0])
      this.updateProfile({user: formData, id: this.profile.user_id})
    }
  }
}
</script>
