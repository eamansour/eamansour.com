import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Image from "next/image"
import { Socials } from "../components/SocialIcons"
import { motion } from "framer-motion"
import Link from "next/link"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>Eamonn Mansour | Portfolio</title>
      <meta
        name="description"
        content="Eamonn Mansour, BSc Computer Science with a Year in Industry student"
      />
      <meta property="og:title" content="Eamonn Mansour" />
      <meta
        property="og:description"
        content="BSc Computer Science with a Year in Industry student"
      />
      <meta property="og:image" content="https://eamansour.com/images/EM.svg" />
      <meta property="og:url" content="https://eamansour.com/" />
      <meta property="twitter:title" content="Eamonn Mansour" />
      <meta
        property="twitter:description"
        content="BSc Computer Science with a Year in Industry student"
      />
      <meta
        property="twitter:image"
        content="https://eamansour.com/images/EM.svg"
      />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>

    <Component {...pageProps} />
    <footer className="text-white bg-black py-36 flex flex-col items-center space-y-4">
      <Link href="/">
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
        &copy; 2022 Eamonn Mansour |{" "}
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
  </>
)

export default App
