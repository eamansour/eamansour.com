'use client';

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useState } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import AboutItem from '@/components/AboutItem';
import Card from '@/components/Card';
import SkillIcons from '@/components/SkillIcons';
import SocialIcons from '@/components/SocialIcons';
import { Certifications, Education, Experience } from '@/data/about';
import { Projects } from '@/data/projects';

const tabs = {
  experience: Experience,
  education: Education,
  certifications: Certifications,
};

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

export default function HomePage() {
  const [tabId, setTabId] = useState<keyof typeof tabs>('experience');
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scrollCueY = useTransform(scrollYProgress, [0, 0.15], [0, 50]);

  return (
    <main className="portfolio">
      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX: progressScale }}
      />

      <section id="intro" className="hero">
        <div className="content-shell hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionMotion}
            className="hero-copy"
          >
            <h1 className="hero-name">Eamonn Mansour</h1>
            <h2 className="hero-title">
              Software Engineer at{' '}
              <a
                href="https://www.ibm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM
              </a>
            </h2>
            <SocialIcons />
          </motion.div>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5 }}
          className="scroll-cue"
          href="#projects"
          style={{ opacity: scrollCueOpacity, y: scrollCueY }}
        >
          <span>Scroll to explore</span>
          <FaChevronDown
            aria-hidden="true"
            className="scroll-cue-icon animate-bounce"
          />
        </motion.a>
      </section>

      <section id="projects" className="content-section projects-section">
        <div className="content-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionMotion}
            className="section-heading"
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-description">
              A mix of open-source engineering, experiments, and things I
              built simply because they were interesting.
            </p>
          </motion.div>
          <div className="project-grid">
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
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <div className="content-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionMotion}
            className="section-heading"
          >
            <h2 className="section-title">Skills &amp; tools</h2>
            <p className="section-description">
              The technologies I reach for, and the tools that help turn ideas
              into reliable software.
            </p>
          </motion.div>
          <SkillIcons />
        </div>
      </section>

      <section id="about" className="content-section about-section">
        <div className="content-shell about-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionMotion}
            className="about-copy"
          >
            <h2 className="section-title">About me</h2>
            <p>
              I&apos;m a software engineer with interests in cloud computing,
              VR/AR, and game development. I enjoy working across different
              kinds of software — from web and desktop apps to games and
              command-line tools.
            </p>
            <p>
              Away from the keyboard, you&apos;ll find me playing video games,
              catching up on everything Marvel, or going karting.
            </p>
          </motion.div>

          <div className="career-panel">
            <h3 className="career-heading">Experience &amp; background</h3>
            <div
              className="career-tabs"
              role="tablist"
              aria-label="Career details"
            >
              {Object.keys(tabs).map((key) => {
                const tab = key as keyof typeof tabs;
                return (
                  <button
                    key={tab}
                    id={`tab-${tab}`}
                    type="button"
                    role="tab"
                    aria-selected={tabId === tab}
                    aria-controls={`panel-${tab}`}
                    className={`career-tab${tabId === tab ? ' active' : ''}`}
                    onClick={() => setTabId(tab)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tabId}
                id={`panel-${tabId}`}
                role="tabpanel"
                aria-labelledby={`tab-${tabId}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="career-list"
              >
                {tabs[tabId].map((item, index) => (
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Get in touch</h2>
          <p>
            I&apos;m always happy to connect with fellow engineers and
            professionals.
          </p>
          <a
            href="https://www.linkedin.com/in/eamonn-mansour"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Say hello on LinkedIn <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
