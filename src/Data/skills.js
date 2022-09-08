import { FaNode } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiPython,
  SiJava,
  SiJavascript,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  {
    id: 0,
    name: "HTML",
    icon: <SiHtml5 className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 1,
    name: "CSS",
    icon: <SiCss3 className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 2,
    name: "React",
    icon: <SiReact className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 3,
    name: "Node",
    icon: <FaNode className="skill_icon" />,
    imgageUrl: "",
    learning: true,
  },
  {
    id: 4,
    name: "Python",
    icon: <SiPython className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 5,
    name: "Java",
    icon: <SiJava className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 10,
    name: "Javascript",
    icon: <SiJavascript className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 6,
    name: ".Net",
    icon: <SiDotnet className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 7,
    name: "SQL",
    icon: <SiMicrosoftsqlserver className="skill_icon" />,
    imgageUrl: "",
    learning: true,
  },
  {
    id: 8,
    name: "Mongo DB",
    icon: <SiMongodb className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
  {
    id: 9,
    name: "Bootstrap",
    icon: <SiBootstrap className="skill_icon" />,
    imgageUrl: "",
    learning: false,
  },
];

export default skills;
