'use client'

import { MapPin, Clock, Phone } from "lucide-react";
import "./styles/Location.css";

export default function Location() {
    const googleMapsUrl =
        "https://www.google.com/maps/place/21%C2%B010'31.7%22N+86%C2%B053'39.9%22W/@21.1753806,-86.8956203,17.75z/data=!4m4!3m3!8m2!3d21.175478!4d-86.8944244?hl=es&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D";

    return (
        <section className="location">
            <div className="location__container">
                <div className="location__header">
                    <p className="location__subtitle">Visítanos</p>
                    <h2 className="location__title">Nuestra Almacen</h2>
                    <p className="location__description">
                        Te invitamos a conocer nuestra colección en persona. Experimenta la
                        calidad de nuestras telas y recibe asesoramiento personalizado de
                        nuestro equipo de estilistas.
                    </p>
                </div>

                <div className="location__content">
                    <div className="location__info">
                        <div className="location__info-item">
                            <div className="location__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
                            </div>
                            <div className="location__info-content">
                                <h3>Dirección</h3>
                                <p>
                                    Centro, Cancún, Quintana Roo
                                    <br />
                                    México
                                </p>
                            </div>
                        </div>

                        <div className="location__info-item">
                            <div className="location__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                            </div>
                            <div className="location__info-content">
                                <h3>Horarios</h3>
                                <p>
                                    Lunes a Sábado: 9:00 AM - 8:00 PM
                                    <br />
                                    Domingo: 11:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>

                        <div className="location__info-item">
                            <div className="location__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
                            </div>
                            <div className="location__info-content">
                                <h3>Contacto</h3>
                                <p>
                                    +52 (917) 113 3664
                                    <br />
                                    eleganzaoficial@eleganza.com
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => window.open(googleMapsUrl, "_blank")}
                            className="location__map-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
                            Ver en Google Maps
                        </button>
                    </div>

                    <div className="location__map-container">
                        <div className="location__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5897685999346!2d-86.8966090!3d21.1754780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b0c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s21%C2%B010'31.7%22N%2086%C2%B053'39.9%22W!5e0!3m2!1ses!2smx!4v1640995200000!5m2!1ses!2smx"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="location__decorative-1"></div>
                        <div className="location__decorative-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
