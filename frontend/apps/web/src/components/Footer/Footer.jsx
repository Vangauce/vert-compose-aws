'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Sección de Redes Sociales */}
                    <div className="space-y-4">
                        <h5 className="text-white text-lg">Síguenos</h5>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://www.linkedin.com/school/universidad-aut%C3%B3noma-de-chile/"
                                aria-label="Linkedin"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-300 hover:text-blue-500"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/uautonomadechile/"
                                aria-label="Instagram"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-300 hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/uautonomadechile"
                                aria-label="Facebook"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-300 hover:text-blue-600"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </motion.a>
                        
                            <motion.a
                                href="https://www.youtube.com/channel/UCKH5TRayoUI4hxBAC8-hfbQ"
                                aria-label="Youtube"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-300 hover:text-red-500"
                            >
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </motion.a>
                            
                        </div>
                        <div>
                            <h5 className="text-white text-lg">Contáctanos</h5>
                            <ul className="space-y-2">
                                <li>
                                    <p>Comunícate con nosotros</p>
                                    <a href="/contacto" className="text-blue-400 hover:underline">Ir al formulario</a>
                                </li>
                                <li>
                                    <p>Contribuir al proyecto</p>
                                    <a href="/contribuir" className="text-blue-400 hover:underline">Ingresa aquí</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Columnas adicionales */}
                    <div className="space-y-4">
                        <h5 className="text-white text-lg">Localidades</h5>
                        <ul className="space-y-2">
                            <li><a href="https://www.uautonoma.cl/sedes/providencia-santiago/" className="hover:underline">Providencia, Santiago</a></li>
                            <li><a href="https://www.uautonoma.cl/sedes/el-llano-santiago/" className="hover:underline">El Llano Subercaseaux, Santiago</a></li>
                            <li><a href="https://www.uautonoma.cl/sedes/talca/" className="hover:underline">Talca</a></li>
                            <li><a href="https://www.uautonoma.cl/sedes/temuco/" className="hover:underline">Temuco</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-white text-lg">Universidad</h5>
                        <ul className="space-y-2">
                            <li><a href="https://www.uautonoma.cl/vinculacion-con-el-medio/" className="hover:underline">Vinculación con el Medio</a></li>
                            <li><a href="https://www.uautonoma.cl/facultades/" className="hover:underline">Facultades</a></li>
                            <li><a href="https://postgrados.uautonoma.cl/" className="hover:underline">Postgrados</a></li>
                            <li><a href="https://www.uautonoma.cl/comunicaciones/" className="hover:underline">Comunicaciones</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-white text-lg">Comunicaciones</h5>
                        <ul className="space-y-2">
                            <li><a href="https://www.uautonoma.cl/noticias/" className="hover:underline">Noticias</a></li>
                            <li><a href="https://www.uautonoma.cl/eventos/" className="hover:underline">Eventos</a></li>
                            <li><a href="https://www.uautonoma.cl/redes-sociales/" className="hover:underline">Redes sociales</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-white text-lg">Información y Servicios</h5>
                        <ul className="space-y-2">
                            <li><a href="https://www.uautonoma.cl/content/uploads/2023/12/Calendario-2024.pdf" target="_blank" className="hover:underline">Calendario</a></li>
                            <li><a href="https://www.uautonoma.cl/investigacion/" className="hover:underline">Institutos de Investigación</a></li>
                            <li><a href="https://www.uautonoma.cl/reglamentos/" className="hover:underline">Reglamentos y Políticas</a></li>
                            <li><a href="https://www.uautonoma.cl/terminos-legales/" className="hover:underline">Términos Legales</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400">
                    <p>©2024 | <a href="https://www.uautonoma.cl/" className="text-gray-400 hover:underline">Universidad Autónoma de Chile</a></p>
                </div>
            </div>
        </footer>
    );
}
