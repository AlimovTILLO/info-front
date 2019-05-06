<template>
  <div class="contacts">
        <div class="container">
          <div class="breadCrumbs">
            <ul>
              <li><a href="#">Главная</a></li>
              <li>Контакты</li>
            </ul>
          </div>
          <div class="captionWrap">
            <h2 class="caption noIndent">Мы открыты для обратной связи и с удовольствием ответим на все ваши<br>вопросы
              и предложения.</h2>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="contacts__list">
                <ul>
                  <li>
                    <p>Приемная Ishu Info</p><a href="tel:+996555020319">+996 555 02 03 19</a>
                  </li>
                  <li>
                    <p>По вопросам сотрудничества:</p><a href="tel:+996555020319">+996 555 02 03 19</a> <a
                      href="mailto:+pr@ishu.info">pr@ishu.info</a>
                  </li>
                  <li>
                    <p>Партнерам</p><a href="tel:+996555020319">+996 555 02 03 19</a> <a
                      href="mailto:+pr@ishu.info">pr@ishu.info</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-7">
              <div class="contacts__form">
                <form action="">
                  <p>Задайте нам вопрос</p><input type="text" class="contacts__input" placeholder="Тема обращения">
                  <textarea class="contacts__textarea" placeholder="Описание"></textarea> <button
                    class="btn">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>
