import Vue from 'vue';
import users from '@/common/mock/users';
import boards from '@/common/mock/boards';

Vue.prototype.$users = users;
Vue.prototype.$boards = boards;
