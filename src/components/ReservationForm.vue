<template>
    <div>
        <form novalidate class="md-layout" action="http://ugavto.loc/demand/store" method="post">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Заявка на путевку</div>
                </md-card-header>

                <md-card-content>
                    <div class="md-title">Заказчик</div>

                    <div class="md-layout md-gutter">

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('lastName')">
                                <label for="last-name">Фамилия</label>
                                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" required="required" />
                                <span class="md-error" v-if="!$v.form.lastName.required">Фамилия должна быть указана</span>
                                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Недопустимая длина фамилии</span>
                            </md-field>
                        </div>


                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">Имя</label>
                                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" required="required" />
                                <span class="md-error" v-if="!$v.form.firstName.required">Имя должно быть указано</span>
                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Недопустимая длина имени</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('patronName')">
                                <label for="patron-name">Отчество</label>
                                <md-input name="patron-name" id="patron-name" autocomplete="patron-name" v-model="form.patronName" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.patronName.required">Отчество должно быть указано</span>
                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Недопустимая длина Отчества</span>
                            </md-field>
                        </div>

                    </div>

                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('adults')">
                                <label for="adults">Кол-во взрослых</label>
                                <md-input type="number" id="adults" name="adults" v-model.number="form.adults" :disabled="sending" required="required"  @change="personsChanged" @input="personsChanged"  min="1" max="10"/>
                                <span class="md-error" v-if="!$v.form.adults.required">Обязательное поле</span>
                                <span class="md-error" v-else-if="!$v.form.adults.maxlength">Не верное количество взрослых</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('childs')">
                                <label for="childs">Кол-во детей</label>
                                <md-input type="number" id="childs" name="childs"  v-model.number="form.childs" :disabled="sending" required="required"  @change="personsChanged" @input="personsChanged"     min="0" max="10" />
                                <span class="md-error" v-if="!$v.form.childs.required">Обязательное поле</span>
                                <span class="md-error" v-else-if="!$v.form.childs.maxlength">Не верное количество детей</span>
                            </md-field>
                        </div>

                    </div>


                    <div v-if="moreThanOne">
                        <div class="md-title">Дополнительные туристы</div>
                        <div class="md-layout md-gutter" v-for="(person, id) in form.persons" v-bind:key="id">

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('lastName')">
                                    <label for="last-name">Фамилия</label>
                                    <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" required="required" />
                                    <span class="md-error" v-if="!$v.form.lastName.required">Фамилия должна быть указана</span>
                                    <span class="md-error" v-else-if="!$v.form.lastName.minlength">Недопустимая длина фамилии</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('firstName')">
                                    <label for="first-name">Имя</label>
                                    <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" required="required" />
                                    <span class="md-error" v-if="!$v.form.firstName.required">Имя должно быть указано</span>
                                    <span class="md-error" v-else-if="!$v.form.firstName.minlength">Недопустимая длина имени</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('patronName')">
                                    <label for="patron-name">Отчество</label>
                                    <md-input name="patron-name" id="patron-name" autocomplete="patron-name" v-model="form.patronName" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.patronName.required">Отчество должно быть указано</span>
                                    <span class="md-error" v-else-if="!$v.form.firstName.minlength">Недопустимая длина Отчества</span>
                                </md-field>
                            </div>
                        </div>
                    </div>

                    <div class="md-title">Параметры тура</div>

                    <div class="md-layout md-gutter">

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('cityOfResidence')">
                                <label for="city-of-residence">Город проживания</label>
                                <md-input name="city-of-residence" id="city-of-residence" autocomplete="city" v-model="form.cityOfResidence" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.cityOfResidence.required">Город проживания должен быть указан</span>
                                <span class="md-error" v-else-if="!$v.form.cityOfResidence.minlength">Недопустимая длина названия города</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('email')">
                                <label for="email">Телефон</label>
                                <md-input type="phone" name="phone" id="phone" autocomplete="phone" v-model="form.phone" :disabled="sending"  required="required" />
                                <span class="md-error" v-if="!$v.form.phone.required">Номер телефона должен  быть указан</span>
                                <span class="md-error" v-else-if="!$v.form.phone.email">Неверный номер телефона</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('callTime')">
                                <label for="call-time">Удобное время для звонка</label>
                                <md-input name="call-time" id="call-time" v-model="form.callTime" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.callTime.required">Время звонка должно быть указан</span>
                                <span class="md-error" v-else-if="!$v.form.callTime.minlength">Недопустимая длина времени для звонка</span>
                            </md-field>
                        </div>

                    </div>


                    <div class="md-layout md-gutter">

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('email')">
                                <label for="email">E-mail</label>
                                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" required="required" />
                                <span class="md-error" v-if="!$v.form.email.required">E-mail должен быть указан</span>
                                <span class="md-error" v-else-if="!$v.form.email.email">Неверный e-mail</span>
                            </md-field>
                        </div>
                    </div>

                    <div class="md-layout md-gutter">
                        <div class="md-layout-item">
                            <md-datepicker v-model="form.checkInDate">
                                <label>Дата заезда</label>
                            </md-datepicker>
                        </div>

                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label for="movie">Дней</label>
                                <md-select v-model="form.days" name="days" id="days">
                                    <md-option v-for="item in numbers" :key="item.k" :value="item.k">
                                        {{ item.k }} {{ item.v }}
                                    </md-option>
                                </md-select>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-datepicker v-model="form.checkOutDate">
                                <label>Дата выезда</label>
                            </md-datepicker>
                        </div>

                    </div>

                    <div class="md-layout md-gutter">

                        <div class="md-layout-item">
                            <md-field>
                                <label for="tour_city_id">Курорт</label>
                                <md-select v-model="form.tour_city_id" name="tour_city_id" id="tour_city_id">
                                    <md-option v-for="city in cities" :key="city.id" :value="city.id">
                                        {{ city.name }}
                                    </md-option>
                                </md-select>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-field>
                                <label for="tour_hotel_id">Санаторий/Отель</label>
                                <md-select v-model="form.tour_hotel_id" name="tour_hotel_id" id="tour_hotel_id">
                                    <md-option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
                                        {{ hotel.name }}
                                    </md-option>
                                </md-select>
                            </md-field>
                        </div>

                    </div>

                    <div class="md-layout md-gutter">

                        <div class="md-layout-item">
                            <md-field>
                                <label for="tour_room_id">Тип номера</label>
                                <md-select v-model="form.tour_room_id" name="tour_room_id" id="tour_room_id">
                                    <md-option v-for="room in rooms" :key="room.id" :value="room.id">
                                        {{ room.name }}
                                    </md-option>
                                </md-select>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-field>
                                <label for="tour_tarif_id">Тариф</label>
                                <md-select v-model="form.tour_tarif_id" name="tour_tarif_id" id="tour_tarif_id">
                                    <md-option v-for="tarif in tarifs" :key="tarif.id" :value="tarif.id">
                                        {{ tarif.name }}
                                    </md-option>
                                </md-select>
                            </md-field>
                        </div>

                    </div>



                    <div class="md-layout md-gutter">

                        <div class="md-layout-item">
                            <md-button class="md-raised md-primary">Расчитать стоимость</md-button>
                        </div>

                        <div class="md-layout-item">
                            <md-button type="submit" class="md-raised md-primary">Забронировать путевку</md-button>
                        </div>

                    </div>

                    <div class="md-layout md-gutter">
                    </div>


                </md-card-content>
            </md-card>
        </form>
    </div>
