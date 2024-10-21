'use client'

import { motion } from 'framer-motion'
import { Droplet, BarChart2, Users, Sun, Lightbulb, Globe } from 'lucide-react'

export default function KeySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Características Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Sun className="text-neonRed w-6 h-6" />, title: "Sistema Autónomo", description: "Monitorea parámetros como pH, conductividad, temperatura y turbidez del agua en tiempo real." },
            { icon: <Lightbulb className="text-neonRed w-6 h-6" />, title: "Energía Sostenible", description: "Funciona con energía solar para asegurar una operación continua y amigable con el medio ambiente." },
            { icon: <Users className="text-neonRed w-6 h-6" />, title: "Accesibilidad Comunitaria", description: "Plataforma web intuitiva para que las comunidades rurales gestionen datos críticos." },
            { icon: <Globe className="text-neonRed w-6 h-6" />, title: "Tecnología de Bajo Costo", description: "Solución accesible para comunidades con recursos limitados." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-700">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Objetivos del Proyecto</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {[
            "Implementar un sistema autónomo de monitoreo de calidad del agua.",
            "Cuantificar la demanda real de agua en zonas rurales.",
            "Desarrollar una plataforma web para la visualización de datos."
          ].map((objective, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: '#ff0000' }}
            >
              {objective}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Tecnologías y Herramientas Usadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Python", "C++ (Arduino)", "Django", "MQTT", "PostgreSQL", "Arduino R4 WiFi", "GitHub", "Figma", "Jira"].map((tech, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 p-3 rounded-md text-center hover:bg-gray-200 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Impacto Social y Ambiental</h2>
        <p className="text-gray-600">
          Este proyecto mejora la gestión de los recursos hídricos en comunidades rurales, promoviendo prácticas sostenibles que optimizan el uso de fuentes de agua de bajo caudal.
        </p>
        <motion.button
          className="mt-4 bg-neonRed text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Más Información
        </motion.button>
      </motion.section>
    </motion.div>
  )
}