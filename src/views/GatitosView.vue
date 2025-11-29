<template>
    <div class="gatitos-view">
        <section class="section">
            <div class="container">
                <h1 class="title-xl">Nuestros Gatitos</h1>
                <p class="subtitle">Conoce a los progenitores que forman el corazón de nuestro criadero</p>

                <!-- Macho -->
                <div class="split">
                    <div class="content-block">
                        <h2 class="title-md">Alpha — Macho Reproductor</h2>
                        <ul>
                            <li><strong>Edad:</strong> 1 año 9 meses</li>
                            <li><strong>Color:</strong> Black Silver Classic Tabby </li>
                            <li><strong>Carácter:</strong> Tranquilo, protector y extremadamente sociable</li>
                            <li><strong>Procedencia:</strong> Línea europea con pedigree completo</li>
                        </ul>
                        <p>
                            Alpha es el líder del grupo, un gato con una presencia impresionante y un carácter noble.
                            Es el ejemplo perfecto del Maine Coon clásico: robusto, cariñoso y muy atento con las crías.
                        </p>
                    </div>

                    <!-- Imagen Alpha -> navega a galería -->
                    <router-link class="image-block clickable" to="/galeria/alpha">
                        <img src="/fotos/alpha3.png" alt="Macho Maine Coon Alpha" loading="lazy" />
                        <span class="overlay-chip">Ver más</span>
                    </router-link>
                </div>

                <!-- Hembra -->
                <div class="split split-reverse">
                    <!-- Imagen Alaska -> navega a galería -->
                    <router-link class="image-block clickable" to="/galeria/alaska">
                        <img src="/fotos/alaska.png" alt="Hembra Maine Coon Alaska" loading="lazy" />
                        <span class="overlay-chip">Ver más</span>
                    </router-link>

                    <div class="content-block">
                        <h2 class="title-md">Alaska — Hembra Reproductora</h2>
                        <ul>
                            <li><strong>Edad:</strong> 1 año 12 meses </li>
                            <li><strong>Color:</strong> Black Tortie Smoke </li>
                            <li><strong>Carácter:</strong> Dulce, activa y muy protectora con sus crías</li>
                            <li><strong>Procedencia:</strong> Criadero nacional certificado</li>
                        </ul>
                        <p>
                            Alaska es la ternura hecha gato. Tiene una expresión muy característica, orejas prominentes
                            y un pelaje sedoso. Su instinto maternal y su serenidad hacen que sus camadas sean
                            equilibradas y muy sociales desde el primer día.
                        </p>
                    </div>
                </div>

                <!-- Texto de cierre -->
                <div class="card card--wide">
                    <h2 class="title-md">Nuestro compromiso</h2>
                    <p>
                        Ambos progenitores están testados genéticamente y cuentan con seguimiento veterinario continuo.
                        Buscamos mantener la autenticidad de la raza y ofrecer gatitos que hereden el equilibrio entre
                        belleza, salud y carácter.
                    </p>
                    <div class="inline-cta">
                        <router-link to="/camadas" class="btn btn-primary">Ver camadas actuales</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.image-block {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
}

.image-block img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
}

.image-block.clickable {
    cursor: pointer;
}

.image-block.clickable:hover img {
    filter: brightness(0.92);
    transform: scale(1.01);
    transition: transform 200ms ease, filter 200ms ease;
}

.overlay-chip {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
}
</style>
