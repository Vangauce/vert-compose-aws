'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/placeholder.svg?height=400&width=600', alt: 'Instalación de sensores' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Equipo de trabajo en terreno' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Mapa de ubicación de vertientes' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Interfaz de la plataforma web' },
]

const videos = [
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video explicativo del proyecto' },
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Tutorial de uso del sistema' },
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Demostración del sistema en terreno' },
]

const infographics = [
  { src: '/placeholder.svg?height=600&width=400', alt: 'Sistema de monitoreo' },
  { src: '/placeholder.svg?height=600&width=400', alt: 'Parámetros monitoreados' },
  { src: '/placeholder.svg?height=600&width=400', alt: 'Proceso de instalación' },
]

export default function MediaSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentInfographicIndex, setCurrentInfographicIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

  const nextVideo = () => setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  const prevVideo = () => setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)

  const nextInfographic = () => setCurrentInfographicIndex((prevIndex) => (prevIndex + 1) % infographics.length)
  const prevInfographic = () => setCurrentInfographicIndex((prevIndex) => (prevIndex - 1 + infographics.length) % infographics.length)

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-blue-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galería Multimedia
        </motion.h2>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="images">Imágenes</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="infographics">Infografías</TabsTrigger>
            <TabsTrigger value="interactive">Interactivos</TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      width={600}
                      height={400}
                      className="rounded-lg mx-auto"
                    />
                  </motion.div>
                  <Button variant="outline" className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={prevImage}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={nextImage}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center mt-4 text-gray-600">{images[currentImageIndex].alt}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <Card>
              <CardContent className="p-6">
                <div className="relative aspect-video">
                  <iframe
                    src={videos[currentVideoIndex].src}
                    title={videos[currentVideoIndex].title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" onClick={prevVideo}>
                    <ChevronLeft className="h-4 w-4 mr-2" /> Anterior
                  </Button>
                  <Button variant="outline" onClick={nextVideo}>
                    Siguiente <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <p className="text-center mt-4 text-gray-600">{videos[currentVideoIndex].title}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infographics">
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <motion.div
                    key={currentInfographicIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={infographics[currentInfographicIndex].src}
                      alt={infographics[currentInfographicIndex].alt}
                      width={400}
                      height={600}
                      className="rounded-lg mx-auto"
                    />
                  </motion.div>
                  <Button variant="outline" className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={prevInfographic}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={nextInfographic}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center mt-4 text-gray-600">{infographics[currentInfographicIndex].alt}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactive">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Gráficos Interactivos y Simulaciones 3D</h3>
                <p className="text-gray-600 mb-4">
                  Aquí se mostrarían gráficos interactivos de los parámetros del agua y un mapa interactivo de las vertientes monitoreadas.
                  También se incluiría una simulación 3D del sistema de monitoreo.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
                  Nota: Para implementar gráficos interactivos y simulaciones 3D, se recomienda utilizar bibliotecas como Chart.js para gráficos
                  y Three.js para modelos 3D. Estos componentes requieren una implementación más compleja y datos en tiempo real.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}