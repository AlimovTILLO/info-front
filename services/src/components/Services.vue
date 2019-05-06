<template>
  <div>
    <div class="privat">
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
                    <p class="privat__statusItem">Активные объявления</p>
                    <p class="privat__statusItemCount">1</p>
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
                    <li><a class="active" href="#">Активные</a></li>
                    <li><a href="#">Закрытые</a></li>
                  </ul>
                </div>
                <div class="privat__adInfoWrap">
                  <div class="privat__adInfo">
                    <p class="privat__adInfoDate">20 фев. 2019 | 12:30</p>
                    <div class="privat__category">
                      <div class="privat__categoryItem">
                        <p>Медицина</p>
                      </div>
                      <div class="privat__categoryItem privat__categoryItem--active">
                        <p>Стоматология</p>
                      </div>
                    </div>
                    <p class="privat__categoryDesc">Детский стоматолог. Лечение кариеса, терапия корневых каналов,
                      протезирование, установка брекетов и скоб. Тел.: +996 555 77 21 09</p><img
                      src="images/Mask Group-2.jpg" alt="" width="55" style="margin-top:7px">
                  </div>
                  <ul class="privat__adInfoControlBtns">
                    <li><i class="fal fa-pause"></i></li>
                    <li><i class="fal fa-edit"></i></li>
                    <li><i class="fal fa-times"></i></li>
                  </ul>
                </div>
                <div class="privat__adInfoWrap">
                  <div class="privat__adInfo">
                    <p class="privat__adInfoDate">20 фев. 2019 | 12:30</p>
                    <div class="privat__category">
                      <div class="privat__categoryItem">
                        <p>Медицина</p>
                      </div>
                      <div class="privat__categoryItem privat__categoryItem--active">
                        <p>Стоматология</p>
                      </div>
                    </div>
                    <p class="privat__categoryDesc">Детский стоматолог. Лечение кариеса, терапия корневых каналов,
                      протезирование, установка брекетов и скоб. Тел.: +996 555 77 21 09</p><img
                      src="images/Mask Group-2.jpg" alt="" width="55" style="margin-top:7px">
                  </div>
                  <ul class="privat__adInfoControlBtns">
                    <li><i class="fal fa-pause"></i></li>
                    <li><i class="fal fa-edit"></i></li>
                    <li><i class="fal fa-times"></i></li>
                  </ul>
                </div>
                <div class="privat__adInfoWrap">
                  <div class="privat__adInfo">
                    <p class="privat__adInfoDate">20 фев. 2019 | 12:30</p>
                    <div class="privat__category">
                      <div class="privat__categoryItem">
                        <p>Медицина</p>
                      </div>
                      <div class="privat__categoryItem privat__categoryItem--active">
                        <p>Стоматология</p>
                      </div>
                    </div>
                    <p class="privat__categoryDesc">Детский стоматолог. Лечение кариеса, терапия корневых каналов,
                      протезирование, установка брекетов и скоб. Тел.: +996 555 77 21 09</p><img
                      src="images/Mask Group-2.jpg" alt="" width="55" style="margin-top:7px">
                  </div>
                  <ul class="privat__adInfoControlBtns">
                    <li><i class="fal fa-pause"></i></li>
                    <li><i class="fal fa-edit"></i></li>
                    <li><i class="fal fa-times"></i></li>
                  </ul>
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
export default {
  name: 'Services'
}
</script>
