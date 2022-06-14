import { motion } from "framer-motion"

interface CardProps {
  title: string
  description: string
  tags: string[]
  url: string
  img: string
}

const cardVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -300,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
}

const Card = ({ title, description, tags, url, img }: CardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      variants={cardVariants}
      style={{ backgroundImage: `url(/images/${img})` }}
      className="shadow-2xl w-2/3 h-[400px] bg-cover bg-no-repeat rounded-xl"
    >
      <motion.a
        target="_blank"
        href={url}
        className="h-full w-full flex flex-col justify-end p-10 bg-black bg-opacity-50 rounded-xl"
      >
        <motion.h3 className="pb-1 font-bold text-lg lg:text-2xl">
          {title}
        </motion.h3>
        <motion.p className="pb-4">{description}</motion.p>
        <motion.div className="mt-2 flex flex-wrap md:space-x-2">
          {tags.map((tag) => (
            <span
              className="bg-grey-300 font-thin rounded-xl mb-1 px-2 text-sm"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

export default Card
