import { motion } from 'motion/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
    className="social-links"
    aria-label="Social profiles"
  >
    {Socials.map(({ name, Icon, href }) => (
      <motion.a
        variants={iconVariants}
        target="_blank"
        rel="noopener noreferrer"
        key={href}
        href={href}
        aria-label={`Visit Eamonn's ${name} profile (opens in a new tab)`}
        className="social-link"
      >
        <Icon aria-hidden="true" />
        <span>{name}</span>
      </motion.a>
    ))}
  </motion.div>
);

export default SocialIcons;
