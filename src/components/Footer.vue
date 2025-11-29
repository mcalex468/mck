<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<template>
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Maine Coon Kingdom</h3>
                    <p class="text-muted">Criadores responsables de Maine Coon con amor y dedicación.</p>
                </div>

                <div class="footer-section">
                    <h4>Enlaces</h4>
                    <nav class="footer-nav">
                        <router-link to="/">Inicio</router-link>
                        <router-link to="/nucleo">Núcleo</router-link>
                        <router-link to="/camadas">Camadas</router-link>
                        <router-link to="/contacto">Contacto</router-link>
                        <router-link to="/legal/privacidad">Privacidad</router-link>
                        <router-link to="/legal/cookies">Cookies</router-link>
                        <router-link to="/legal/aviso-legal">Aviso legal</router-link>
                    </nav>
                </div>

                <div class="footer-section">
                    <h4>Redes sociales</h4>
                    <div class="social-links">
                        <a href="https://instagram.com/mainecoonkingdom1" target="_blank" rel="noopener noreferrer"
                            aria-label="Instagram">
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/@mainecoonkingdombcn" target="_blank" rel="noopener noreferrer"
                            aria-label="TikTok">
                            TikTok
                        </a>
                        <a href="mailto:mainecoonkingdom1@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n..."
                            aria-label="Enviar email">
                            Email
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; {{ year }} Maine Coon Kingdom. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>
