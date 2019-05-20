<template>
    <div class="service">
        <div class="container">
          <div class="service__wrap">
            <div class="breadCrumbs">
              <ul>
                <li><a href="#">Объявления</a></li>
                <li><a href="#">Медицина</a></li>
                <li><a href="#">Стоматология</a></li>
                <li>Детский стоматолог Иванов И.И.</li>
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
                    <h2 class="caption caption--secondCap">{{ service.title.ru }}</h2>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                      <div class="swiper-container gallery-top">
                        <div v-for="slide in service.media" v-bind:key="slide.id" class="swiper-wrapper">
                          <div class="swiper-slide">
                              <img :src="slide.thumb_512" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="swiper-container gallery-thumbs">
                        <div v-for="slide in service.media" v-bind:key="slide.id" class="swiper-wrapper">
                          <div class="swiper-slide">
                              <img :src="slide.thumb_128" alt="">
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
                      <li><a href="#">Показать телефон +996 701 <span>ХХ ХХ ХХ</span></a></li>
                      <!-- <li><a href="#">Написать в WhatsApp</a></li>
                      <li><a href="#">Написать в Telegram</a></li> -->
                    </ul>
                  </div>
                  <div class="service__info">
                    <div class="service__infoProfile"><img src="images/service/Mask Group.png" alt=""></div>
                    <div class="service__name">
                      <p>{{ service.title.ru }}</p>
                      <p><strong>{{ service.user.full_name }}</strong></p>
                      <div class="rating">
                        <ul class="rating">
                          <li class="star"><i class="fas fa-star"></i></li>
                          <li class="star"><i class="fas fa-star"></i></li>
                          <li class="star"><i class="fas fa-star"></i></li>
                          <li class="star"><i class="fas fa-star"></i></li>
                          <li class="star"><i class="fas fa-star"></i></li>
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
                      <li><span>Адрес:</span><br>Г. Бишкек, ул. Московская, 76 б.</li>
                    </ul><button class="favorites"><i class="fas fa-heart"></i> Добавить в избранное</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="secondaryAdv">
              <h2 class="caption caption--secondCap">Похожие объявления</h2>
              <div class="swiper-container serviceSlider-js">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Ophtalm.jpg" alt="">
                        <div class="ad__discount">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div>
                      </a>
                      <div class="ad__desc"><a href="#" class="ad__itemCaption">Офтальмология</a>
                        <p class="ad__price"><span>700 с.</span>500 c.</p>
                        <div class="rating">
                          <ul class="rating">
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Ophtalm.jpg" alt="">
                        <div class="ad__discount">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div>
                      </a>
                      <div class="ad__desc"><a href="#" class="ad__itemCaption">Офтальмология</a>
                        <p class="ad__price"><span>700 с.</span>500 c.</p>
                        <div class="rating">
                          <ul class="rating">
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Ophtalm.jpg" alt="">
                        <div class="ad__discount">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div>
                      </a>
                      <div class="ad__desc"><a href="#" class="ad__itemCaption">Офтальмология</a>
                        <p class="ad__price"><span>700 с.</span>500 c.</p>
                        <div class="rating">
                          <ul class="rating">
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Ophtalm.jpg" alt="">
                        <div class="ad__discount">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div>
                      </a>
                      <div class="ad__desc"><a href="#" class="ad__itemCaption">Офтальмология</a>
                        <p class="ad__price"><span>700 с.</span>500 c.</p>
                        <div class="rating">
                          <ul class="rating">
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                            <li class="star"><i class="fas fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev"><i class="fal fa-angle-left"></i></div>
              <div class="swiper-button-next"><i class="fal fa-angle-right"></i></div>
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
      service: state => state.services.service.service || ''
    })
  },
  beforeMount () {
    this.getServiceById(this.$route.params.id)
  },
  watch: {
    $route (to, from) {
      const id = to.params.id
      this.getServiceById(id)
    }
  },
  methods: {
    ...mapActions('services', {
      getServiceById: 'getServiceById'
    })
  }
}
</script>
