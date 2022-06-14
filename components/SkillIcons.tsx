import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaRust,
  FaPhp,
  FaGit,
  FaDocker,
  FaLinux,
  FaJenkins,
  FaNodeJs,
  FaReact,
  FaUnity,
} from "react-icons/fa"
import {
  SiBlender,
  SiCplusplus,
  SiCsharp,
  SiGnubash,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiScala,
  SiTravisci,
  SiTypescript,
} from "react-icons/si"

const Skills = [
  {
    name: "C#",
    Icon: SiCsharp,
  },
  {
    name: "Python",
    Icon: FaPython,
  },
  {
    name: "Java",
    Icon: FaJava,
  },
  {
    name: "C++",
    Icon: SiCplusplus,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
  },
  {
    name: "HTML5",
    Icon: FaHtml5,
  },
  {
    name: "CSS",
    Icon: FaCss3,
  },
  {
    name: "Kotlin",
    Icon: SiKotlin,
  },
  {
    name: "Rust",
    Icon: FaRust,
  },
  {
    name: "Bash",
    Icon: SiGnubash,
  },
  {
    name: "Scala",
    Icon: SiScala,
  },
  {
    name: "PHP",
    Icon: FaPhp,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    name: "Git",
    Icon: FaGit,
  },
  {
    name: "Docker",
    Icon: FaDocker,
  },
  {
    name: "Unix/Linux",
    Icon: FaLinux,
  },
  {
    name: "Travis CI",
    Icon: SiTravisci,
  },
  {
    name: "Jenkins",
    Icon: FaJenkins,
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
  },
  {
    name: "React",
    Icon: FaReact,
  },
  {
    name: "Unity",
    Icon: FaUnity,
  },
  {
    name: "Blender",
    Icon: SiBlender,
  },
]

const SkillIcons = () => {
  return (
    <div className="w-min flex text-8xl animate-infinite-slide">
      {Skills.map(({ name, Icon }) => (
        <div key={name} className="py-5 mx-20 flex flex-col items-center">
          <Icon />
          <p className="p-2 text-lg font-medium">{name}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillIcons
