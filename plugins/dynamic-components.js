import Vue from 'vue';
import {TypeWriter, Logo, FieldInput} from 'matise-assets';

Vue.component('type-writer', TypeWriter);
Vue.component('logo', Logo);
Vue.component('field-input', FieldInput);
Vue.use(TypeWriter, Logo, FieldInput);