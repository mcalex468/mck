<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const loaded = ref(false)
const error = ref(null)
const camada = ref(null)

const norm = s => String(s ?? '').trim().toLowerCase()

async function loadDetail() {
    try {
        const url = `/data/camadas.json${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`
        const res = await fetch(url, { cache: 'no-cache' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const all = await res.json()
        const slugWanted = norm(decodeURIComponent(route.params.slug))
        camada.value = all.find(c => norm(c.slug) === slugWanted) || null
    } catch (e) {
        error.value = e
        camada.value = null
    } finally {
        loaded.value = true
    }
}

onMounted(loadDetail)
watch(() => route.params.slug, loadDetail)

function goBack() {
    router.push('/camadas')
}
</script>

<template>
    <div class="camada-detail-view">
        <section class="section">
            <div class="container">
                <!-- Estado de carga / error -->
                <div v-if="error" class="card">
                    <h2 class="title-md">Error al cargar</h2>
                    <button class="btn btn-primary" @click="goBack">Volver a camadas</button>
                </div>

                <div v-else-if="!loaded" class="card">
                    <p>Cargando galería…</p>
                </div>

                <div v-else-if="!camada" class="card">
                    <h2 class="title-md">Camada no encontrada</h2>
                    <router-link to="/camadas" class="btn btn-primary">Ver todas las camadas</router-link>
                </div>

                <!-- Contenido principal -->
                <div v-else>
                    <div class="detail-header">
                        <h1 class="title-xl">{{ camada.name }}</h1>
                        <router-link to="/camadas" class="btn btn-ghost">← Volver</router-link>
                    </div>

                    <div class="media-block" style="margin-bottom: 2rem;">
                        <img :src="camada.cover || '/logo.png'" :alt="camada.name" class="media-block__img"
                            loading="lazy" />
                    </div>

                    <h2 class="title-md">Galería</h2>
                    <div class="grid">
                        <div v-if="camada.kittens && camada.kittens.length" v-for="(k, i) in camada.kittens"
                            :key="`k-${i}`" class="card">
                            <img :src="k.photo || '/logo.png'" :alt="k.name" class="card-img" loading="lazy" />
                            <div class="card-content">
                                <h3 class="title-sm">{{ k.name }}</h3>
                                <p class="muted">{{ k.color }} • {{ k.sex }} • {{ k.status }}</p>
                            </div>
                        </div>

                        <div v-else v-for="(p, i) in (camada.photos || [])" :key="`p-${i}`" class="card">
                            <img :src="p || '/logo.png'" :alt="`Gatito ${i + 1}`" class="card-img" loading="lazy" />
                            <div class="card-content">
                                <h3 class="title-sm">Gatito {{ i + 1 }}</h3>
                            </div>
                        </div>
                    </div>

                    <div class="inline-cta" style="margin-top: 2rem;">
                        <router-link :to="`/camadas/${camada.slug}/galeria-completa`" class="btn btn-primary">
                            Ver galería completa →
                        </router-link>
                    </div>



                    <div class="inline-cta" style="margin-top: 2rem;">
                        <button class="btn btn-ghost" @click="goBack">← Volver a camadas</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
/* Ajuste solo para las fotos de la galería de la camada */
.camada-detail-view .card-img {
    width: 100%;
    height: auto;
    /* que respete la proporción original */
    max-height: 400px;
    /* límite razonable para que no se dispare */
    object-fit: contain;
    /* muestra la imagen completa sin recortar */
    border-radius: 16px;
}
</style>
