<template>
    <form>
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
                                        <div class="sdc-form-tour-input-data"><input type="text" name="name_" id="firstName" v-model="form.firstName" v-validate="'required'" data-vv-as="'Имя'"></div>
                                        <div class="os_reservation_form__inline_error" v-if=" errors.has('name_')">Ошибка: {{ errors.first('name_') }}</div>
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
                                        <div class="sdc-form-tour-input-info"><label for="phone">Номер телефона</label> <span class="sdc-form-required">*</span></div>
                                        <div class="sdc-form-tour-input-data"><input type="text" name="phones" value="" id="phone" v-model="form.phone" v-validate="'required|phone'" data-vv-as="'Номер телефона'"></div>
                                        <div class="os_reservation_form__inline_error" v-if=" errors.has('phones')">Ошибка: {{ errors.first('phones') }}</div>
                                    </div>
                                </td>

                                <td style="width:33%;">
                                    <div class="sdc-form-tour-input-line" title="На указанный Email будут приходить уведомления о текущем статусе заявки">
                                        <div class="sdc-form-tour-input-info"><label for="email">Email</label></div>
                                        <div class="sdc-form-tour-input-data"><input type="text" name="email" id="email" v-model="form.email" v-validate="'email'" data-vv-as="'Email'"></div>
                                        <div class="os_reservation_form__inline_error" v-if=" errors.has('email')">Ошибка: {{ errors.first('email') }}</div>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                        </table>

                        <div class="sdc-form-tour-input-line">
                            <div class="sdc-form-tour-input-info"><label for="callTime">Когда Вам удобно перезвонить в рабочее время? (Укажите Московское время)</label></div>
                            <div class="sdc-form-tour-input-data"><input type="text" name="callTime" id="callTime" v-model="form.callTime"></div>
                        </div>

                        <table class="sdc-table-clear100">
                            <tbody>
                            <tr>

                                <td style="width:50%;">
                                    <div class="sdc-form-tour-input-line">
                                        <div class="sdc-form-tour-input-info"><label for="adults">Кол-во взрослых</label> <span class="sdc-form-required">*</span></div>
                                        <div class="sdc-form-tour-input-data"><input type="text" name="adults" v-model="form.adults" id="adults" v-validate="'required|numeric|between:1,15'" data-vv-as="'Кол-во взрослых'"></div>
                                        <div class="os_reservation_form__inline_error" v-if=" errors.has('adults')">Ошибка: {{ errors.first('adults') }}</div>
                                    </div>
                                </td>

                                <td style="width:50%;">
                                    <div class="sdc-form-tour-input-line">
                                        <div class="sdc-form-tour-input-info"><label for="childs">Кол-во детей (до 14 лет)</label></div>
                                        <div class="sdc-form-tour-input-data"><input type="text" name="childs" v-model="form.childs" id="childs" v-validate="'required|numeric|between:0,15'" data-vv-as="'Кол-во детей'"></div>
                                        <div class="os_reservation_form__inline_error" v-if=" errors.has('childs')">Ошибка: {{ errors.first('childs') }}</div>
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

                        <div class="sdc-form-tour-input-line" v-show="!cityLimit">
                            <div class="sdc-form-tour-input-info"><label for="tourCityId">Курорт</label>  <!-- {{ form.tourCityId }} --></div>
                            <div class="sdc-form-tour-input-data">
                                <select name="city_id" v-model="form.tourCityId" id="tourCityId" @change="onCitySelected">
                                    <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{city.title}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="sdc-form-tour-input-line" v-show="!hotelLimit">
                            <div class="sdc-form-tour-input-info"><label for="tourHotelId">Санаторий/Пасионат/Отель</label>  <!--{{ form.tourHotelId }} --></div>
                            <div class="sdc-form-tour-input-data">
                                <select name="obj_items_id" v-model="form.tourHotelId"  id="tourHotelId" @change="onHotelSelected" :disabled="!citySelected">
                                    <option v-for="hotel in hotels" v-bind:key="hotel.id" v-bind:value="hotel.id">{{hotel.title}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="sdc-form-tour-input-line">
                            <div class="sdc-form-tour-input-info"><label for="tourRoomId">Номер</label>   <!--{{ form.tourRoomId }} --></div>
                            <div class="sdc-form-tour-input-data">
                                <select name="tourRoomId" v-model="form.tourRoomId"  id="tourRoomId"  @change="onRoomSelected"  :disabled="!hotelSelected">
                                    <option v-for="room in rooms" v-bind:key="room.id" v-bind:value="room.id">{{room.title}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="sdc-form-tour-input-line">
                            <div class="sdc-form-tour-input-info"><label for="tourTarifId">Тариф</label>   <!--{{ form.tourTarifId }} --></div>
                            <div class="sdc-form-tour-input-data">
                                <select name="tourTarifId" v-model="form.tourTarifId"  id="tourTarifId"  :disabled="!hotelSelected" @change="onTarifSelected">
                                    <option v-for="tarif in tarifs" v-bind:key="tarif.id" v-bind:value="tarif.id">{{ tarif.title }}</option>
                                </select>
                            </div>
                        </div>


                        <div class="sdc-form-tour-input-line">
                            <div class="sdc-form-tour-input-info"><label for="comments">Другие Ваши пожелания</label></div>
                            <div class="sdc-form-tour-input-data"><textarea name="comments" id="comments"></textarea></div>
                        </div><!-- /sdc-form-tour-input-line -->

                    </td><!-- /sdc-form-tour-colomn1 -->

                </tr>
                </tbody>
            </table><!-- /sdc-form-tour-table -->


            <div class="sdc-form-tour-input-line" v-if="hotelSelected && isQuotas">
                <h3>Номера доступны для онлайн бронирования</h3>
                <table border="1" cellspacing="0" class="sdc-table-list-tour">
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

            <div class="sdc-form-tour-input-line" v-if="calculated">
                <h3>Расчет стоимости бронирования</h3>
                <table border="1" cellspacing="0" class="sdc-table-list-tour">
                    <thead>
                        <tr>
                            <td>Период бронирования </td>
                            <td>Тариф в день Основное место</td>
                            <td>Тариф в день Доп место</td>
                            <td>Тариф в день Весь место</td>
                            <td>Кол-во чел</td>
                            <td>Сумма за ночь</td>
                            <td>Ночей</td>
                            <td>Сумма за период</td>
                        </tr>
                    </thead>

                    <tr v-for="(period, i) in calculated.periods" v-bind:key="i">
                        <td>с {{ period.period_start }} до {{ period.period_end }}</td>
                        <td>{{period.cost_per_adult_places}}</td>
                        <td>{{period.cost_per_extra_adult_places}}</td>
                        <td>{{period.cost_per_room}}</td>
                        <td v-if="!calculated.entireroom">{{calculated.persons}}</td>
                        <td v-if="calculated.entireroom">весь номер</td>
                        <td>{{period.total_cost}}</td>
                        <td>{{period.period_length}}</td>
                        <td>{{period.period_total_cost}}</td>
                    </tr>
                    <tr>
                        <td colspan="4">ИТОГО с {{ calculated.period_start }} до {{ calculated.period_end }}  </td>
                        <td v-if="!calculated.entireroom">{{calculated.persons}}</td>
                        <td v-if="calculated.entireroom">весь номер</td>
                        <td></td>
                        <td>{{ calculated.summ_length}}</td>
                        <td>{{ calculated.summ_total_cost }}</td>
                    </tr>

                </table>
            </div>

            <div class="os-reservaion-form__message" v-bind:class="messageClass" v-if="error_message" >{{ error_message }}</div>

            <div class="os-reservaion-form__message" v-bind:class="messageClass" v-if="raw_error_message" v-html="raw_error_message"></div>


            <div class="sdc-center">

                <div class="sdc-form-tour-button-order-box" title="При нажатии производится запрос доступных для бронирования мест" v-show="!!buttonQuotes">
                    <div class="sdc-form-tour-button-price" @click="getQuotas">Наличие мест</div>
                </div>

                &nbsp;

                <div class="sdc-form-tour-button-order-box" title="При нажатии производится калькуляция/расчет стоимости путевки" v-show="!!buttonPrice">
                    <div class="sdc-form-tour-button-price" @click="calculatePrice">Расчет стоимости</div>
                </div>

                &nbsp;

                <div class="sdc-form-tour-button-order-box" title="При нажатии ваша заявка отправляется в цетр обработки">
                    <div class="sdc-form-tour-button-order" @click="makeOrder">Заказать</div>
                </div>
            </div>

            <div class="sdc-copyright-zakazturov"><a href="https://zt.nsb.su/" target="_blank">Система автоматизации отдела бронирования санаториев, гостиниц и туристических фирм</a></div>

        </div>
    </form>
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

    const dict = {
        custom: {

        }
    };

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
                prices: [],
                calculated: null,
                order: null,
                comments: '',
                buttonPrice: window.__BUTTON_PRICE__ ,
                buttonQuotes: window.__BUTTON_QUOTES__,
                cityLimit: window.__CITY__,
                hotelLimit: window.__HOTEL__,
                form: {
                    formId: window.__FORM_ID__,
                    referer: window.__REFERER__,
                    firstName: null,
                    lastName: null,
                    patronName: null,
                    email: null,
                    cityOfResidence: null,
                    phone: null,
                    callTime: null,
                    adults: 2,
                    childs: 0,
                    checkInDate: tomorrow,
                    checkOutDate: aweek,
                    tourCityId: window.__CITY__,
                    tourHotelId: window.__HOTEL__,
                    tourRoomId: 0,
                    tourTarifId: 0,

                    persons: [],
                },
                userSaved: false,
                sending: false,
                lastUser: null,

                error_message: '',
                raw_error_message: '',
                error_status: 1,

                apidomain: window.__APIDOMAIN__,
                manager_phones: window.__MANAGER_PHONES__,
                sussess_order_message: window.__SUCCESS_ORDER_MESSAGE__,
            }
        },
        components: {
            Datepicker
        },
        computed: {
            citySelected: function () {
                return this.form.tourCityId > 0;
            },
            hotelSelected: function () {
                return this.form.tourHotelId > 0;
            },
            roomSelected: function () {
                return this.form.tourRoomId > 0;
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
            messageClass: function () {
                if (this.error_status === 'error') return 'os-reservaion-form__message_error';
                if (this.error_status === 'warn') return 'os-reservaion-form__message_warn';
                if (this.error_status === 'success') return 'os-reservaion-form__message_success';
                if (this.error_status === 'em') return 'os-reservaion-form__message_em';
                return '';
            },
            formValid () {
                // loop over all contents of the fields object and check if they exist and valid.
                return Object.keys(this.fields).every(field => {
                    return this.fields[field] && this.fields[field].valid;
                });
            }
        },
        methods: {
            setDays: function (nDays) {
                this.form.checkOutDate = new Date(this.form.checkInDate);
                this.form.checkOutDate.setDate(this.form.checkOutDate.getDate() + nDays);
                this.calculated = null;
                this.order = null;
                this.onDatesChanged();
            },
            onCitySelected: function () {
                this.form.tourHotelId = 0;
                this.form.tourRoomId = 0;
                this.form.tourTarifId = 0;
                this.hotels = [];
                this.rooms = [];
                this.tarifs = [];
                this.calculated = null;
                this.order = null;
                this.getCityHotels();
            },
            onHotelSelected: function () {
                this.form.tourRoomId = 0;
                this.form.tourTarifId = 0;
                this.rooms = [];
                this.tarifs = [];
                this.calculated = null;
                this.order = null;
                this.getHotelRooms();
                this.getHotelTarifs();
            },
            onRoomSelected: function () {
                this.calculated = null;
                this.order = null;
            },
            onTarifSelected: function () {
                this.calculated = null;
                this.order = null;
            },
            onDatesChanged: function () {
                if (this.hotelSelected)
                {
                    this.getHotelQuotas();
                }
            },
            getAllCities: function () {
                this.$http.get(this.apidomain + 'city/a/').then(function (response) {
                    this.cities = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getCityHotels: function () {
                this.$http.get(this.apidomain + 'city/' + this.form.tourCityId + '/hotels/a/').then(function (response) {
                    this.hotels = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelRooms: function () {
                this.$http.get(this.apidomain + 'hotel/' + this.form.tourHotelId + '/rooms/a/').then(function (response) {
                    this.rooms = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelTarifs: function () {
                this.$http.get(this.apidomain + 'hotel/' + this.form.tourHotelId + '/tarifs/a/').then(function (response) {
                    this.tarifs = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getRoomQuotas: function () {
                let str_dfrom = this.dateFromStr;
                let str_dto = this.dateToStr;
                alert(111);
                this.$http.get(this.apidomain + 'room/' + this.form.tourRoomId + '/quotas/' + str_dfrom + '/' + str_dto + '/').then(function (response) {
                    this.quotas = response.body;
                },function (error) {
                    console.log(error);
                })
            },
            getHotelQuotas: function () {
                let str_dfrom = this.dateFromStr;
                let str_dto = this.dateToStr;

                this.$http.get(this.apidomain + 'hotel/' + this.form.tourHotelId + '/quotas/' + str_dfrom + '/' + str_dto + '/').then(function (response) {
                    this.quotas = response.body;
                    if (!this.isQuotas) {
                        this.error_message = 'На указанный период информации о наличии в системе нет. Пожалуйста обратитесь к менеджеру';
                        this.error_status = 'warn';
                    }
                },function (error) {
                    console.log(error);
                    this.error_message = 'На указанный период информации о наличии в системе нет. Пожалуйста обратитесь к менеджеру';
                    this.error_status = 'warn';
                })
            },


            prepareFormData: function () {
                let form_data = new FormData();
                for ( let key in this.form ) {
                    form_data.append(key, this.form[key]);
                }
                form_data.append('checkInDateOK', this.dateFromStr);
                form_data.append('checkOutDateOK', this.dateToStr);
                return form_data;
            },
            calculatePrice : function () {

                this.raw_error_message = '';
                this.error_message = '';
                this.error_status = '';

                this.$validator.validateAll().then(isValid => {
                        if (!isValid) {
                            //this.raw_error_message = 'Обнаружены ошибки: ' + this.errors.items.length + '<br>';
                            this.error_status = 'warn';
                            for (let i=0; i<this.errors.items.length; i++) {
                                this.raw_error_message = this.raw_error_message + this.errors.items[i].msg + '<br>';
                            }
                        }
                        else {

                            if (!this.form.tourRoomId || !this.form.tourRoomId) {
                                this.error_message = 'Для расчета цены необходимо выбрать Курорт, Санаторий, Номер и Тариф';
                                this.error_status = 'warn';
                                return;
                            }

                            let form_data = this.prepareFormData();

                            this.$http.post(this.apidomain + 'order/calculate/', form_data).then(function (response) {
                                console.log(response.body);
                                if (response.body.calculated && response.body.calculated.summ_total_cost) {
                                    console.log(response.price);

                                    this.prices = response.body.prices;
                                    this.calculated = response.body.calculated;

                                }
                                else {
                                    this.calculated = null;
                                    this.prices = [];
                                    this.error_message = 'На указанный период цены не найдены. Пожалуйста обратитесь к менеджеру...';
                                    this.error_status = 'warn';
                                }

                            },function (error) {
                                console.log(error);
                                if (error.status) {
                                    this.error_message = error.body.text;
                                    this.error_status = 'error';
                                }
                            })
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getQuotas : function () {

                this.raw_error_message = '';
                this.error_message = '';
                this.error_status = '';

                this.$validator.validateAll().then(isValid => {
                    if (!isValid) {
                        //this.raw_error_message = 'Обнаружены ошибки: ' + this.errors.items.length + '<br>';
                        this.error_status = 'warn';
                        for (let i=0; i<this.errors.items.length; i++) {
                            this.raw_error_message = this.raw_error_message + this.errors.items[i].msg + '<br>';
                        }
                    }
                    else {
                        if (!this.form.tourHotelId) {
                            this.error_message = 'Для Запроса наличия мест необходимо выбрать Курорт и Санаторий';
                            this.error_status = 'warn';
                            return;
                        }

                        this.getHotelQuotas();
                    }
                })
                    .catch(e => {
                        console.log(e);
                    });
            },
            makeOrder : function () {
                this.raw_error_message = '';
                this.error_message = '';
                this.error_status = '';
                this.$validator.validateAll().then(isValid => {
                    if (!isValid) {
                        //this.raw_error_message = 'Обнаружены ошибки: ' + this.errors.items.length + '<br>';
                        this.error_status = 'warn';
                        for (let i=0; i<this.errors.items.length; i++) {
                            this.raw_error_message = this.raw_error_message + this.errors.items[i].msg + '<br>';
                        }
                    }
                    else {
                        let form_data = this.prepareFormData();

                        this.$http.post(this.apidomain + 'order/createfromweb/', form_data).then(function (response) {
                            console.log(response);
                            if (response.body.order) {
                                this.order = response.body.order;
                                this.hotel = response.body.hotel;
                                this.room = response.body.room;
                                this.error_message =  'Ваша заявка зарегистрирована под № ' + this.order.id +
                                    '. Время регистрации: '+ this.order.date_create_iso  +'.'

                                if (this.hotel)
                                {
                                    this.error_message += ' Объект: ' + this.hotel.title + '. ' + this.sussess_order_message;
                                }
                                this.error_status = 'success';
                            }
                            else {
                                this.error_message = "При оформлении заказа произошла ошибка на стороне сервера. Пожалуйста свяжитесь с нашей службой поддержки. ";
                                this.error_status = 'error';
                            }
                        },function (error) {
                            console.log(error);
                            if (error.status) {
                                this.error_message = error.body.text;
                                this.error_status = 'error';
                            }
                        })
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            }
        },
        created : function () {
            this.$validator.localize('ru', dict);
            this.getAllCities();
            if (this.form.tourCityId) {
                this.getCityHotels();
                if (this.form.tourHotelId)
                {
                    this.getHotelRooms();
                    this.getHotelTarifs();
                }
            }
        }
    }
</script>


<style>
    select:disabled {
        background-color: #cccccc;
        bordre-color: #cccccc;
    }
</style>