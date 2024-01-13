'use client';

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Card from '@/components/Card';
import SkillIcons from '@/components/SkillIcons';
import SocialIcons from '@/components/SocialIcons';
import { Certifications, Education, Experience } from '@/data/about';
import { Projects } from '@/data/projects';
import AboutItem from '@/components/AboutItem';

const getVariants = ({
  startY = 0,
  initialDelay = 0,
  initialDuration = 1,
}) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: initialDelay,
      duration: initialDuration,
    },
  },
  hidden: {
    opacity: 0,
    y: startY,
  },
});

const Index: NextPage = () => {
  const [tabId, setTabId] = useState('experience');
  const tabs = {
    experience: Experience,
    education: Education,
    certifications: Certifications,
  };
  const { scrollYProgress } = useScroll();
  const scrollDownRange = [0, 0.15];
  const opacity = useTransform(scrollYProgress, scrollDownRange, [1, 0]);
  const y = useTransform(scrollYProgress, scrollDownRange, [0, 50]);

  return (
    <main className="font-poppins text-white">
      <section id="intro" className="h-screen pb-10 flex flex-col">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={getVariants({ startY: 30 })}
            className="text-blue-gradient font-bold text-3xl md:text-5xl lg:text-6xl"
          >
            Eamonn Mansour
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={getVariants({ startY: 30, initialDelay: 0.2 })}
            className="mx-10 mt-2 font-thin text-base md:text-lg lg:text-2xl"
          >
            Software Engineer at{' '}
            <a
              className="text-blue font-medium hover:text-blurple-100 transition-colors"
              href="https://www.ibm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBM
            </a>
          </motion.h2>
          <SocialIcons />
        </div>
        <motion.div style={{ opacity, y }} className="mb-1 flex justify-center">
          <motion.a
            initial="hidden"
            animate="visible"
            variants={getVariants({ startY: 0, initialDelay: 3 })}
            href="#projects"
            className="flex flex-col items-center hover:text-blue transition-colors"
          >
            <FaChevronDown className="h-7 w-7 animate-bounce" />
            <span className="m-1">Scroll down</span>
          </motion.a>
        </motion.div>
      </section>
      <section
        id="projects"
        className="pb-20 bg-grey-200 flex flex-col items-center"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants({ startY: 30 })}
          className="text-xl font-bold my-16 md:text-4xl"
        >
          Latest Projects
        </motion.h1>
        <div className="container w-full h-full flex flex-col space-y-7 items-center">
          {Projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              tags={project.tags}
              url={project.url}
              img={project.img}
            />
          ))}
        </div>
      </section>
      <section className="h-full py-20 flex flex-col items-center bg-blue-gradient">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants({
            startY: 30,
            initialDelay: 0.2,
            initialDuration: 0.5,
          })}
          className="text-xl font-bold md:text-4xl"
        >
          Skills
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants({ startY: 30, initialDelay: 0.5 })}
          className="flex flex-col items-center m-5 p-5"
        >
          <p className="container px-5 pb-5 md:text-lg font-medium">
            One of the essential qualities of a software engineer is the ability
            to pick up new skills and stay up-to-date with the latest
            technologies, so here are some technologies that I use frequently!
          </p>
          <SkillIcons />
        </motion.div>
      </section>
      <section
        id="about"
        className="px-10 py-20 flex flex-col items-center bg-grey-200 "
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants({
            startY: 30,
            initialDelay: 0.2,
            initialDuration: 0.5,
          })}
          className="font-bold text-xl md:text-4xl"
        >
          About
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants({
            startY: 50,
            initialDelay: 0.2,
            initialDuration: 0.5,
          })}
          className="w-full lg:w-1/2 text-base md:text-lg m-5 p-5 font-medium"
        >
          <p>
            Passionate software engineer with interests in VR/AR, cloud
            computing, and game development. Combining my creativity and
            technical skills, I enjoy building all kinds of software, including
            video games, web and desktop apps, and CLI tools.
          </p>
          <br />
          <p>
            When I&apos;m not working, you&apos;ll find me playing video games,
            catching up on everything Marvel, and going karting.
          </p>
        </motion.div>
        <hr className="text-transparent w-1/2 mb-5 pb-1 bg-blue-gradient rounded-xl" />
        <div className="w-full xl:w-2/3 flex flex-col overflow-x-hidden">
          <ul className="flex flex-col items-center md:flex-row md:justify-center text-xl font-bold">
            {Object.entries(tabs).map(([key, _]) => (
              <li
                key={key}
                className={`mx-5 my-2 ${
                  tabId === key ? 'text-blue' : ''
                } hover:text-blurple-100 transition-colors hover:cursor-pointer capitalize`}
                onClick={() => setTabId(key)}
              >
                {key}
              </li>
            ))}
          </ul>
          <AnimatePresence exitBeforeEnter>
            {Object.entries(tabs).map(
              ([key, value]) =>
                tabId === key && (
                  <motion.div
                    key={key}
                    id={key}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, x: '100vw' },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center my-5"
                  >
                    {value.map((item, index) => (
                      <AboutItem
                        key={`${item.title}-${index}`}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        href={item.href}
                        location={item.location}
                      />
                    ))}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Index;
