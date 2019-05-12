<template>
    <div class="header">
      <div class="container">
        <div class="row header__navWrap">
          <div class="col-lg-2 col-sm-6">
            <div class="header__logo">
              <a href="/">Ishu Info</a>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 order-lg-last">
            <div class="autorization">
              <a href="#signIn" v-if="status.loggedIn === false" class="autorization__link registration-js" @click="showModal">Войти</a>
              <a href="#" v-if="status.loggedIn === false" class="autorization__profile registration-js" @click="showModal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="37"
                  viewBox="0 0 26 34"
                  fill="none"
                >
                  <path
                    d="M7.0476 25.36L1.08005 28.6151C0.729862 28.806 0.415145 29.0407 0.122314 29.2966C3.60156 32.2302 8.09288 34 13.0001 34C17.871 34 22.3336 32.2566 25.8031 29.363C25.4831 29.0928 25.1359 28.8498 24.751 28.6581L18.3608 25.4634C17.5351 25.0506 17.0136 24.2068 17.0136 23.2838V20.7766C17.1933 20.5721 17.3985 20.3094 17.6182 19.9992C18.4891 18.769 19.148 17.4158 19.6046 15.9962C20.4242 15.7434 21.028 14.9864 21.028 14.0868V11.4106C21.028 10.8219 20.7661 10.2958 20.3593 9.92754V6.05886C20.3593 6.05886 21.154 0.0384827 13.0008 0.0384827C4.8476 0.0384827 5.64231 6.05886 5.64231 6.05886V9.92754C5.23477 10.2958 4.97363 10.8219 4.97363 11.4106V14.0868C4.97363 14.7917 5.3442 15.4121 5.89892 15.7706C6.5676 18.6815 8.31854 20.7766 8.31854 20.7766V23.2219C8.31779 24.1124 7.83024 24.9328 7.0476 25.36Z"
                    fill="#E7ECED"
                  ></path>
                </svg>
              </a>
              <div v-if="status.loggedIn === true" class="autorization__link loggedIn-js" @click="isUserDropdownActive=!isUserDropdownActive" v-on-clickaway="isUserDropdown">{{ account.user.full_name }}
                <div class="header__dropSettings" v-bind:style= "isUserDropdownActive ? 'display: block;' : 'display: none;'">
                    <ul>
                      <li><router-link to="/adverts" >Мои объвления</router-link></li>
                      <li><router-link to="/services" >Мои услуги</router-link></li>
                      <li><router-link to="/requests" >Заявки</router-link></li>
                      <li><router-link to="/settings" class="settings"><i class="fas fa-cog"></i>Настройки</router-link></li>
                      <li><router-link to="/logout" class="exit"><i class="icon-exit"></i>Выход</router-link></li>
                    </ul>
                  </div>
                </div>
                <a v-if="status.loggedIn === true" href="#" class="autorization__profile registration-js">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="37"
                  viewBox="0 0 26 34"
                  fill="none"
                >
                  <path
                    d="M7.0476 25.36L1.08005 28.6151C0.729862 28.806 0.415145 29.0407 0.122314 29.2966C3.60156 32.2302 8.09288 34 13.0001 34C17.871 34 22.3336 32.2566 25.8031 29.363C25.4831 29.0928 25.1359 28.8498 24.751 28.6581L18.3608 25.4634C17.5351 25.0506 17.0136 24.2068 17.0136 23.2838V20.7766C17.1933 20.5721 17.3985 20.3094 17.6182 19.9992C18.4891 18.769 19.148 17.4158 19.6046 15.9962C20.4242 15.7434 21.028 14.9864 21.028 14.0868V11.4106C21.028 10.8219 20.7661 10.2958 20.3593 9.92754V6.05886C20.3593 6.05886 21.154 0.0384827 13.0008 0.0384827C4.8476 0.0384827 5.64231 6.05886 5.64231 6.05886V9.92754C5.23477 10.2958 4.97363 10.8219 4.97363 11.4106V14.0868C4.97363 14.7917 5.3442 15.4121 5.89892 15.7706C6.5676 18.6815 8.31854 20.7766 8.31854 20.7766V23.2219C8.31779 24.1124 7.83024 24.9328 7.0476 25.36Z"
                    fill="#E7ECED"
                  ></path>
                </svg>
                  </a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="header__mnu">
              <ul class="header__mnuFirstLvl">
                <li v-for="category in categories.slice(0, 5)" v-bind:key="category.id">
                  <router-link :to="{name: 'cat', params: {cat_slug: category.slug, id: category.id}}">{{ category.name.ru }}</router-link>
                </li>
                <li class="arrowTrigger-js" @click="isCatDropdownActive=!isCatDropdownActive" v-on-clickaway="isCatDropdown">
                  Еще
                  <i class="fal fa-angle-down"></i>
                  <ul class="header__mnuSecondLvl dropMnu-js" v-bind:style= "isCatDropdownActive ? 'display: block;' : 'display: none;'">
                    <li v-for="category in categories.slice(5, 50)" v-bind:key="category.id">
                      <router-link :to="{name: 'cat', params: {cat_slug: category.slug, id: category.id}}">{{ category.name.ru }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <modal v-show="items.isModalVisible" @close="closeModal"/>
    </div>
</template>

<script>
import modal from './Modal.vue'
import { mapState, mapActions } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'nav-menu',
  mixins: [ clickaway ],
  computed: {
    ...mapState({
      status: state => state.account.status,
      account: state => state.account,
      items: state => state.items,
      categories: state => state.items.all.categories || []
    })
  },
  created () {
    this.getAlldata()
  },
  components: {
    modal
  },
  data () {
    return {
      isUserDropdownActive: false,
      isCatDropdownActive: false
    }
  },
  methods: {
    ...mapActions('items', {
      getAlldata: 'getAll'
    }),
    showModal () {
      this.items.isModalVisible = true
    },
    closeModal () {
      this.items.isModalVisible = false
    },
    isUserDropdown () {
      this.isDropdownActive = false
    },
    isCatDropdown () {
      this.isCatDropdownActive = false
    }
  }
}

</script>
