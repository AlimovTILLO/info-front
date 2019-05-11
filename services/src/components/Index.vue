<template>
  <div>
    <div class="filter">
      <div class="container">
        <div class="share">
          <p>Рассказать друзьям</p>
          <div class="likely">
            <div class="facebook">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="telegram">
              <i class="fab fa-telegram-plane"></i>
            </div>
            <div class="vkontakte">
              <i class="fab fa-vk"></i>
            </div>
            <div class="whatsapp whithoutBorder">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="odnoklassniki">
              <i class="fab fa-odnoklassniki"></i>
            </div>
          </div>
        </div>
        <div class="filter__form">
          <form @submit.prevent="handleSubmit">
            <textarea
              name="textarea"
              rows="2"
              v-model="textarea"
              v-validate="'required'"
              class="filter__textarea"
              required
              placeholder="Опишите услугу, например: Нужен сантехник для ремонта водопровода, заменить 2 смесителя, прочистить сливы..."
            ></textarea>
            <i v-show="errors.has('textarea')"></i>
            <span v-show="errors.has('textarea')" class="help is-danger">{{ errors.first('textarea') }}</span>
            <div class="filter__selectWrap">
              <div class="row">
                <div class="col-md-7">
                  <div class="filter__select addCategory-js" @click="isSectionsItemActive=true" v-on-clickaway="isSectionDropdown">
                      <div v-if="!section.length" class="chooseSection select-js">
                        <p>Выберите раздел <i class="fal fa-angle-down"></i></p>
                      </div>
                      <div v-for="category in section" v-bind:key="category.id" class="privat__categoryItem">{{ category.name.ru }} <i v-on:click="removeSectionItem(category)" class="fal fa-times deleteCategory-js"></i></div>
                    </div>
                    <div v-for="category in categories.slice(0, 4)" v-bind:key="category.id" class="privat__categoryItem privat__categoryItem--popularCategory">
                      <p v-on:click="AddSectionItem(category)">{{ category.name.ru }}</p>
                    </div>
                </div>
                <div class="col-md-5">
                  <!-- <div class="filter__select filter__select--city">
                    <select v-model="city_value" name="sources" id="sources" class="custom-select sources" placeholder="Выберите город">
                        <option v-for="s in city" v-bind:key="s.id" :selected="city_value === s" placeholder="Выберите город" value="s.name">{{ s.name }}</option>
                    </select>
                  </div> -->
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
            <i v-show="errors.has('phone')"></i>
            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            <div class="filter__inputFile">
              <div class="uploadbutton">
                <div class="input-file-text"><i class="fal fa-paperclip"></i>Прикрепить фото</div>
                <input  class="input-file" type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
              </div>
              <div class="large-12 medium-12 small-12 cell">
                <div v-for="(file, key) in files" v-bind:key="key" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Удалить</span></div>
              </div>
            </div>
            <div class="filter__buttonWrap">
              <button type="submit" class="btn">Предварительный просмотр</button>
              <button class="btn">Оставить заявку</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="ad">
      <!-- <div class="container">
        <div class="captionWrap">
          <h2 class="caption">VIP обьявления</h2>
        </div>
        <div class="row">
          <div class="col-lg-10 col-md-9">
            <div class="mainAdv">
              <div class="row">
                <div class="col-md-4">
                  <div class="ad__items ad__items--indentItem">
                    <a href="#" class="ad__img">
                      <div class="ad__tagged">
                        <img src="images/bookmark.png" alt>
                      </div>
                      <img src="images/Mask Group-1.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>30%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Аренда авто</a>
                      <p class="ad__price">
                        <span>2 000 с.</span>1 500 c.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ad__items">
                    <a href="#" class="ad__img">
                      <img src="images/Mask Group-2.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>25%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Ремонт ванной под ключ</a>
                      <p class="ad__price">25 000 с.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ad__items">
                    <a href="#" class="ad__img">
                      <img src="images/Mask Group-1.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>25%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Бурение скважин на воду</a>
                      <p class="ad__price">1 700 с.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="captionWrap">
              <h2 class="caption">Новые объявления</h2>
            </div>
            <div class="secondaryAdv">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-6">
                  <div class="ad__items ad__items--indentItem">
                    <a href="#" class="ad__img">
                      <div class="ad__tagged">
                        <img src="images/bookmark.png" alt>
                      </div>
                      <img src="images/Mask Group-5.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>30%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Эвакуатор 24 часа</a>
                      <p class="ad__price">
                        <span>3 500 с.</span>2 500 c.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                  <div class="ad__items">
                    <a href="#" class="ad__img">
                      <img src="images/Mask Group-6.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>30%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Спил, обрезка деревьев</a>
                      <p class="ad__price">Цена не указана</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                  <div class="ad__items">
                    <a href="#" class="ad__img">
                      <img src="images/Mask Group-7.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>30%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">Бассейны, сервисное обслуживание</a>
                      <p class="ad__price">Договорная</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                  <div class="ad__items">
                    <a href="#" class="ad__img">
                      <img src="images/Mask Group-4.jpg" alt>
                      <div class="ad__discount">
                        <h3>СКИДКА</h3>
                        <p>30%</p>
                      </div>
                    </a>
                    <div class="ad__desc">
                      <a href="#" class="ad__itemCaption">
                        Все виды работ по ремонту
                        компьютеров
                      </a>
                      <p class="ad__price">Договорная</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3">
            <div class="ad__banner">
              <img src="images/Mask Group.jpg" alt>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Index',
  mixins: [ clickaway ],
  components: {
    Multiselect
  },
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      isSectionsItemActive: false,
      submitted: false,
      files: [],
      section: [],
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
      city_value: null,
      textarea: null,
      phone: null
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      categories: state => state.items.all.categories || []
    })
  },
  methods: {
    ...mapActions('items', ['addItem']),
    addFiles () {
      this.$refs.files.click()
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
    handleSubmit (e, formData) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          let formData = new FormData()
          formData.append('desc', this.textarea)
          formData.append('user_id', '1')
          formData.append('phone', this.phone)
          formData.append('city_id', this.city_value.id)
          let id = 0
          for (let value of this.section) {
            formData.append('category[' + id + ']', value.id)
            id++
          }
          for (var i = 0; i < this.files.length; i++) {
            let file = this.files[i]
            formData.append('image[' + i + ']', file)
          }
          this.addItem(formData)
        }
      })
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
