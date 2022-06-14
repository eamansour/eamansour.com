import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion"
import type { NextPage } from "next"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Card from "../components/Card"
import Layout from "../components/Layout"
import SkillIcons from "../components/SkillIcons"
import SocialIcons from "../components/SocialIcons"
import { Certifications, Education, Experience } from "../about"
import { Projects } from "../projects"
import AccordionItem from "../components/AccordionItem"

const nameVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 30,
  },
}

const scrollVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
    },
  },
  hidden: { opacity: 0 },
}

const Index: NextPage = () => {
  const [tabId, setTabId] = useState("experience")
  const tabs = {
    experience: Experience,
    education: Education,
    certifications: Certifications,
  }
  const { scrollYProgress } = useViewportScroll()
  const scrollDownRange = [0, 0.15]
  const opacity = useTransform(scrollYProgress, scrollDownRange, [1, 0])
  const y = useTransform(scrollYProgress, scrollDownRange, [0, 50])

  return (
    <Layout>
      <section id="intro" className="h-screen pb-10 flex flex-col">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={nameVariants}
            transition={{ duration: 1 }}
            className="text-blue-gradient font-bold text-3xl md:text-5xl lg:text-6xl"
          >
            Eamonn Mansour
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={nameVariants}
            transition={{ delay: 0.2, duration: 1 }}
            className="mx-10 mt-2 font-thin text-base md:text-lg lg:text-2xl"
          >
            BSc Computer Science with a Year in Industry student at{" "}
            <a
              className="text-blue font-medium hover:text-blurple-100 transition-colors"
              href="https://www.kcl.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              King&apos;s College London
            </a>
          </motion.h2>
          <SocialIcons />
        </div>
        <motion.div style={{ opacity, y }} className="mb-1 flex justify-center">
          <motion.a
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
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
        <h1 className="text-xl font-bold my-16 md:text-4xl">Latest Projects</h1>
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
        <h1 className="text-xl font-bold md:text-4xl">Skills</h1>
        <div className="w-full m-5 p-5 overflow-x-hidden">
          <SkillIcons />
        </div>
      </section>
      <section
        id="about"
        className="p-20 flex flex-col items-center bg-grey-200 "
      >
        <h1 className="font-bold text-xl md:text-4xl">About</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 md:text-lg m-5 p-5 font-medium"
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
                  tabId === key ? "text-blue" : ""
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
                      hidden: { opacity: 0, x: "100vw" },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto my-5"
                  >
                    {value.map((item) => (
                      <AccordionItem
                        key={item.title}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        location={item.location}
                        details={item.details}
                      />
                    ))}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  )
}

export default Index
