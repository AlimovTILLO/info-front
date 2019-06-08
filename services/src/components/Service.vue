<template>
    <div class="service">
        <div class="container">
          <div class="service__wrap">
            <div class="breadCrumbs">
              <ul>
                <li><a href="#">Объявления</a></li>
                <li v-for="category in service.categories" :key="category.id">
                  <router-link v-if="category.name" :to="{name: 'cat', params: {id: category.id}}">{{ category.name.ru }}</router-link></li>

                <li v-if="service.title">{{ service.title.ru }}</li>
              </ul>
            </div>
            <div class="share">
              <p>Рассказать друзьям</p>
              <div class="likely">
                <div class="facebook"><i class="fab fa-facebook-f"></i></div>
                <div class="telegram"><i class="fab fa-telegram-plane"></i></div>
                <div class="vkontakte"><i class="fab fa-vk"></i></div>
                <div class="whatsapp whithoutBorder"><i class="fab fa-whatsapp"></i></div>
                <div class="odnoklassniki"><i class="fab fa-odnoklassniki"></i></div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 col-md-7">
                <div class="service__sliderWrap">
                  <div class="captionWrap">
                    <h2 v-if="service.title" class="caption caption--secondCap">{{ service.title.ru }}</h2>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                      <div class="swiper-container gallery-top">
                        <!--v-for="(image, index) in service.media" v-bind:key="image.id"-->
                        <div class="swiper-wrapper">
                          <div v-if="service.media[0]" class="swiper-slide">
                              <!--<img  alt="">-->
                              <img v-if="activeImage === 0" :src="service.media[0].thumb_512" alt="">
                              <img v-else :src="currentImage" alt="">
                          </div>
                          <img v-else src="../assets/images/no_image_placeholder.jpg" class="swiper-slide" alt="">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="swiper-container gallery-thumbs">
                        <div v-for="(image, index) in service.media" v-bind:key="image.id" class="swiper-wrapper">
                          <div :key="image.id" class="swiper-slide" :class="['thumbnail-image', (activeImage === index) ? 'active' : '']"
                               @click="activateImage(image.thumb_512)">
                              <img :src="image.thumb_128" ref="uniqueName" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="service__desc">
                  <p v-if="service">{{ service.desc.ru }}</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-5">
                <div class="service__profile">
                  <div class="service__join">
                    <ul>
                      <li><a @click="isShowing ^= true" href="#">Показать телефон {{ service.phone.slice(0, -6) }}<span v-show="!isShowing">ХХХ ХХХ</span><span v-show="isShowing">{{ service.phone.slice(-6, 15) }}</span></a></li>
                      <!-- <li><a href="#">Написать в WhatsApp</a></li>
                      <li><a href="#">Написать в Telegram</a></li> -->
                    </ul>
                  </div>
                  <div class="service__info">
                    <div class="service__infoProfile"><img src="images/service/Mask Group.png" alt=""></div>
                    <div class="service__name">
                      <p v-if="service.title">{{ service.title.ru }}</p>
                      <p v-if="service.user" ><strong>{{ service.user.full_name }}</strong></p>
                      <div class="rating">
                        <ul v-if="service.voted === false" class="rating">
                          <li class="star">
                            <i @click="addRating({service: service.id, user:account.user.user_id, rating:1})" class="fas fa-star" title="Ужасно"></i>
                          </li>
                          <li class="star">
                            <i @click="addRating({service: service.id, user:account.user.user_id, rating:2})" class="fas fa-star" title="Плохо"></i>
                          </li>
                          <li class="star">
                            <i @click="addRating({service: service.id, user:account.user.user_id, rating:3})" class="fas fa-star" title="Нормальо"></i>
                          </li>
                          <li class="star">
                            <i @click="addRating({service: service.id, user:account.user.user_id, rating:4})" class="fas fa-star" title="Хорошо"></i>
                          </li>
                          <li class="star">
                            <i @click="addRating({service: service.id, user:account.user.user_id, rating:5})" class="fas fa-star" title="Отлично"></i>
                          </li>
                        </ul>
                        <ul v-if="service.voted === true">
                            <li :style="service.rating >= 1 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 2 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 3 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 4 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 5 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div class="service__priceList">
                    <ul>
                      <li>
                        <p>Цена:</p>
                        <p class="ad__price ad__price--servicePrice"><span></span> {{ service.price }} {{ service.currency }}</p>
                      </li>
                      <!-- <li><span>Экономия:</span> 25% (200 с.)</li> -->
                      <li v-if="service.city "><span>Адрес:</span><br> г. {{ service.city.name.ru }}</li>
                    </ul><button class="favorites"><i class="fas fa-heart"></i> Добавить в избранное</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="secondaryAdv">
              <h2 class="caption caption--secondCap">Похожие объявления</h2>
              <div class="swiper-container serviceSlider-js">
                <div class="swiper-wrapper" style="" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')',transition: 'all 1s'}">
                  <div v-for="service in relatedServices" v-bind:key="service.id" :class="window.width < 575 ? 'swiper-minimal' : ''" class="swiper-slide" :style="{ paddingRight: padding + 'px' }">
                    <div class="ad__items">
                      <a href="#" class="ad__img">
                        <img v-if="service.main_image" :src="service.main_image.thumb_256" alt="">
                        <img v-else src="../assets/images/no_image_placeholder.jpg" alt="">
                        <!-- <div class="ad__discount">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div> -->
                      </a>
                      <div class="ad__desc"><a href="#" class="ad__itemCaption">{{ service.title.ru }}</a>
                        <p class="ad__price"><span></span>{{ service.price }} {{ service.currency }}</p>
                        <div class="rating">
                          <ul class="rating">
                            <li :style="service.rating >= 1 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 2 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 3 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 4 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                            <li :style="service.rating >= 5 ? 'color: #ed8a19' : 'color: #c4c4c4'" class="star"><i class="fas fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" @click="moveCarousel(-1)" :disabled="atHeadOfList"><i class="fal fa-angle-left"></i></div>
              <div class="swiper-button-next" @click="moveCarousel(1)" :disabled="atEndOfList"><i class="fal fa-angle-right"></i></div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Services',
  computed: {
    ...mapState({
      service: state => state.services.service.service || '',
      relatedServices: state => state.services.service.relatedServices || '',
      account: state => state.account
    }),
    currentImage () {
      return this.activeImage
    },
    atEndOfList () {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.relatedServices.length - this.windowSize)
    },
    atHeadOfList () {
      return this.currentOffset === 0
    }
  },
  data () {
    return {
      choice: '',
      isShowing: false,
      activeImage: 0,
      currentOffset: 0,
      windowSize: 5,
      paginationFactor: 220,
      relatedServicesLength: 0,
      window: {
        width: 0
      },
      padding: 20
    }
  },
  created () {
    this.getServiceById(this.$route.params.id)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    $route (to, from) {
      const id = to.params.id
      this.getServiceById(id)
    }
  },
  methods: {
    ...mapActions('services', {
      getServiceById: 'getServiceById',
      addRating: 'addRating'
    }),
    activateImage (imageIndex) {
      this.activeImage = imageIndex
    },
    moveCarousel (direction) {
      // alert(123)
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.padding = 20
      if (this.window.width < 575) {
        this.padding = 20
      }
    }
  }
}
</script>
