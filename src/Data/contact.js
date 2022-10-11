import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";

const contacts = [
  {
    id: 1,
    name: "Email",
    link: "mailto:sricharan505@gmail.com",
    icon: <FiMail className="contacts_icon" />,
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sricharan-srinivasa-94b70a17a/",
    icon: <ImLinkedin className="contacts_icon" />,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/sricharan505",
    icon: <FiGithub className="contacts_icon" />,
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://twitter.com/charan2910?t=9wH5ZVerreXd367ok-PI0A&s=08",
    icon: <FiTwitter className="contacts_icon" />,
  },
];

export default contacts;
