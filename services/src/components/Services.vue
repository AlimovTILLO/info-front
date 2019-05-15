<template>
  <div>
    <div class="privat contentWrap--atherBgc">
        <div class="container">
          <div class="request">
            <div class="row">
              <div class="col">
                <h3 class="inner__caption">Мои услугии</h3>
              </div>
              <div class="col">
                <div class="btnWrap"><router-link  to="/add_service" class="btn">Добавить услугу</router-link></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <div class="privat__statusBar">
                  <div class="privat__statusBarItem">
                    <p class="privat__statusItem">Активные услугии</p>
                    <p class="privat__statusItemCount">{{ activeservices.total }}</p>
                  </div>
                  <div class="privat__statusBarItem">
                    <p class="privat__statusItem">Просмотров</p>
                    <p class="privat__statusItemCount">51</p>
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <div class="privat__statusItems">
                  <ul>
                    <li><a v-bind:class="{ active: isActiveTab('active')}" v-on:click="makeActive('active')" href="#">Активные</a></li>
                    <li><a v-bind:class="{ active: isActiveTab('inactive')}" v-on:click="makeActive('inactive')" href="#">Неактивные</a></li>
                    <li><a v-bind:class="{ active: isActiveTab('awaiting')}" v-on:click="makeActive('awaiting')" href="#">В ожидании</a></li>
                  </ul>
                </div>
                <div v-show="isActiveTab('active')">
                  <div v-for="service in activeservices.data" v-bind:key="service.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ service.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in service.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ service.desc.ru }} Тел.: {{ service.phone }}</p>
                      <img v-if="service.main_image" :src="service.main_image.thumb_128" alt="" width="55" style="margin-top:7px">
                    </div>
                    <ul class="privat__adInfoControlBtns">
                      <li><i @click="pauseService(service.id)" class="fal fa-pause"></i></li>
                      <li><i class="fal fa-edit"></i></li>
                      <li><i @click="deleteActiveService(service.id)" class="fal fa-times"></i></li>
                    </ul>
                  </div>
                </div>
                <div v-show="isActiveTab('inactive')">
                  <div v-for="service in inactiveservices.data" v-bind:key="service.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ service.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in service.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ service.desc.ru }} Тел.: {{ service.phone }}</p>
                      <img v-if="service.main_image" :src="service.main_image.thumb_128" alt="" width="55" style="margin-top:7px">
                    </div>
                    <ul class="privat__adInfoControlBtns">
                      <li><i @click="playService(service.id)" class="fal fa-play"></i></li>
                      <li><i class="fal fa-edit"></i></li>
                      <li><i @click="deleteInactiveService(service.id)" class="fal fa-times"></i></li>
                    </ul>
                  </div>
                </div>
                <div v-show="isActiveTab('awaiting')">
                  <div v-for="service in awaitingservices.data" v-bind:key="service.id" class="privat__adInfoWrap">
                    <div class="privat__adInfo">
                      <p class="privat__adInfoDate">{{ service.created_at }}</p>
                      <div class="privat__category">
                        <div v-for="category in service.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ service.desc.ru }} Тел.: {{ service.phone }}</p>
                      <img v-if="service.main_image" :src="service.main_image.thumb_128" alt="" width="55" style="margin-top:7px">
                    </div>
                    <ul class="privat__adInfoControlBtns">
                      <li><i class="fal fa-edit"></i></li>
                      <li><i @click="deleteAwaitingService(service.id)" class="fal fa-times"></i></li>
                    </ul>
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
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Services',
  data () {
    return {
      choice: 'active'
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      activeservices: state => state.items.activeservices.userServices || [],
      inactiveservices: state => state.items.inactiveservices.userServices || [],
      awaitingservices: state => state.items.awaitingservices.userServices || []
    })
  },
  created () {
    this.getActiveServiceByUserId(this.account.user.user_id)
  },
  // watch: {
  //   $route (to, from) {
  //     this.getServiceByUserId(this.account.user.user_id)
  //   }
  // },
  methods: {
    ...mapActions('items', {
      getActiveServiceByUserId: 'getActiveServiceByUserId',
      getInactiveServiceByUserId: 'getInactiveServiceByUserId',
      getAwaitingServiceByUserId: 'getAwaitingServiceByUserId',
      deleteActiveService: 'deleteActiveService',
      deleteInactiveService: 'deleteInactiveService',
      deleteAwaitingService: 'deleteAwaitingService',
      pauseService: 'pauseService',
      playService: 'playService'
    }),
    makeActive (val) {
      this.choice = val
      const id = this.account.user.user_id
      if (val === 'active') {
        this.getActiveServiceByUserId(id)
      } else if (val === 'inactive') {
        this.getInactiveServiceByUserId(id)
      } else if (val === 'awaiting') {
        this.getAwaitingServiceByUserId(id)
      }
    },
    isActiveTab (val) {
      return this.choice === val
    }
  }
}
</script>
