'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Lightbulb } from 'lucide-react'

export default function ConclusionVertientes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-blue-800 mb-8 text-center"
            variants={itemVariants}
          >
            Conclusión y Visión a Futuro
          </motion.h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-700">
                <Users className="mr-2" />
                Invitación a Participar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p className="text-gray-700 mb-4" variants={itemVariants}>
                Este proyecto continúa en expansión y evolución. Invitamos a otras comunidades, organizaciones, instituciones educativas y entes gubernamentales a sumarse a esta causa. Juntos podemos seguir desarrollando soluciones innovadoras para la gestión eficiente del agua y asegurar que más personas tengan acceso a recursos hídricos de calidad.
              </motion.p>
              <motion.p className="text-gray-700 mb-4" variants={itemVariants}>
                Para más información sobre cómo involucrarte o colaborar con el proyecto, no dudes en contactarnos. Tu participación puede marcar la diferencia en la conservación y sostenibilidad de las fuentes de agua para las futuras generaciones.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-700">
                <Lightbulb className="mr-2" />
                Visión a Futuro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p className="text-gray-700 mb-4" variants={itemVariants}>
                El proyecto tiene como objetivo continuar creciendo, ampliando su cobertura a más comunidades rurales, desarrollando nuevas tecnologías y adaptando el sistema para enfrentar los desafíos futuros. Estamos comprometidos con la búsqueda constante de soluciones sostenibles que fortalezcan la resiliencia de las comunidades frente al cambio climático y la escasez de agua.
              </motion.p>
              <motion.ul className="list-disc list-inside text-gray-700 space-y-2" variants={itemVariants}>
                <li>Expansión a más comunidades rurales</li>
                <li>Desarrollo de nuevas tecnologías</li>
                <li>Adaptación del sistema a desafíos futuros</li>
                <li>Fortalecimiento de la resiliencia comunitaria</li>
              </motion.ul>
            </CardContent>
          </Card>

          <motion.p 
            className="text-center text-gray-600 mt-8 italic"
            variants={itemVariants}
          >
            Con esta conclusión se refuerzan los valores y el impacto del proyecto, y al mismo tiempo se abre la puerta a futuras colaboraciones y a la expansión de la iniciativa.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}