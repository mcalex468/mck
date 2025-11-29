<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const camada = ref(null)
const loaded = ref(false)
const error = ref(null)

const norm = s => String(s ?? '').trim().toLowerCase()

async function loadDetail() {
    try {
        const url = `/data/camadas.json${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`
        const res = await fetch(url, { cache: 'no-cache' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const all = await res.json()
        const slug = norm(decodeURIComponent(route.params.slug))

        camada.value = all.find(c => norm(c.slug) === slug) || null
    } catch (e) {
        error.value = e
        camada.value = null
    } finally {
        loaded.value = true
    }
}

onMounted(() => {
    loadDetail()
    window.scrollTo({ top: 0, left: 0 })
})
</script>

<template>
    <div class="galeria-completa-view">
        <section class="section">
            <div class="container">

                <div v-if="error" class="card">
                    <h2 class="title-md">Error al cargar</h2>
                </div>

                <div v-else-if="!loaded" class="card">
                    <p>Cargando…</p>
                </div>

                <div v-else-if="!camada" class="card">
                    <h2 class="title-md">Camada no encontrada</h2>
                    <router-link to="/camadas" class="btn btn-primary">Volver</router-link>
                </div>

                <div v-else>
                    <div class="detail-header">
                        <h1 class="title-xl">Galería completa · {{ camada.name }}</h1>
                        <router-link :to="`/camadas/${camada.slug}`" class="btn btn-ghost">← Volver</router-link>
                    </div>

                    <div class="grid">
                        <div v-for="(p, i) in camada.generalphotos" :key="i" class="card">
                            <img :src="p" :alt="`Foto ${i + 1}`" class="card-img" loading="lazy" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style scoped>
.detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}
</style>
