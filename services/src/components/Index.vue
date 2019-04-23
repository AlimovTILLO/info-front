<template>
  <div class="filter">
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
                    <div class="filter__form">
                        <form action=""><textarea class="filter__textarea"
                                placeholder="Опишите услугу, например: Нужен сантехник для ремонта водопровода, заменить 2 смесителя, прочистить сливы..."></textarea>
                            <div class="filter__selectWrap">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="filter__select addCategory-js">
                                            <div class="chooseSection select-js">
                                                <p>Выберите раздел <i class="fal fa-angle-down"></i></p>
                                            </div>
                                        </div>
                                        <div class="privat__categoryItem privat__categoryItem--popularCategory">
                                            <p>Авто</p>
                                        </div>
                                        <div class="privat__categoryItem privat__categoryItem--popularCategory">
                                            <p>Медицина</p>
                                        </div>
                                        <div class="privat__categoryItem privat__categoryItem--popularCategory">
                                            <p>Муж на час</p>
                                        </div>
                                        <div class="privat__categoryItem privat__categoryItem--popularCategory">
                                            <p>Досуг</p>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="filter__select filter__select--city"><select name="sources"
                                                id="sources" class="custom-select sources" placeholder="Выберите город">
                                                <option value="Бишкек">Бишкек</option>
                                                <option value="Ош" class="separateLine">Ош</option>
                                                <option value="Баткен">Баткен</option>
                                                <option value="Джалал-Абад">Джалал-Абад</option>
                                                <option value="Каракол">Каракол</option>
                                                <option value="Нарын">Нарын</option>
                                                <option value="Талас">Талас</option>
                                                <option value="Токмок" class="separateLine">Токмок</option>
                                                <option value="Балыкчи">Балыкчи</option>
                                                <option value="Исфана">Исфана</option>
                                                <option value="Кайынды">Кайынды</option>
                                                <option value="Кант">Кант</option>
                                                <option value="Кара-Балта">Кара-Балта</option>
                                            </select></div>
                                    </div>
                                </div>
                                <div class="filter__sections">
                                    <div class="filter__sectionsItem" data-value="Медицина">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/first-aid-kit.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Медицина</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Юридические">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/balance.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Юридические</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Бухгалтерия">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/calculator.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Бухгалтерия</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Обустройство и ремонт">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/wrench.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Обустройство и ремонт</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Торжества">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/confetti.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Торжества</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Финансы">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/money-bag.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Финансы</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Полиграфия и реклама">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/megaphone.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Полиграфия и реклама</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Красота и здоровье">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/flower.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Красота и здоровье</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Образование">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/book (1).svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Образование</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Языковые переводы">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/translator.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Языковые переводы</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Гостиницы и сауны">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/do-not-disturb.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Гостиницы и сауны</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Авто">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/car.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Авто</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Путешествия">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/sunset.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Путешествия</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Досуг">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/cocktail.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Досуг</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Интернет">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/internet.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Интернет</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Транспортные перевозки">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/delivery-truck.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Транспортные перевозки</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Благосустройство и дизайн">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/paint-palette.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Благосустройство и дизайн</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Животные">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/pawprint.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Животные</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Охрана и безопасность">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/shield.svg" alt="">
                                            </div>
                                        </div>
                                        <p class="filter__sectionName">Охрана и безопасность</p>
                                    </div>
                                    <div class="filter__sectionsItem" data-value="Работа">
                                        <div class="filter__iconWrap">
                                            <div class="filter__icon"><img src="fonts/icon/svg icon/job-search.svg"
                                                    alt=""></div>
                                        </div>
                                        <p class="filter__sectionName">Работа</p>
                                    </div>
                                </div>
                            </div><input type="tel" class="filter__input phone-js" id="phone"
                                placeholder="Укажите свой номер телефона" required autocomplete="off">
                            <div class="filter__inputFile">
                                <div class="uploadbutton">
                                    <div class="input-file-text"><i class="fal fa-paperclip"></i>Прикрепить фото</div>
                                    <input class="input-file" type="file" title="Выбрать фото" multiple="multiple">
                                </div>
                            </div>
                            <div class="filter__buttonWrap"><button type="submit" class="btn">Предварительный
                                    просмотр</button> <button class="btn">Оставить заявку</button></div>
                        </form>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
