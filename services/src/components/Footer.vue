<template>
  <div class="footer">
      <div class="footer__wrap">
        <div class="container">
          <ul class="footer__nav">
            <li><router-link to="/about">О проекте</router-link></li>
            <li><router-link to="/faq">Вопрос - ответ</router-link></li>
            <li><router-link to="/">Партнерам</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style >
</style>
