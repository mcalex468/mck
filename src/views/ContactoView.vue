<script setup>
import { ref, onMounted } from 'vue'

const WA_PHONE = '34692726842' // Número real

// 🔝 Al entrar en la vista, subimos al principio de la página
onMounted(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // pon 'smooth' si la quieres animada
    })
})

const form = ref({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
})

const handleSubmit = () => {
    const { nombre, email, telefono, mensaje } = form.value

    let textoWhatsApp = `Hola, mi nombre es ${nombre}.\n\n`

    if (telefono) textoWhatsApp += `Teléfono: ${telefono}\n`
    if (email) textoWhatsApp += `Email: ${email}\n`

    textoWhatsApp += `\nMensaje:\n${mensaje}`

    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(textoWhatsApp)}`
    window.open(waUrl, '_blank')

    form.value = { nombre: '', email: '', telefono: '', mensaje: '' }
}
</script>


<template>
    <div class="contacto-view">
        <section class="section">
            <div class="container">
                <h1 class="title-xl">Contacto</h1>
                <p class="subtitle">
                    ¿Tienes alguna pregunta? Estaremos encantados de ayudarte y responder lo antes posible.
                </p>

                <div class="split">
                    <!-- Formulario -->
                    <div class="form-container">
                        <form @submit.prevent="handleSubmit" class="form">
                            <div class="form-row">
                                <label for="nombre">Nombre *</label>
                                <input type="text" id="nombre" v-model="form.nombre" class="input" required
                                    placeholder="Tu nombre" />
                            </div>

                            <div class="form-row">
                                <label for="telefono">Teléfono (WhatsApp) *</label>
                                <input type="tel" id="telefono" v-model="form.telefono" class="input" required
                                    placeholder="Ej. 692726842" />
                            </div>

                            <div class="form-row">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="form.email" class="input"
                                    placeholder="tu@email.com" />
                            </div>

                            <div class="form-row">
                                <label for="mensaje">Mensaje *</label>
                                <textarea id="mensaje" v-model="form.mensaje" class="textarea" rows="6" required
                                    placeholder="Cuéntanos qué necesitas..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary btn-full">
                                Enviar por WhatsApp
                            </button>
                        </form>
                    </div>

                    <!-- Información de contacto -->
                    <div class="contact-info">
                        <div class="card">
                            <h3 class="title-md">Dónde estamos</h3>
                            <p>Montornés del Vallés, Barcelona, España</p>
                        </div>

                        <div class="card">
                            <h3 class="title-md">Redes sociales</h3>
                            <div class="social-links-vertical">
                                <a href="https://instagram.com/mainecoonkingdom1" target="_blank" rel="noopener"
                                    class="social-link">
                                    Instagram: @mainecoonkingdom1
                                </a>
                                <a href="https://www.tiktok.com/@mainecoonkingdombcn" target="_blank" rel="noopener"
                                    class="social-link">
                                    TikTok: @mainecoonkingdombcn
                                </a>
                                <a href="mailto:mainecoonkingdom1@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n..."
                                    aria-label="Enviar email" class="social-link">
                                    Email: mainecoonkingdom1@gmail.com
                                </a>
                            </div>
                        </div>

                        <div class="card">
                            <h3 class="title-md">Disponibilidad</h3>
                            <p>Respondemos normalmente en menos de 24 horas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
