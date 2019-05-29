<template>
  <div>
    <div class="privat contentWrap--atherBgc">
        <div class="container">
          <div class="privat__statusBlock">
            <div class="row">
              <div class="col">
                <h3 class="inner__caption">Мои объявления</h3>
              </div>
              <div class="col">
                <div class="btnWrap"><router-link to="/" class="btn">Подать заявку</router-link></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <div class="privat__statusBar">
                  <div class="privat__statusBarItem">
                    <p class="privat__statusItem">Активные объявления</p>
                    <p class="privat__statusItemCount"> {{ activeads.total }}</p>
                  </div>
                  <div class="privat__statusBarItem">
                    <p class="privat__statusItem">Просмотров</p>
                    <p class="privat__statusItemCount">345</p>
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <div class="privat__statusItems">
                  <ul>
                    <li><a v-bind:class="{ active: isActiveTab('active')}" v-on:click="makeActive('active')" href="#">Активные</a></li>
                    <li><a v-bind:class="{ active: isActiveTab('awaiting')}" v-on:click="makeActive('awaiting')" href="#">В ожидании</a></li>
                    <li><a v-bind:class="{ active: isActiveTab('close')}" v-on:click="makeActive('close')" href="#">Закрытые</a></li>
                    <li><a v-bind:class="{ active: isActiveTab('rejected')}" v-on:click="makeActive('rejected')" href="#">Отклоненные</a></li>
                  </ul>
                </div>
                <div v-show="isActiveTab('active')">
                  <div v-for="ad in activeads.data" v-bind:key="ad.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ ad.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in ad.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ ad.desc.ru }}...</p>
                    </div>
                    <ul class="privat__adInfoControlBtns">
                      <li><i @click="pauseItem(ad.id)" class="fal fa-pause"></i></li>
                      <li><i class="fal fa-undo-alt"></i></li>
                      <li><i @click="deleteItem(ad.id)" class="fal fa-times"></i></li>
                    </ul>
                  </div>
                  <pagination v-if="activeads.last_page > 1" :pagination="activeads" :offset="5" @paginate="fetchActiveAds()"/>
                </div>
                <div v-show="isActiveTab('awaiting')">
                  <div v-for="ad in awaitingads.data" v-bind:key="ad.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ ad.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in ad.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ ad.desc.ru }}...</p>
                    </div>
                  </div>
                  <pagination v-if="awaitingads.last_page > 1" :pagination="awaitingads" :offset="5" @paginate="fetchAwaitingAds()"/>
                </div>
                <div v-show="isActiveTab('close')">
                  <div v-for="ad in closeads.data" v-bind:key="ad.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ ad.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in ad.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ ad.desc.ru }}...</p>
                    </div>
                  </div>
                  <pagination v-if="closeads.last_page > 1" :pagination="closeads" :offset="5" @paginate="fetchCloseAds()"/>
                </div>
                <div v-show="isActiveTab('rejected')">
                  <div v-for="ad in rejectedads.data" v-bind:key="ad.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ ad.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in ad.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ ad.desc.ru }}...</p>
                    </div>
                  </div>
                  <pagination v-if="rejectedads.last_page > 1" :pagination="rejectedads" :offset="5" @paginate="fetchRejectedAds()"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import pagination from './Pagination.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Adverts',
  components: {
    pagination
  },
  data () {
    return {
      choice: 'active'
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      activeads: state => state.items.activeads.userAds || [],
      awaitingads: state => state.items.awaitingads.userAds || [],
      closeads: state => state.items.closeads.userAds || [],
      rejectedads: state => state.items.rejectedads.userAds || []
    })
  },
  created () {
    this.getActiveAdsByUserId({id: this.account.user.user_id, page: 1})
  },
  methods: {
    ...mapActions('items', {
      getActiveAdsByUserId: 'getActiveAdsByUserId',
      getAwaitingAdsByUserId: 'getAwaitingAdsByUserId',
      getCloseAdsByUserId: 'getCloseAdsByUserId',
      getRejectedAdsByUserId: 'getRejectedAdsByUserId',
      deleteItem: 'deleteItem',
      pauseItem: 'pauseItem'
    }),
    makeActive (val) {
      this.choice = val
      const id = this.account.user.user_id
      if (val === 'active') {
        this.getActiveAdsByUserId({id: id, page: 1})
      } else if (val === 'awaiting') {
        this.getAwaitingAdsByUserId({id: id, page: 1})
      } else if (val === 'close') {
        this.getCloseAdsByUserId({id: id, page: 1})
      } else if (val === 'rejected') {
        this.getRejectedAdsByUserId({id: id, page: 1})
      }
    },
    isActiveTab (val) {
      return this.choice === val
    },
    fetchActiveAds () {
      this.getActiveAdsByUserId({ id: this.account.user.user_id, page: this.activeads.current_page })
    },
    fetchAwaitingAds () {
      this.getAwaitingAdsByUserId({ id: this.account.user.user_id, page: this.awaitingads.current_page })
    },
    fetchCloseAds () {
      this.getCloseAdsByUserId({ id: this.account.user.user_id, page: this.closeads.current_page })
    },
    fetchRejectedAds () {
      this.getRejectedAdsByUserId({ id: this.account.user.user_id, page: this.rejectedads.current_page })
    }
  }
}
</script>
