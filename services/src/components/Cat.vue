<template>
  <div class="category">
        <div class="container">
          <form action="" class="search">
            <div class="search__result">
              <h2>Услуги в категории {{ services.categoryName}} <span v-if="services.categoryServices">{{ services.categoryServices.data.length }}</span></h2>
            </div>
            <div class="search__input"><input type="text" placeholder="Поиск"> <button><i
                  class="fal fa-search"></i></button></div>
          </form>
        </div>
        <div class="container">
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
          <!--<div class="captionWrap">-->
            <!--<h2 class="caption caption&#45;&#45;secondCap">VIP обьявления</h2>-->
          <!--</div>-->
          <div class="row">
            <div class="col-lg-10 col-md-9">
              <!--<div class="mainAdv">-->
                <!--<div class="row">-->
                  <!--<div class="col-md-4">-->
                    <!--<div class="ad__items ad__items&#45;&#45;indentItem"><a href="#" class="ad__img">-->
                        <!--<div class="ad__tagged"><img src="images/bookmark.png" alt=""></div><img-->
                          <!--src="images/category/Malish.jpg" alt="">-->
                        <!--<div class="ad__discount">-->
                          <!--<h3>СКИДКА</h3>-->
                          <!--<p>30%</p>-->
                        <!--</div>-->
                      <!--</a>-->
                      <!--<div class="ad__desc"><a href="#" class="ad__itemCaption">Медицинский Центр “Малыш”<br>Полный цикл-->
                          <!--лечения детей от рождения до 14 лет.</a>-->
                        <!--<p class="ad__price">Цена не указана</p>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-md-4">-->
                    <!--<div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Surkis.jpg" alt="">-->
                        <!--<div class="ad__discount">-->
                          <!--<h3>СКИДКА</h3>-->
                          <!--<p>25%</p>-->
                        <!--</div>-->
                      <!--</a>-->
                      <!--<div class="ad__desc"><a href="#" class="ad__itemCaption">Гинеколог Суркис И.В.<br>Лечение-->
                          <!--репродуктивной системы, ведение беременности...</a>-->
                        <!--<p class="ad__price">500 с.</p>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-md-4">-->
                    <!--<div class="ad__items"><a href="#" class="ad__img"><img src="images/category/Malish.jpg" alt="">-->
                        <!--<div class="ad__discount">-->
                          <!--<h3>СКИДКА</h3>-->
                          <!--<p>25%</p>-->
                        <!--</div>-->
                      <!--</a>-->
                      <!--<div class="ad__desc"><a href="#" class="ad__itemCaption">Остеопат</a>-->
                        <!--<p class="ad__price">600 c.</p>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <div class="captionWrap">
                <h2 class="caption caption--secondCap">Новые объявления</h2>
              </div>
              <div class="secondaryAdv">
                <div class="row">
                  <div v-for="service in services.categoryServices.data" v-bind:key="service.id" class="col-lg-3 col-md-6 col-6">
                    <div class="ad__items ad__items--indentItem">
                        <router-link class="ad__img" :to="{name: 'service', params: {slug: service.slug, id: service.id}}">
                        <div class="ad__tagged">
                        <img v-if="service.is_vip === 1" src="../assets/images/bookmark.png" alt="">
                        </div>
                        <img v-if="service.main_image" :src="service.main_image.thumb_256" alt=""/>
                        <div class="ad__discount" v-if="service.discount > 0">
                          <h3>СКИДКА</h3>
                          <p>30%</p>
                        </div>
                      </router-link>
                      <div class="ad__desc">
                        <router-link class="ad__itemCaption" :to="{name: 'service', params: {slug: service.slug, id: service.id}}">{{ service.title.ru }}</router-link>
                        <p class="ad__price"><span></span>{{ service.price }} {{ service.currency }}</p>
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
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Cat',
  computed: {
    ...mapState({
      services: state => state.services.catservices.services || []
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
      getServiceById: 'getServiceByCatId'
    })
  }
}

</script>
