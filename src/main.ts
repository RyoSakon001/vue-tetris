import { createApp } from 'vue'
import App from './App.vue'

// VueRouterの利用に必要
import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

// vueファイルを読み込む
import TopPage from "./pages/TopPage.vue"; // A
import PlayPage from "./pages/PlayPage.vue"; // B

// ルーティング情報
const routes: Array<RouteRecordRaw> = [
    {
         // /TopPageにリクエストが来たらTopPageコンポーネントを返す
        path: "/",
        name: "TopPage",
        component: TopPage, // A
    },
    {
        path: "/play",
        name: "PlayPage",
        component: PlayPage, // B
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

createApp(App).use(router).mount('#app')
