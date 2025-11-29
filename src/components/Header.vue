<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
    menuOpen.value = false
}
</script>

<template>
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <router-link to="/" class="logo" @click="closeMenu">
                    Maine Coon Kingdom
                </router-link>

                <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="nav" :class="{ 'nav-open': menuOpen }">
                    <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
                    <router-link to="/nucleo" class="nav-link" @click="closeMenu">Núcleo</router-link>
                    <router-link to="/gatitos" class="nav-link" @click="closeMenu">Progenitores</router-link>
                    <router-link to="/camadas" class="nav-link" @click="closeMenu">Camadas</router-link>
                    <router-link to="/contacto" class="nav-link" @click="closeMenu">Contacto</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>