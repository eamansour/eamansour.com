import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

interface AccordionItemProps {
  title: string
  subtitle: string
  date: string
  location: string
  details: string[]
}

const accordionVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      bounce: 0.3,
    },
  },
}

const listVariants = {
  collapsed: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
}

const AccordionItem = ({
  title,
  subtitle,
  date,
  location,
  details,
}: AccordionItemProps) => {
  const [isActive, setActive] = useState(false)
  const isUrl = (s: string) =>
    ["https", "http"].some((protocol) => s.startsWith(`${protocol}://`))

  return (
    <div
      className="w-3/4 mb-1 pb-1 border-b-2 border-blurple-100 hover:border-blue hover:bg-grey-100 hover:bg-opacity-50 transition-colors hover:cursor-pointer overflow-hidden"
      onClick={() =>
        isUrl(location)
          ? window.open(location, "_blank", "noopener noreferrer")
          : setActive(!isActive)
      }
    >
      <div className="flex flex-col p-5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">
            {title}
            <span className="font-medium"> | {subtitle}</span>
          </h3>
          {isActive ? (
            <FaChevronDown className="hidden md:block text-lg" />
          ) : (
            <FaChevronRight className="hidden md:block text-lg" />
          )}
        </div>
        <p className="font-light text-base">
          <em>
            {date} {isUrl(location) ? "" : `| ${location}`}
          </em>
        </p>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            transition={{ duration: 0.4 }}
          >
            {details.map((detail, i) => (
              <motion.ul
                key={`${title}-detail-${i}`}
                variants={listVariants}
                className="list-disc mx-10 p-2"
              >
                <li>{detail}</li>
              </motion.ul>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem
