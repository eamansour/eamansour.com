'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Socials } from '@/components/SocialIcons';

const Footer = () => {
  const scrollToIntro = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('intro')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <footer className="site-footer">
      <Link
        href="/#intro"
        onClick={scrollToIntro}
        className="footer-mark"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="footer-back-label"
        >
          Back to Intro
        </motion.p>
        <Image
          className="footer-logo"
          src="/images/EM.svg"
          height={72}
          width={72}
          alt="Eamonn Mansour's Logo"
        />
      </Link>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Eamonn Mansour |{' '}
        <a
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eamansour/eamansour.com"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
