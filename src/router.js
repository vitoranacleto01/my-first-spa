import { createRouter, createWebHistory } from "vue-router";
import CirculoComponent from "./components/CirculoComponent.vue";
import LoopComponent from "./components/LoopComponent.vue";
import TrapezioComponent from "./components/TrapezioComponent.vue";
import EquilateroComponent from "./components/EquilateroComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SobreNosComponent from "./components/SobreNosComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ContatoComponent from "./components/ContatoComponent.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/sobreNos',
        name: 'Sobre-Nós',
        component: SobreNosComponent
    },
    {
        path: '/loop',
        name: 'Loop',
        component: LoopComponent
    },
    {
        path: '/trapezio',
        name: 'Trapezio',
        component: TrapezioComponent
    },
    {
        path: '/circulo',
        name: 'Circulo',
        component: CirculoComponent
    },
    {
        path: '/equilatero',
        name: 'Equilatero',
        component: EquilateroComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/contato',
        name: 'Contato',
        component: ContatoComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
