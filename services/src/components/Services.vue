<template>
  <div class="privat contentWrap--atherBgc">
    <div>
        <div class="container">
          <div class="privat__statusBlock">
            <div class="row">
              <div class="col">
                <h3 class="inner__caption">Мои услуги</h3>
              </div>
              <div class="col">
                <div class="btnWrap"><router-link  to="/add_service" class="btn">Добавить услугу</router-link></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <div class="privat__statusBar">
                  <div class="privat__statusBarItem">
                    <p class="privat__statusItem">Активные услуги</p>
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
                      <p class="privat__adInfoDate">Дата создании: {{ service.created_at }}<br><span v-show="service.up"> Дата обнавлении: {{ service.up }}</span></p>
                      <div class="privat__category">
                        <div v-for="category in service.categories" v-bind:key="category.id" class="privat__categoryItem">
                          <p>{{ category.name.ru}}</p>
                        </div>
                      </div>
                      <p class="privat__categoryDesc">{{ service.desc.ru }} Тел.: {{ service.phone }}</p>
                      <img v-if="service.main_image" :src="service.main_image.thumb_128" alt="" width="55" style="margin-top:7px">
                    </div>
                    <ul class="privat__adInfoControlBtns">
                      <li><i @click="upService(service.id)" class="fal fa-undo-alt"></i></li>
                      <li><i @click="pauseService(service.id)" class="fal fa-pause"></i></li>
                      <li><i class="fal fa-edit"></i></li>
                      <li><i @click="deleteActiveService(service.id)" class="fal fa-times"></i></li>
                    </ul>
                  </div>
                  <pagination v-if="activeservices.last_page > 1" :pagination="activeservices" :offset="5" @paginate="fetchActiveService()"/>
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
                  <pagination v-if="inactiveservices.last_page > 1" :pagination="inactiveservices" :offset="5" @paginate="fetchInactiveService()"/>
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
                  <pagination v-if="awaitingservices.last_page > 1" :pagination="awaitingservices" :offset="5" @paginate="fetchAwaitingService()"/>
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
  name: 'Services',
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
      activeservices: state => state.services.activeservices.userServices || [],
      inactiveservices: state => state.services.inactiveservices.userServices || [],
      awaitingservices: state => state.services.awaitingservices.userServices || []
    })
  },
  created () {
    this.getActiveServiceByUserId({ id: this.account.user.user_id, page: this.activeservices.current_page })
  },
  methods: {
    ...mapActions('services', {
      getActiveServiceByUserId: 'getActiveServiceByUserId',
      getInactiveServiceByUserId: 'getInactiveServiceByUserId',
      getAwaitingServiceByUserId: 'getAwaitingServiceByUserId',
      deleteActiveService: 'deleteActiveService',
      deleteInactiveService: 'deleteInactiveService',
      deleteAwaitingService: 'deleteAwaitingService',
      pauseService: 'pauseService',
      playService: 'playService',
      upService: 'upService'
    }),
    makeActive (val) {
      this.choice = val
      const id = this.account.user.user_id
      if (val === 'active') {
        this.getActiveServiceByUserId({ id: id, page: 1 })
      } else if (val === 'inactive') {
        this.getInactiveServiceByUserId({ id: id, page: 1 })
      } else if (val === 'awaiting') {
        this.getAwaitingServiceByUserId({ id: id, page: 1 })
      }
    },
    isActiveTab (val) {
      return this.choice === val
    },
    fetchActiveService () {
      this.getActiveServiceByUserId({ id: this.account.user.user_id, page: this.activeservices.current_page })
    },
    fetchInactiveService () {
      this.getInactiveServiceByUserId({ id: this.account.user.user_id, page: this.inactiveservices.current_page })
    },
    fetchAwaitingService () {
      this.getAwaitingServiceByUserId({ id: this.account.user.user_id, page: this.awaitingservices.current_page })
    }
  }
}
</script>
