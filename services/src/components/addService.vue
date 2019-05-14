<template>
  <div class="addService">
        <div class="container">
          <div class="breadCrumbs">
            <ul>
              <li><router-link to="/" >Главная</router-link></li>
              <li><router-link to="/services" >Мои услуги</router-link></li>
              <li>Добавить услугу</li>
            </ul>
          </div>
          <div class="filter__form filter__form--addService">
            <h3 class="inner__caption">Добавление услуги</h3>
            <form @submit.prevent="handleSubmit">
              <input type="text" v-model="title" name="title" class="filter__input" placeholder="Название услуги. Например: Пилю дрова" required v-validate="'required'" autocomplete="off">
                <textarea
                  name="textarea"
                  rows="2"
                  v-model="textarea"
                  v-validate="'required'"
                  class="filter__textarea"
                  required
                  placeholder="Опишите вашу услугу. Укажите самое важное,"
                ></textarea>
              <div class="filter__selectWrap">
                <div class="row">
                  <div class="col-md-7">
                    <div class="filter__select addCategory-js" @click="isSectionsItemActive=true" v-on-clickaway="isSectionDropdown">
                      <div v-if="!section.length" class="chooseSection select-js">
                        <p>Выберите раздел <i class="fal fa-angle-down"></i></p>
                      </div>
                      <div v-for="category in section" v-bind:key="category.id" class="privat__categoryItem">{{ category.name.ru }} <i v-on:click="removeSectionItem(category)" class="fal fa-times deleteCategory-js"></i></div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <multiselect v-model="city_value" name="city_value" :options="city" v-validate="'required'" :searchable="false" :show-labels="false" label="name" track-by="id" placeholder="Выберите город" required></multiselect>
                  </div>
                </div>
                <div class="filter__sections" v-bind:style= "isSectionsItemActive ? 'display: block;' : 'display: none;'">
                <div v-for="category in categories" v-bind:key="category.id" class="filter__sectionsItem" data-value="category.name.ru">
                    <div v-on:click="AddSectionItem(category)" class="filter__iconWrap">
                      <div class="filter__icon">
                        <img v-if="category.medias" :src="category.medias.thumb_128" alt="category.name.ru">
                      </div>
                    </div>
                    <p class="filter__sectionName">{{ category.name.ru }}</p>
                  </div>
              </div>
              </div>
              <input
                name="phone"
                v-model="phone"
                v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }"
                type="text"
                class="filter__input phone-js"
                placeholder="Укажите свой номер телефона"
                required
                autocomplete="off"
              >
              <div class="row">
                <div class="col-md-5">
                  <input type="tel" v-model="price" name="price" v-validate="'required|numeric'" class="filter__input" placeholder="Стоимость услуги" required="" autocomplete="off">
                </div>
                <div class="col-md-3">
                  <multiselect name="currency" v-model="currency" :options="currency_options" track-by="name" label="name" :allow-empty="false" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
                </div>
              </div>
              <div class="filter__inputFile">
                <div class="uploadbutton">
                  <div class="input-file-text"><i class="fal fa-paperclip"></i>Прикрепить фото</div>
                  <input name="files" class="input-file" type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
                </div>
                <div class="large-12 medium-12 small-12 cell">
                  <div v-for="(file, key) in files" v-bind:key="key" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Удалить</span></div>
                </div>
                <br>
              </div>
              <div class="filter__buttonWrap">
                <!-- <button type="submit" class="btn">Предварительный просмотр</button> -->
                <button class="btn">Добавить услугу</button></div>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'addService',
  mixins: [ clickaway ],
  components: {
    Multiselect
  },
  data () {
    return {
      isSectionsItemActive: false,
      title: null,
      textarea: null,
      phone: null,
      section: [],
      city_value: null,
      files: [],
      price: null,
      city: [
        { name: 'Бишкек', id: '10' },
        { name: 'Ош', id: '7' },
        { name: 'Жалал-Абад', id: '2' },
        { name: 'Каракол', id: '4' },
        { name: 'Талас', id: '8' },
        { name: 'Токмок', id: '9' },
        { name: 'Нарын', id: '6' },
        { name: 'Чолпон-Ата', id: '5' },
        { name: 'Балыкчи', id: '3' },
        { name: 'Баткен', id: '1' }
      ],
      currency: [ { name: 'Сом', id: 'сом' } ],
      currency_options: [
        { name: 'Сом', id: 'сом' },
        { name: 'Доллар', id: 'usd' }
      ]
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      categories: state => state.items.all.categories || []
    })
  },
  methods: {
    ...mapActions('items', ['addService']),
    addFiles () {
      this.$refs.files.click()
    },
    handleSubmit (e, formData) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          let formData = new FormData()
          formData.append('title', this.title)
          formData.append('desc', this.textarea)
          formData.append('user_id', this.account.user.user_id)
          formData.append('phone', this.phone)
          formData.append('city_id', this.city_value.id)
          formData.append('price', this.price)
          formData.append('currency', this.currency.id)
          let id = 0
          for (let value of this.section) {
            formData.append('category[' + id + ']', value.id)
            id++
          }
          for (var i = 0; i < this.files.length; i++) {
            let file = this.files[i]
            formData.append('image[' + i + ']', file)
          }
          this.addService(formData)
        }
      })
    },
    AddSectionItem (category) {
      this.section.push(category)
    },
    removeSectionItem (category) {
      this.section.splice(category, 1)
    },
    isSectionDropdown () {
      this.isSectionsItemActive = false
    },
    handleFilesUpload () {
      let uploadedFiles = this.$refs.files.files
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i])
      }
    },
    removeFile (key) {
      this.files.splice(key, 1)
    }
  }
}
</script>
<style>
  input[type="file"]{
    position: absolute;
    top: -500px;
  }

  div.file-listing{
    width: 200px;
  }

  span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }
</style>
