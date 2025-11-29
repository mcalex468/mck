<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const camadas = ref([])
const loaded = ref(false)
const error = ref(null)

// índice actual de cada camada (para rotar sus fotos)
const indices = ref({})

async function load() {
    try {
        const url = `/data/camadas.json${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`
        const res = await fetch(url, { cache: 'no-cache' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        camadas.value = data

        // inicializa todos los índices a 0
        data.forEach(c => (indices.value[c.slug] = 0))
    } catch (e) {
        error.value = e
    } finally {
        loaded.value = true
    }
}

let timer = null
onMounted(async () => {
    await load()
    // rotación cada 5s por camada
    timer = setInterval(() => {
        camadas.value.forEach(camada => {
            const total = Array.isArray(camada.photos) && camada.photos.length ? camada.photos.length : 1
            indices.value[camada.slug] = (indices.value[camada.slug] + 1) % total
        })
    }, 5000)
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>

<template>
    <div class="camadas-view">
        <section class="section">
            <div class="container">
                <h1 class="title-xl">Nuestras Camadas</h1>
                <p class="subtitle">Conoce a nuestros adorables gatitos Maine Coon</p>

                <div v-if="error" class="card">
                    <p>Hubo un error cargando las camadas.</p>
                </div>
                <div v-else-if="!loaded" class="card">
                    <p>Cargando…</p>
                </div>

                <div v-else class="grid">
                    <router-link v-for="camada in camadas" :key="camada.slug" :to="`/camadas/${camada.slug}`"
                        class="card card-link relative overflow-hidden">
                        <!-- Imagen rotatoria: photos[idx] -> fallback a cover -> fallback a /logo.png -->
                        <img :src="(camada.photos && camada.photos.length ? camada.photos[indices[camada.slug]] : (camada.cover || '/logo.png'))"
                            :alt="camada.name" class="card-img object-cover transition-opacity duration-700 ease-in-out"
                            loading="lazy" />

                        <div class="card-content">
                            <h3 class="title-md">{{ camada.name }}</h3>
                            <span class="badge">Ver galería →</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