</template>


<script>
    var tomorrow = new Date();
    var aweek = new Date();
    var ayear = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);
    aweek.setDate(aweek.getDate() + 8);
    ayear.setDate(ayear.getDate() + 365);

    //import Datepicker from 'vuejs-datepicker';
    //import {en, ru} from 'vuejs-datepicker/dist/locale'

    import { validationMixin } from 'vuelidate';
    import {
        required,
        email,
        minLength,
        maxLength,
        maxValue,
        minValue
    } from 'vuelidate/lib/validators';

    export default {
        name: 'ReservationForm',
        mixins: [validationMixin],
        components: {

        },
        props: {
            msg: String
        },
        data: function () {
            return  {
                //en: en,
                //ru: ru,

                cities: [
                    {id:1, name:'Анапа'},
                    {id:2, name:'Адлер'},
                    {id:3, name:'Геленджик'},
                    {id:4, name:'Ростов'},
                    {id:5, name:'Норильск'},
                    {id:6, name:'Магадан'},
                ],
                hotels: [
                    {id:1, name:'Англетер'},
                    {id:2, name:'Россия'},
                    {id:3, name:'Москва'},
                    {id:4, name:'Астория'},
                    {id:5, name:'Super Puper *****'},
                    {id:6, name:'Ночлежка'},
                ],
                rooms: [
                    {id:1, name:'1-но местный'},
                    {id:2, name:'2-х местный double'},
                    {id:3, name:'2-х местный twin'},
                    {id:4, name:'3-х местный'},
                    {id:5, name:'2-х местный люкс'},
                    {id:6, name:'Президентский люкс'},
                ],
                tarifs: [
                    {id:1, name:'Без белья, без еды'},
                    {id:2, name:'Завтрак'},
                    {id:3, name:'Пансион'},
                    {id:4, name:'Лечение'},
                ],
                numbers: [
                    {k:"1",v:"A"},
                    {k:"2",v:"B"},
                    {k:"3",v:"C"},
                ],

                check_in_date: tomorrow,
                check_out_date: aweek,

                comments:'',

                form: {
                    firstName: null,
                    lastName: null,
                    gender: null,
                    age: null,
                    email: null,
                    cityOfResidence: null,
                    phone: null,
                    callTime: null,
                    adults: 1,
                    childs: 0,
                    checkInDate: tomorrow,
                    checkOutDate: aweek,
                    tour_city_id:0,
                    tour_hotel_id:0,
                    tour_room_id:0,
                    tour_tarif_id:0,

                    persons:[

                    ],
                },
                userSaved: false,
                sending: false,
                lastUser: null
            }
        },
        computed: {
            moreThanOne: function () {
                return this.form.adults + this.form.childs > 1;
            },
            personsCount: function () {
                return this.form.adults + this.form.childs;
            },
            extraPersonsCount: function () {
                let n = this.form.adults + this.form.childs - 1;
                if (n<0)
                {
                    n = 0;
                }
                return n;
            }
        },
        methods:{
            check_in_changed:function () {
                this.disabledDates_out.to = this.check_in_date;
                alert(this.check_in_date);
            },
            check_out_changed:function () {
                this.disabledDates_in.from = this.check_out_date;
                alert(this.check_out_date);
            },

            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm () {
                this.$v.$reset();
                this.form.firstName = null;
                this.form.lastName = null;
                this.form.age = null;
                this.form.gender = null;
                this.form.email = null;
                this.form.cityOfResidence = null;
                this.form.phone = null;
                this.form.callTime = null;
                this.form.adults = 1;
                this.form.childs = 0;
                this.tour_city_id = 0;
                this.tour_hotel_id = 0;
                this.tour_room_id = 0;
                this.tour_tarif_id = 0;
            },
            saveUser () {
                this.sending = true

                // Instead of this timeout, here you can call your API
                window.setTimeout(() => {
                    this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                    this.userSaved = true
                    this.sending = false
                    this.clearForm()
                }, 1500)
            },
            validateUser () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            },
            personsChanged: function () {

                while(this.form.persons.length < this.extraPersonsCount)
                {
                    this.form.persons.push({
                        lastName:'',
                        firstName:'',
                        patronName:'',
                    });
                }
                while(this.form.persons.length > this.extraPersonsCount)
                {
                    this.form.persons.splice(-1,1);
                }
            }
        },
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: minLength(2)
                },
                lastName: {
                    required,
                    minLength: minLength(2)
                },
                patronName: {
                    minLength: minLength(2)
                },
                age: {
                    required,
                    maxLength: maxLength(3)
                },
                gender: {
                    required
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required
                },
                cityOfResidence: {
                },
                callTime: {
                },
                adults: {
                    required,
                    minValue:minValue(1),
                    maxValue:maxValue(5),
                },
                childs: {
                    required,
                    minValue:minValue(0),
                    maxValue:maxValue(5),
                },

            }
        },

    }

</script>

