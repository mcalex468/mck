import { createRouter, createWebHistory } from 'vue-router'

// Vistas principales
import HomeView from '../views/HomeView.vue'
import NucleoView from '../views/NucleoView.vue'
import CamadasView from '../views/CamadasView.vue'
import CamadaDetailView from '../views/CamadaDetailView.vue'
import ContactoView from '../views/ContactoView.vue'
import GatitosView from '../views/GatitosView.vue'
import GaleriaCompletaView from '../views/GaleriaCompletaView.vue' // 👈 TE FALTABA ESTA

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/nucleo', name: 'nucleo', component: NucleoView },
    { path: '/camadas', name: 'camadas', component: CamadasView },
    { path: '/camadas/:slug', name: 'camada-detail', component: CamadaDetailView },
    { path: '/camadas/:slug/galeria-completa', name: 'galeria-completa', component: GaleriaCompletaView }, // 👈 aquí

    { path: '/contacto', name: 'contacto', component: ContactoView },
    { path: '/gatitos', name: 'gatitos', component: GatitosView },

    { path: '/galeria/:id', name: 'galeria', component: () => import('../views/GaleriaView.vue') },
    { path: '/galeria/kitten/:camada/:kitten', name: 'galeria-kitten', component: () => import('../views/GaleriaView.vue') },

    { path: '/legal/privacidad', name: 'privacidad', component: () => import('../views/legal/PrivacidadView.vue') },
    { path: '/legal/cookies', name: 'cookies', component: () => import('../views/legal/CookiesView.vue') },
    { path: '/legal/aviso-legal', name: 'aviso-legal', component: () => import('../views/legal/AvisoLegalView.vue') },

    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 }
    }
})

export default router
