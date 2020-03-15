import Items from './pages/Items.vue';
import Profile from './pages/Profile.vue';

const routes = [
    { path: '/', component: Items, name:'Items' },
    { path: '/profile/:page', component: Profile },
];

export default routes;