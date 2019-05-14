<template>
  <div>
    <div class="privat">
        <div class="container">
          <div class="request">
            <h3 class="inner__caption">Запросы на мои услуги (2)</h3>
            <div class="request__itemWrap">
              <div class="request__item">
                <div class="privat__category privat__category--request">
                  <div class="privat__categoryItem">
                    <p>Медицина</p>
                  </div>
                  <div class="privat__categoryItem privat__categoryItem--active">
                    <p>Стоматология</p>
                  </div>
                </div>
                <p class="privat__categoryDesc">Нужно установить брекеты. Ребенок, 14 лет. Тел. 0555 33 14 15</p>
              </div>
            </div>
            <div class="request__itemWrap">
              <div class="request__item">
                <div class="privat__category privat__category--request">
                  <div class="privat__categoryItem">
                    <p>Медицина</p>
                  </div>
                  <div class="privat__categoryItem privat__categoryItem--active">
                    <p>Стоматология</p>
                  </div>
                </div>
                <p class="privat__categoryDesc">можем приехать на лечение. Тел. 0700 02 03 19</p>
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
export default {
  name: 'Requests'
}
</script>
