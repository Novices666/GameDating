// 1. 定义路由组件.
// 也可以从其他文件导入
//const Home = { template: '<div>Home</div>' }


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
import IndexPage from "../pages/IndexPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import PersonPage from "../pages/PersonPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";

export const routes = [
    { path: '/', component: IndexPage },
    { path: '/team', component: TeamPage },
    { path: '/person', component:PersonPage },
    { path: '/search', component: SearchPage},
    { path: '/user/edit', component: UserEditPage}
]
