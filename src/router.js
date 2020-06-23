import VueRouter from "vue-router";
import i18n from './i18n';

import Home from './views/Home';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: `${i18n.locale}` },
        {
            path: '/:lang',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                { path: "/", component: Home, name: "Home" },
            ]
        }
    ]
});