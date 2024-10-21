import { motion } from 'framer-motion';

interface DownloadCVButtonProps {
  label?: string;
  className?: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  label = 'Descargar CV',
  className = '',
}) => {
  const downloadPath = "About/CV Jesus Eduardo Alvarez Alvarez.pdf"; // Centralized CV download path

  return (
    <motion.a
      href={downloadPath}
      className={`bg-neonRed text-black px-8 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 ${className}`}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      download // Ensure the browser treats it as a downloadable file
    >
      {label}
    </motion.a>
  );
};

export default DownloadCVButton;
