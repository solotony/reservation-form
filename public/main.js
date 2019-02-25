import Vue from 'vue'
import App from './App.vue'

//import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import ru from 'vee-validate/dist/locale/ru';
import VeeValidate, { Validator } from 'vee-validate';
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css' // This line here

const config = {
    aria: true,
    classNames: {},
    classes: false,
    delay: 0,
    dictionary: null,
    errorBagName: 'errors', // change if property conflicts
    events: 'input|blur',
    fieldsBagName: 'fields',
    i18n: null, // the vue-i18n plugin instance
    i18nRootKey: 'validations', // the nested key under which the validation messages will be located
    inject: true,
    locale: 'ru',
    validity: false
};

Validator.extend('phone', {
    getMessage: (field) => {
        return  'Поле ' + field + ' Должно быть корректным номером телефона';
    },
    validate: (value) =>  !! value.replace(/[()\s-]/g, '').match( /^((((\+79[\d]{9})|(8[\d]{10}))|(\+77[\d]{9}))|(\+[1-689][\d]{9,15}))$/ig )
}); //|(?:\+[^0-689][0-9]{5,15}))

Validator.localize('ru', ru);  // здесь происходит изменение локали
//Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(VeeValidate, config);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
