<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 🔧 Mapea aquí las galerías por id
const GALLERIES = {
    alpha: [
        '/fotos/alpha1.png',
        '/fotos/alpha2.png',
        '/fotos/alpha.png',
        '/fotos/alpha4.png',
        '/fotos/alpha5.png',
        '/fotos/alpha6.png',
        '/fotos/alpha7.png',
        '/fotos/alphaAlaska.png',
        '/fotos/alphaAlaska1.png',
        '/fotos/alphaAlaska2.png',
        '/fotos/alphaAlaska3.png',
        '/fotos/alphaAlaska4.png'
    ],
    alaska: [
        '/fotos/alaska1.png',
        '/fotos/alaska2.png',
        '/fotos/alaska3.png',
        '/fotos/alaska4.png',
        '/fotos/alphaAlaska.png',
        '/fotos/alphaAlaska1.png',
        '/fotos/alphaAlaska2.png',
        '/fotos/alphaAlaska3.png',
        '/fotos/alphaAlaska4.png'
    ]
}

const id = computed(() => route.params.id?.toString() || '')
const images = computed(() => GALLERIES[id.value] || [])
const title = computed(() =>
    id.value === 'alpha'
        ? 'Galería de Alpha'
        : id.value === 'alaska'
            ? 'Galería de Alaska'
            : 'Galería'
)

// 👉 función reutilizable para subir arriba del todo
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // si quieres animación pon 'smooth'
    })
}

onMounted(() => {
    // si no existe la galería, redirige por ejemplo al inicio o a /gatitos
    if (!images.value.length) {
        router.replace('/gatitos').catch(() => { })
        return
    }

    scrollToTop()
})

// si por lo que sea cambia la ruta mientras estás en GaleriaView,
// vuelve a hacer scroll arriba (por id distinto, etc.)
watch(
    () => route.fullPath,
    () => {
        scrollToTop()
    }
)
</script>

<template>
    <div class="galeria-view">
        <section class="section">
            <div class="container">
                <div class="header-row">
                    <h1 class="title-xl">{{ title }}</h1>
                    <router-link class="btn btn-light" to="/gatitos">← Volver</router-link>
                </div>

                <div class="gallery-grid">
                    <img v-for="(src, i) in images" :key="i" :src="src" alt="Foto" loading="lazy" class="gallery-img" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
}

.gallery-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 16px;
    background: #111;
    display: block;
    transition: transform 180ms ease, filter 180ms ease;
}

.gallery-img:hover {
    transform: translateY(-2px);
    filter: brightness(1.03);
}

@media (min-width: 768px) {
    .gallery-img {
        height: 260px;
    }
}
</style>
