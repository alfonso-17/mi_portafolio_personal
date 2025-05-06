import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact size={40} />, level: 5, color: 'text-blue-400', barColor: 'bg-blue-400' },
  { name: 'JavaScript', icon: <FaJs size={40} />, level: 10, color: 'text-yellow-400', barColor: 'bg-yellow-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, level: 40, color: 'text-cyan-400', barColor: 'bg-cyan-400' },
  { name: 'HTML5', icon: <FaHtml5 size={40} />, level: 85, color: 'text-orange-500', barColor: 'bg-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} />, level: 70, color: 'text-blue-500', barColor: 'bg-blue-500' },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 10, color: 'text-green-500', barColor: 'bg-green-500' },
  { name: 'Git', icon: <FaGitAlt size={40} />, level: 30, color: 'text-red-500', barColor: 'bg-red-500' },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mis Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear aplicaciones web increíbles.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className={`mb-4 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-2.5 rounded-full ${skill.barColor}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
