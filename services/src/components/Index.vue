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
                  <multiselect v-model="value" selectLabel="Нажмите Enter, чтобы выбрать" deselectLabel="Нажмите Enter, чтобы удалить" name="value" :max="3" :options="categories" v-validate="'required'" :searchable="false" :multiple="true" :close-on-select="false" placeholder="Выберите раздел" track-by="id" label="slug" required>
                    <span slot="noResult">Уппс! Элементы не найдены. Рассмотрите возможность изменения поискового запроса..</span>
                    <span slot="maxElements">Максимум из 3 выбранных параметров. Сначала удалите выбранную опцию, чтобы выбрать другую.</span>
                    </multiselect>
                  <i v-show="errors.has('value')"></i>
                  <span v-show="errors.has('value')" class="help is-danger">{{ errors.first('value') }}</span>
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
            <i v-show="errors.has('phone')"></i>
            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            <div class="filter__inputFile">
              <div class="uploadbutton">
                <div class="input-file-text"><i class="fal fa-paperclip"></i>Прикрепить фото</div>
                <input  class="input-file" type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
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

export default {
  name: 'Index',
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
      submitted: false,
      files: '',
      value: [],
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
          for (let value of this.value) {
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
      this.files = this.$refs.files.files
    }
  }
}
</script>
