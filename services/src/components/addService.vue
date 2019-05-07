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
                    <multiselect v-model="value" selectLabel="Нажмите Enter, чтобы выбрать" deselectLabel="Нажмите Enter, чтобы удалить" name="value" :max="3" :options="categories" v-validate="'required'" :searchable="false" :multiple="true" :close-on-select="false" placeholder="Выберите раздел" track-by="id" label="slug" required>
                    <span slot="noResult">Уппс! Элементы не найдены. Рассмотрите возможность изменения поискового запроса..</span>
                    <span slot="maxElements">Максимум из 3 выбранных параметров. Сначала удалите выбранную опцию, чтобы выбрать другую.</span>
                    </multiselect>
                  </div>
                  <div class="col-md-5">
                    <multiselect v-model="city_value" name="city_value" :options="city" v-validate="'required'" :searchable="false" :show-labels="false" label="name" track-by="id" placeholder="Выберите город" required></multiselect>
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
              </div>
              <div class="filter__buttonWrap"><button type="submit" class="btn">Предварительный просмотр</button>
                <button class="btn">Добавить услугу</button></div>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  name: 'addService',
  components: {
    Multiselect
  },
  data () {
    return {
      title: null,
      textarea: null,
      phone: null,
      value: [],
      city_value: null,
      files: '',
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
      currency: [ { name: 'Сом', id: 'Сом' } ],
      currency_options: [
        { name: 'Сом', id: 'Сом' },
        { name: 'Доллар', id: 'Доллар' }
      ]
    }
  },
  computed: {
    ...mapState({
      categories: state => state.items.all.categories || []
    })
  },
  methods: {
    ...mapActions('items', ['addService']),
    handleSubmit (e, formData) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          let formData = new FormData()
          formData.append('title', this.title)
          formData.append('desc', this.textarea)
          formData.append('user_id', '1')
          formData.append('phone', this.phone)
          formData.append('city_id', this.city_value.id)
          formData.append('price', this.price)
          let id = 0
          for (let value of this.value) {
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
    handleFilesUpload () {
      this.files = this.$refs.files.files
    }
  }
}
</script>
