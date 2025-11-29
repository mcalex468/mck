<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="home-view">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1 class="title-xl">Bienvenidos a nuestro criadero Maine Coon</h1>
                <p class="subtitle">
                    Criamos Maine Coon con un enfoque responsable, transparente y familiar.
                    Seleccionamos cuidadosamente líneas sanas y equilibradas, priorizando el bienestar,
                    el carácter y la socialización desde sus primeras semanas. Nuestro objetivo es que cada familia
                    encuentre un compañero noble, cariñoso y estable.
                </p>
            </div>
        </section>

        <!-- Info Section -->
        <section class="section">
            <div class="container">
                <div class="grid">
                    <div class="card">
                        <h3 class="title-md">Tamaño impresionante</h3>
                        <p>
                            El Maine Coon es una de las razas más grandes de gatos domésticos. Los machos pueden llegar
                            a
                            pesar entre 6 y 11 kg, mientras que las hembras pesan entre 4 y 8 kg. Su cuerpo robusto y
                            musculoso los hace verdaderamente majestuosos.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="title-md">Carácter amable</h3>
                        <p>
                            Son conocidos como “gigantes gentiles”. Tienen un temperamento dulce, cariñoso y sociable.
                            Les encanta estar con su familia, son muy juguetones y se llevan bien con niños y otras
                            mascotas. Perfectos compañeros de vida.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="title-md">Cuidados esenciales</h3>
                        <p>
                            Su pelaje semilargo requiere cepillado regular (2–3 veces por semana) para evitar nudos.
                            Necesitan espacio para jugar y explorar, una alimentación de calidad y revisiones
                            veterinarias periódicas para mantenerlos sanos y felices.
                        </p>
                    </div>
                </div>

                <!-- Imagen después de las 3 cards -->
                <div class="media-block">
                    <img src="../../public/fotos/alphaAlaska4.png" alt="Maine Coon adulto en un entorno hogareño"
                        class="media-block__img" loading="lazy" />
                    <!-- Si prefieres, puedes añadir un pequeño caption -->
                    <!-- <p class="media-block__caption">Nuestro estándar: salud, carácter y belleza.</p> -->
                </div>

                <!-- Card a ancho completo (ocupa lo que las 3 juntas) -->
                <div class="card card--wide">
                    <h3 class="title-md">Cría responsable y acompañamiento continuo</h3>
                    <p>
                        Trabajamos con protocolos de socialización temprana, controles veterinarios al día y
                        documentación completa. Acompañamos a cada familia antes y después de la adopción con guía de
                        alimentación, higiene, enriquecimiento ambiental y recomendaciones personalizadas. Queremos
                        que la llegada del nuevo miembro sea una experiencia serena y feliz.
                    </p>
                    <div class="inline-cta">
                        <router-link to="/nucleo" class="btn btn-primary">Conoce nuestra filosofía</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
