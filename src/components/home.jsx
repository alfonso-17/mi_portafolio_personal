import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiChevronDoubleDown } from 'react-icons/hi';

const Home = () => {
  const skills = ['React', 'JavaScript', 'Tailwind', 'Node.js', 'HTML/CSS'];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-800 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
              <img
                src="./public/logo.avif" // Reemplaza con tu imagen
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gray-800 rounded-full p-3 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/3 md:pl-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hola, soy <span className="text-white">Jose Alfonso Avila</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300">
            Desarrollador Frontend
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
            Apasionado por crear experiencias digitales hermosas y funcionales. 
            Especializado en desarrollo web moderno con React y diseño responsive.
          </p>

          {/* Skills Tags */}
          <motion.div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#proyectos"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#footer"
              className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-900/30 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contacto
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <motion.a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#habilidades" className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-400">Desplázate</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <HiChevronDoubleDown size={24} className="text-blue-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;