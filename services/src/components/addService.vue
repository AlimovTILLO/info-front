<template>
  <div class="addService">
        <div class="container">
          <div class="breadCrumbs">
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Личный кабинет</a></li>
              <li>Добавить услугу</li>
            </ul>
          </div>
          <div class="filter__form filter__form--addService">
            <h3 class="inner__caption">Добавление услуги</h3>
            <form action=""><input type="text" class="filter__input" placeholder="Название услуги. Например: Пилю дрова" required=""
                autocomplete="off"> <textarea class="filter__textarea"
                placeholder="Опишите вашу услугу. Укажите самое важное,"></textarea>
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
              </div><input type="tel" class="filter__input phone-js" id="phone"
                placeholder="Укажите свой номер телефона" required autocomplete="off">
              <div class="row">
                <div class="col-md-5"><input type="tel" class="filter__input" placeholder="Стоимость услуги" required=""
                    autocomplete="off"></div>
                <div class="col-md-3">
                  <multiselect v-model="currency" :options="currency_options" track-by="name" label="name" :allow-empty="false" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
                  <!-- <div class="filter__select filter__select--city"><select name="sources" id="sources"
                      class="custom-select sources" placeholder="сом">
                      <option value="сом">сом</option>
                      <option value="руб">руб</option>
                    </select></div> -->
                </div>
              </div>
              <div class="filter__inputFile">
                <div class="uploadbutton">
                  <div class="input-file-text"><i class="fal fa-paperclip"></i>Прикрепить фото</div><input
                    class="input-file" type="file" title="Выбрать фото" multiple="multiple">
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
      value: null,
      city_value: null,
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
      currency: [ { name: 'Сом', id: '1' } ],
      currency_options: [
        { name: 'Сом', id: '1' },
        { name: 'Доллар', id: '2' }
      ]
    }
  },
  computed: {
    ...mapState({
      categories: state => state.items.all.categories || []
    })
  },
  methods: {
    ...mapActions('items', ['addItem']),
    handleSubmit (e) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.addItem({ desc: this.textarea, user_id: '1', phone: this.phone, city_id: this.city_value.id, category_id: this.value.id })
        }
      })
    }
  }
}
</script>
