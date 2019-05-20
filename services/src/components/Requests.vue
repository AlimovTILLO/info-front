<template>
  <div>
    <div class="privat contentWrap--atherBgc">
      <div class="container">
        <div class="privat__statusBlock">
          <h3 class="inner__caption">Запросы на мои услуги ({{ ads.total }})</h3>
          <div v-for="ad in ads.data" v-bind:key="ad.id" class="request__itemWrap">
            <div class="request__item">
              <div class="privat__category privat__category--request">
                <div
                  v-for="category in ad.categories"
                  v-bind:key="category.id"
                  class="privat__categoryItem"
                >
                  <p>{{ category.name.ru}}</p>
                </div>
              </div>
              <p class="privat__categoryDesc">{{ ad.desc.ru }} Тел. {{ ad.phone}}</p>
            </div>
          </div>
        </div>
        <pagination v-if="ads.last_page > 1" :pagination="ads" :offset="5" @paginate="fetchPosts()"/>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from './Pagination.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Requests',
  components: {
    pagination
  },
  computed: {
    ...mapState({
      user: state => state.account.user,
      ads: state => state.items.ads.userAds || []
    })
  },
  created () {
    this.getAdsByUserId({ id: this.user.user_id, page: 1 })
  },
  methods: {
    ...mapActions('items', {
      getAdsByUserId: 'getAdsByUserId'
    }),
    fetchPosts () {
      this.getAdsByUserId({ id: this.user.user_id, page: this.ads.current_page })
    }
  }
}
</script>
