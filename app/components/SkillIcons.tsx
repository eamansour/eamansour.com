import { motion } from 'framer-motion';
import { Languages, Technologies } from '@/data/skills';

const iconVariants = (startY: number) => ({
  hover: {
    y: -10,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: startY,
  },
});

const SkillIcons = () => {
  return (
    <div className="pt-5 flex flex-col md:flex-row text-lg md:text-2xl font-bold whitespace-nowrap">
      <div className="flex flex-col items-center">
        <h2>Languages</h2>
        <ul className="p-3 grid grid-cols-2 xl:grid-cols-3 text-4xl xl:text-6xl">
          {Languages.map(({ name, Icon }) => (
            <motion.li
              key={name}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={iconVariants(-50)}
              className={`md:mx-14 p-5 flex flex-col items-center hover:text-orange-50 transition-colors`}
            >
              <Icon />
              <p className="p-2 text-sm md:text-lg font-medium">{name}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h2>Technologies</h2>
        <ul className="p-3 grid grid-cols-2 xl:grid-cols-3 text-4xl xl:text-6xl">
          {Technologies.map(({ name, Icon }) => (
            <motion.li
              key={name}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={iconVariants(50)}
              className="md:mx-14 p-5 flex flex-col items-center hover:text-orange-50 transition-colors"
            >
              <Icon />
              <p className="p-2 text-sm md:text-lg font-medium">{name}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillIcons;
