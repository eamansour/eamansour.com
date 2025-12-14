'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Socials } from '@/components/SocialIcons';

const Footer = () => {
  return (
    <footer className="text-white bg-black py-36 flex flex-col items-center space-y-4">
      <Link href="/#intro">
        <div className="flex justify-center hover:text-blue hover:transition-colors hover:cursor-pointer">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{ delay: 0.2 }}
            className="absolute font-semibold"
          >
            Back to Intro
          </motion.p>
          <Image
            src="/images/EM.svg"
            height={72}
            width={72}
            alt="Eamonn Mansour's Logo"
          />
        </div>
      </Link>
      <div className="font-bold text-lg space-x-10">
        {Socials.map(({ name, href }) => (
          <a
            key={href}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="hover:text-blue-gradient hover:transition-colors"
          >
            {name}
          </a>
        ))}
      </div>
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Eamonn Mansour |{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue hover:text-blurple-100 transition-colors font-bold"
          href="https://github.com/eamansour/eamansour.com"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
