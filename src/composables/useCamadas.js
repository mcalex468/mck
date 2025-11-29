import { ref } from 'vue'

const camadas = ref(null)
const loaded = ref(false)
const error = ref(null)

async function loadCamadas() {
  if (loaded.value) return
  try {
    const res = await fetch('/data/camadas.json', { cache: 'no-cache' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    camadas.value = await res.json()
    loaded.value = true
  } catch (e) {
    error.value = e
    camadas.value = []
  }
}

function getAll() {
  return camadas.value || []
}

function getBySlug(slug) {
  return (camadas.value || []).find(c => c.slug === slug)
}

export function useCamadas() {
  return { camadas, loaded, error, loadCamadas, getAll, getBySlug }
}
