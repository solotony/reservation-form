<template>
    <div class="sdc-form-tour">
        <h2 class="sdc-form-tour-h2">Форма бронирования</h2>

        <table class="sdc-form-tour-table">
            <tbody>
            <tr>
                <td class="sdc-form-tour-colomn1">
                    <div class="sdc-form-tour-description"><span class="sdc-form-required">*</span> поля обязательны для заполнения.</div>

                    <table class="sdc-table-clear100">
                        <tbody>
                        <tr>
                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line" title="Требуется обязательное заполнение, чтобы оформить путевку без ошибок">
                                    <div class="sdc-form-tour-input-info"><label for="lastName">Фамилия</label></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="surname" id="lastName" v-model="form.lastName"></div>
                                </div>
                            </td>
                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line" title="Требуется обязательное заполнение, чтобы оформить путевку без ошибок">
                                    <div class="sdc-form-tour-input-info"><label for="firstName">Имя</label> <span class="sdc-form-required">*</span></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="name_" id="firstName" v-model="form.firstName"></div>
                                </div>
                            </td>
                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line" title="Рекомендуется обязательное заполнение, чтобы оформить путевку без ошибок">
                                    <div class="sdc-form-tour-input-info"><label for="patronName">Отчество</label></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="patro" id="patronName" v-model="form.patronName"></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table class="sdc-table-clear100">
                        <tbody>
                        <tr>

                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line">
                                    <div class="sdc-form-tour-input-info"><label for="cityOfResidence">Город проживания</label></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="city_client" value="" id="cityOfResidence" v-model="form.cityOfResidence"></div>
                                </div>
                            </td>

                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line" title="Требуется обязательное заполнение, чтобы дежурный менеджер мог оперативно с вами связаться">
                                    <div class="sdc-form-tour-input-info"><label for="phone">(Код города) телефон</label> <span class="sdc-form-required">*</span></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="phones" value="" id="phone" v-model="form.phone"></div>
                                </div>
                            </td>

                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line" title="На указанный Email будут приходить уведомления о текущем статусе заявки">
                                    <div class="sdc-form-tour-input-info"><label for="email">Email</label></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="email" id="email" v-model="form.email"></div>
                                </div>
                            </td>

                        </tr>
                        </tbody>
                    </table>

                    <div class="sdc-form-tour-input-line">
                        <div class="sdc-form-tour-input-info"><label for="callTime">Когда Вам удобно перезвонить в рабочее время? (Укажите Московское время)</label></div>
                        <div class="sdc-form-tour-input-data"><input type="text" name="time_callback" id="callTime" v-model="form.callTime"></div>
                    </div>

                    <table class="sdc-table-clear100">
                        <tbody>
                        <tr>

                            <td style="width:50%;">
                                <div class="sdc-form-tour-input-line">
                                    <div class="sdc-form-tour-input-info"><label for="adults">Кол-во взрослых</label> <span class="sdc-form-required">*</span></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="count_grown" v-model="form.adults" id="adults"></div>
                                </div>
                            </td>

                            <td style="width:50%;">
                                <div class="sdc-form-tour-input-line">
                                    <div class="sdc-form-tour-input-info"><label for="childs">Кол-во детей (до 14 лет)</label></div>
                                    <div class="sdc-form-tour-input-data"><input type="text" name="count_kids" v-model="form.childs" id="childs"></div>
                                </div>
                            </td>

                        </tr>
                        </tbody>
                    </table>

                    <table class="sdc-table-clear100">
                        <tbody>
                        <tr>
                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line">
                                    <div class="sdc-form-tour-input-info"><label for="checkInDate">Дата заезда</label> {{ dateFromStr }} </div>
                                    <div class="sdc-form-tour-input-data">
                                        <datepicker v-model="form.checkInDate" id="checkInDate" name="date_begin" :language="ru" :monday-first="true" @input="onDatesChanged"></datepicker>
                                    </div>
                                </div><!-- /sdc-form-tour-input-line -->
                            </td>

                            <td style="padding-top:34px;width:33%;">
                                <div class="sdc-center">
                                    <span class="sdc-num-click" v-on:click="setDays(2)" title="Заезд на 2 дня">2</span>
                                    <span class="sdc-num-click" v-on:click="setDays(3)" title="Заезд на 3 дня">3</span>
                                    <span class="sdc-num-click" v-on:click="setDays(10)" title="Заезд на 10 дней">10</span>
                                    <span class="sdc-num-click" v-on:click="setDays(12)" title="Заезд на 12 дней">12</span>
                                    <span class="sdc-num-click" v-on:click="setDays(14)" title="Заезд на 14 дней">14</span>
                                    <span class="sdc-num-click" v-on:click="setDays(21)" title="Заезд на 21 день">21</span>
                                </div><!-- /sdc-center -->
                            </td>

                            <td style="width:33%;">
                                <div class="sdc-form-tour-input-line">
                                    <div class="sdc-form-tour-input-info"><label for="checkOutDate">Дата выезда</label> {{ dateToStr }}</div>
                                    <div class="sdc-form-tour-input-data">
                                        <datepicker v-model="form.checkOutDate" id="checkOutDate" name="date_end" :language="ru" :monday-first="true" @input="onDatesChanged"></datepicker>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div class="sdc-form-tour-input-line">
                        <div class="sdc-form-tour-input-info"><label for="tour_city_id">Курорт</label>  {{ form.tour_city_id }}</div>
                        <div class="sdc-form-tour-input-data">
                            <select name="city_id" v-model="form.tour_city_id" id="tour_city_id" @change="onCitySelected">
                                <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{city.title}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="sdc-form-tour-input-line" v-show="citySelected">
                        <div class="sdc-form-tour-input-info"><label for="tour_hotel_id">Санаторий/Пасионат/Отель</label> {{ form.tour_hotel_id }}</div>
                        <div class="sdc-form-tour-input-data">
                            <select name="obj_items_id" v-model="form.tour_hotel_id"  id="tour_hotel_id" @change="onHotelSelected">
                                <option v-for="hotel in hotels" v-bind:key="hotel.id" v-bind:value="hotel.id">{{hotel.title}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="sdc-form-tour-input-line" v-show="hotelSelected">
                        <div class="sdc-form-tour-input-info"><label for="tour_room_id">Номер</label>  {{ form.tour_room_id }}</div>
                        <div class="sdc-form-tour-input-data">
                            <select name="tour_room_id" v-model="form.tour_room_id"  id="tour_room_id"  @change="onRoomSelected">
                                <option v-for="room in rooms" v-bind:key="room.id" v-bind:value="room.id">{{room.title}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="sdc-form-tour-input-line" v-show="hotelSelected && isQuotas">
                        <table border="1" cellspacing="0" cellpadding="2">
                            <tr>
                                <td>ID</td>
                                <td v-for="d in quotas.dates" v-bind:key="d">{{d}}</td>
                            </tr>
                            <tr v-for="room in quotas.rooms" v-bind:key="room.id">
                                <td>{{room.id}}</td>
                                <td v-for="(d, i) in quotas.dates" v-bind:key="d">{{room.data[i]}}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="sdc-form-tour-input-line" v-show="hotelSelected">
                        <div class="sdc-form-tour-input-info"><label for="tour_tarif_id">Услуги</label>  {{ form.tour_tarif_id }}</div>
                        <div class="sdc-form-tour-input-data">
                            <select name="tour_tarif_id" v-model="form.tour_tarif_id"  id="tour_tarif_id" >
                                <option v-for="tarif in tarifs" v-bind:key="tarif.id" v-bind:value="tarif.id">{{ tarif.title }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="sdc-form-tour-input-line">
                        <div class="sdc-form-tour-input-info"><label for="patronName">Другие Ваши пожелания</label></div>
                        <div class="sdc-form-tour-input-data"><textarea name="other_text"></textarea></div>
                    </div><!-- /sdc-form-tour-input-line -->

                </td><!-- /sdc-form-tour-colomn1 -->

            </tr>
            </tbody>
        </table><!-- /sdc-form-tour-table -->

        <div id="dom_form_tour_status"></div>

        <div id="dom_form_tour_price"></div>

        <div class="sdc-center">

            <div class="sdc-form-tour-button-order-box" title="При нажатии производится калькуляция/расчет стоимости путевки">
                <div class="sdc-form-tour-button-price" onclick="obj_obj_order_form.calculation();">Расчет стоимости</div>
            </div><!-- /sdc-form-tour-button-order-box -->

            <div class="sdc-form-tour-button-order-box" title="При нажатии ваша заявка отправляется в цетр обработки">
                <div class="sdc-form-tour-button-order" onclick="obj_obj_order_form.order_add();">Заказать</div>
            </div><!-- /sdc-form-tour-button-order-box -->
        </div><!-- /sdc-center -->

        <div class="sdc-copyright-zakazturov"><a href="https://zt.nsb.su/" target="_blank">Система автоматизации отдела бронирования санаториев, гостиниц и туристических фирм</a></div>

    </div>
</template>

<script>

    if(!Date.prototype.toLocaleFormat){
        Date.prototype.toLocaleFormat = function(format) {
            var f = {
                Y : this.getFullYear(),
                y : this.getFullYear()-(this.getFullYear()>=2e3?2e3:1900),
                m : this.getMonth() + 1,
                d : this.getDate(),
                H : this.getHours(),
                M : this.getMinutes(),
                S : this.getSeconds()
            }, k;
            for(k in f)
                format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
            return format;
        }
    }

    import Datepicker from 'vuejs-datepicker';
    import {en, ru} from 'vuejs-datepicker/dist/locale'

    let tomorrow = new Date();
    let aweek = new Date();
    let ayear = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);
    aweek.setDate(aweek.getDate() + 8);
    ayear.setDate(ayear.getDate() + 365);

    export default {
        data: function () {
            return {
                en: en,
                ru: ru,

                cities: [],
                hotels: [],
                rooms: [],
                tarifs: [],
                quotas: [],

                comments: '',

                form: {
                    firstName: null,
                    lastName: null,
                    patronName: null,
                    gender: null,
                    age: null,
                    email: null,
                    cityOfResidence: null,
                    phone: null,
                    callTime: null,
                    adults: 2,
                    childs: 0,
                    checkInDate: tomorrow,
                    checkOutDate: aweek,
                    tour_city_id: 0,
                    tour_hotel_id: 0,
                    tour_room_id: 0,
                    tour_tarif_id: 0,

                    persons: [],
                },
                userSaved: false,
                sending: false,
                lastUser: null,

                apidomain: 'http://forms.nsb.loc/api/'
            }
        },
        components: {
            Datepicker
        },
        computed: {
            citySelected: function () {
                return this.form.tour_city_id > 0;
            },
            hotelSelected: function () {
                return this.form.tour_hotel_id > 0;
            },
            roomSelected: function () {
                return this.form.tour_room_id > 0;
            },
            isQuotas () {
                if (!this.quotas) return false;
                if (!this.quotas.count) return false;
                if (!this.quotas.rooms.length) return false;
                return true;
            },
            quotasDates () {
                return this.quotas[0];
            },
            dateFromStr: function () {
                return this.form.checkInDate.toLocaleFormat('%Y-%m-%d');
            },
            dateToStr: function () {
                return this.form.checkOutDate.toLocaleFormat('%Y-%m-%d');
            },
        },
        methods: {
            setDays: function (nDays) {
                this.form.checkOutDate = new Date(this.form.checkInDate);
                this.form.checkOutDate.setDate(this.form.checkOutDate.getDate() + nDays);
                this.onDatesChanged();
            },
            onCitySelected: function () {
                this.form.tour_hotel_id = 0;
                this.form.tour_room_id = 0;
                this.form.tour_tarif_id = 0;
                this.hotels = [];
                this.rooms = [];
                this.tarifs = [];
                this.getCityHotels();
            },
            onHotelSelected: function () {
                this.form.tour_room_id = 0;
                this.form.tour_tarif_id = 0;
                this.rooms = [];
                this.tarifs = [];
                this.getHotelRooms();
                this.getHotelTarifs();
                this.getHotelQuotas();
            },
            onDatesChanged: function () {
                if (this.hotelSelected)
                {
                    this.getHotelQuotas();
                }
            },
            onRoomSelected: function () {
            },
            getAllCities: function () {
                this.$http.get(this.apidomain + 'city/').then(function (response) {
                    this.cities = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getCityHotels: function () {
                this.$http.get(this.apidomain + 'city/' + this.form.tour_city_id + '/hotels/').then(function (response) {
                    this.hotels = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelRooms: function () {
                this.$http.get(this.apidomain + 'hotel/' + this.form.tour_hotel_id + '/rooms/').then(function (response) {
                    this.rooms = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelTarifs: function () {
                this.$http.get(this.apidomain + 'hotel/' + this.form.tour_hotel_id + '/tarifs/').then(function (response) {
                    this.tarifs = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getRoomQuotas: function () {
                let str_dfrom = this.dateFromStr;
                let str_dto = this.dateToStr;
                alert(111);
                this.$http.get(this.apidomain + 'room/' + this.form.tour_room_id + '/quotas/' + str_dfrom + '/' + str_dto + '/').then(function (response) {
                    this.quotas = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelQuotas: function () {
                let str_dfrom = this.dateFromStr;
                let str_dto = this.dateToStr;

                this.$http.get(this.apidomain + 'hotel/' + this.form.tour_hotel_id + '/quotas/' + str_dfrom + '/' + str_dto + '/').then(function (response) {
                    this.quotas = response.body;
                },function (error) {
                    console.log(error);
                })
            }
        },
        created : function () {
            this.getAllCities();
        }
    }
</script>