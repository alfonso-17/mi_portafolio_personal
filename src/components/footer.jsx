import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/alfonso-17',"alfonso-17": 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/tu-usuario', name: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/tu-usuario', name: 'Twitter' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:jaagxd532@email.com', "jaagxd532@gmail.com": 'Email' },
    { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/+573232336247', "Alfonso Avila": 'WhatsApp' }
  ];

  return (
    <footer id="footer" className="bg-gray-7q00 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Alfonso Avila
            </h3>
            <p className="text-gray-400 max-w-md">
              Desarrollador Frontend apasionado por crear experiencias web excepcionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href="mailto:jaagxd532@email.com" className="hover:text-blue-400 transition-colors">
                  Alfonso Avila
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-blue-400" />
                <a href="https://wa.me/+573232336247" className="hover:text-blue-400 transition-colors">
                  Alfonso Avila
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#inicio"
        className="fixed bottom-8 right-8 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;