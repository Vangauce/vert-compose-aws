'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, BarChart2, Users } from 'lucide-react';

const HeroSectionAqua = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4">
            Monitoreo Remoto de Fuentes de Agua
          </h1>
          <p className="text-xl sm:text-2xl text-blue-700 font-semibold">
            Tecnología para la Gestión Sostenible del Agua
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Hero2_comunidad2.png"
                alt="Sistema de Monitoreo de Agua"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-full sm:w-auto"
              >
                <FeatureCard
                  icon={<Droplet className="w-8 h-8 text-blue-500" />}
                  title="Monitoreo en Tiempo Real"
                  description="Datos precisos sobre calidad y cantidad de agua"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-full sm:w-auto"
              >
                <FeatureCard
                  icon={<BarChart2 className="w-8 h-8 text-green-500" />}
                  title="Análisis Avanzado"
                  description="Visualización y predicción de tendencias"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-full sm:w-auto"
              >
                <FeatureCard
                  icon={<Users className="w-8 h-8 text-purple-500" />}
                  title="Empoderamiento Comunitario"
                  description="Gestión local de recursos hídricos"
                />
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Explorar el Proyecto
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 border border-blue-600"
              >
                Contactar al Equipo
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 mt-12 mb-12">
          <motion.h3
            className="text-2xl font-bold mb-6 text-blue-700"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            Descripción del Proyecto
          </motion.h3>
          <p className="text-lg text-gray-700">
            El proyecto AquaCircuit es una solución tecnológica que permite monitorear y analizar en tiempo real la calidad y cantidad de agua en comunidades rurales. A través de sensores y dispositivos IoT, se recopilan datos sobre el caudal, la turbidez y la temperatura del agua, los cuales son enviados a una plataforma web para su visualización y análisis. Este sistema de monitoreo remoto facilita la toma de decisiones informadas en la gestión de recursos hídricos, promoviendo prácticas sostenibles y el empoderamiento comunitario.
          </p>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4 w-full sm:w-auto">
    {icon}
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default HeroSectionAqua;