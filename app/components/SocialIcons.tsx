import { motion } from 'framer-motion';
import { FaFileAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Socials = [
  {
    name: 'GitHub',
    Icon: FaGithub,
    href: 'https://github.com/eamansour',
  },
  {
    name: 'LinkedIn',
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/eamonn-mansour',
  },
  {
    name: 'CV',
    Icon: FaFileAlt,
    href: '/pdf/EamonnMansourCV.pdf',
  },
];

const iconVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const SocialIcons = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={iconVariants}
    className="flex space-x-4 mt-5 text-2xl md:text-3xl "
  >
    {Socials.map(({ name, Icon, href }) => (
      <motion.a
        variants={iconVariants}
        target="_blank"
        key={href}
        href={href}
        className="hover:text-blue transition-colors tooltip flex justify-center"
      >
        <span className="p-0.5 translate-y-full absolute opacity-0 transition-opacity text-lg font-medium">
          {name}
        </span>
        <Icon />
      </motion.a>
    ))}
  </motion.div>
);

export default SocialIcons;
