<template>
  <div>
    <div class="privat contentWrap--atherBgc">
        <div class="container">
          <div class="request">
            <h3 class="inner__caption">Запросы на мои услуги ({{ ads.total }})</h3>
            <div v-for="ad in ads.data" v-bind:key="ad.id" class="request__itemWrap">
              <div class="request__item">
                <div class="privat__category privat__category--request">
                  <div v-for="category in ad.categories" v-bind:key="category.id" class="privat__categoryItem">
                    <p>{{ category.name.ru}}</p>
                  </div>
                </div>
                <p class="privat__categoryDesc"> {{ ad.desc.ru }} Тел. {{ ad.phone}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="container">
          <div class="pagination__wrap"><a class="pagination__link--prev pagination__link" href="#"><i
                class="fal fa-angle-left"></i></a> <a class="pagination__link pagination__link--current" href="#">1</a>
            <a class="pagination__link" href="#">2</a> <a class="pagination__link" href="#">3</a> <a
              class="pagination__link" href="#">4</a> <a class="pagination__link" href="#">5</a> <a
              class="pagination__link pagination__link--reduction" href="#"></a> <a class="pagination__link"
              href="#">13</a> <a class="pagination__link" href="#">14</a> <a
              class="pagination__link--next pagination__link" href="#"><i class="fal fa-angle-right"></i></a></div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Requests',
  computed: {
    ...mapState({
      user: state => state.account.user,
      ads: state => state.items.ads.userAds || []
    })
  },
  created () {
    this.getAdsByUserId(this.user.user_id)
  },
  methods: {
    ...mapActions('items', {
      getAdsByUserId: 'getAdsByUserId'
    })
  }
}
</script>
