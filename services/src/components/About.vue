<template>
  <div class="about">
        <div class="about__wrap" :style="{'background-image': 'url(' + require('../assets/images/about/about.jpg') + ')'}">
        <!-- <div class="about__wrap" style="background-image:url('../assets/images/about/about.jpg')"> -->
          <div class="container">
            <div class="about__captionWrap">
              <h2>ishu.info</h2><span>Аукцион объявлений №1 в Кыргызстане</span>
            </div>
          </div>
        </div>
        <div class="about__our">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="about__ourItem">
                  <div class="captionWrap">
                    <h2 class="caption">Наша Миссия</h2>
                  </div>
                  <p>Мы любим наше дело. И делаем все , чтобы сближать людей для получения полезной и выгодной
                    информации максимально быстро, удобно и качественно.</p>
                  <p>Тем самым даём возможность выбора лучших цен, качество и сроков оказанных услуг. Экономя деньги и
                    время для улучшения качества жизни пользователей.</p>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-2 col-md-6 offset-md-0 col-sm-12 offset-sm-0">
                <div class="about__ourItem">
                  <div class="captionWrap">
                    <h2 class="caption">Наши Ценности</h2>
                  </div>
                  <p>Наша команда верит в дружбу , отзывчивость и взаимопомощь между людьми. На основе взаимовыгодных
                    отношений.</p>
                  <p>Ценим мнения и идеи друг-друга, открытость и взаимопонимание.</p>
                  <p>Инновации , идеи, страсть и постоянное совершенствование движет нашей компанией улучшать наш
                    продукт и не останавливается перед трудностями.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
