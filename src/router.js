import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

// Components
import Home from './views/Home.vue';
import Group from './views/Group.vue';
import Login from './views/Login';
import CreateGroup from './views/CreateGroup';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/group/:group_code',
      name: 'group',
      component: Group,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create-group',
      name: 'createGroup',
      component: CreateGroup,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
