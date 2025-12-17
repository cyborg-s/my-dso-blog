import minecraftImg from "../../../assets/projects/minecraftImg.png";
import wordPressImg from "../../../assets/projects/wordPressImg.png";
import truckSignsImg from "../../../assets/projects/truckSignImg.png";
import babyToolsImg from "../../../assets/projects/babyToolsImg.png";
import juiceShopImg from "../../../assets/projects/shellImg.png";
import YAML from "../../../assets/yaml.svg";
import HTML from "../../../assets/html.svg";
import SHELL from "../../../assets/shellBlack.svg";
import PYTHON from "../../../assets/python.svg";
import STATIC from "../../../assets/docu.svg";
import CSS from "../../../assets/css.svg";
import ITSEC from "../../../assets/secLogo.png";
import CONTAINER from "../../../assets/dockerDark.svg";

export interface ProjectIcon {
  icon: any;
  title: string;
  isSvg: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  img?: string;
  icons?: ProjectIcon[];
  doc: string;
  git?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Baby Tools Shop",
    description:
      "Containerized e-commerce application for baby products. Demonstrates isolated environment benefits for deployment and scalability.",
    img: babyToolsImg,
    icons: [
      { icon: SHELL, title: "Shell", isSvg: true },
      { icon: CONTAINER, title: "Container", isSvg: true },
    ],
    doc: "/docs/projects/baby-tools-shop",
    git: "https://github.com/cyborg-s/baby-tools-shop",
  },
  {
    id: 2,
    title: "Truck Signs API",
    description:
      "Containerized REST API to ensure reproducible, isolated, and secure application execution.",
    img: truckSignsImg,
    icons: [
      { icon: SHELL, title: "Shell", isSvg: true },
      { icon: PYTHON, title: "Python", isSvg: true },
      { icon: CONTAINER, title: "Container", isSvg: true },
    ],
    doc: "/docs/projects/truck-signs-api",
    git: "https://github.com/cyborg-s/truck_signs_api",
  },
  {
    id: 3,
    title: "OWASP Juice Shop",
    description:
      "Deliberately insecure web application for learning offensive security techniques and improving protection of real-world apps.",
    img: juiceShopImg,
    icons: [
      { icon: ITSEC, title: "IT Security", isSvg: false },
      { icon: PYTHON, title: "Python", isSvg: true },
    ],
    doc: "/docs/projects/owasp-juice-shop",
    git: "https://github.com/cyborg-s/OWASP_Juice_Shop",
  },
  {
    id: 4,
    title: "Minecraft Server",
    description:
      "Hosting and managing a Minecraft game server. Learn configuration, world settings, mods, and server responsibilities.",
    img: minecraftImg,
    icons: [
      { icon: YAML, title: "Yaml", isSvg: true },
      { icon: SHELL, title: "Shell Scripting", isSvg: true },
      { icon: ITSEC, title: "IT Security", isSvg: false },
      { icon: CONTAINER, title: "Container", isSvg: true },
    ],
    doc: "/docs/projects/minecraft-server",
    git: "https://github.com/cyborg-s/minecraft_server",
  },
  {
    id: 5,
    title: "WordPress Multi Container Setup",
    description:
      "Containerized WordPress blog environment. Quickly configure a reproducible setup for reliable deployment with minimal manual steps.",
    img: wordPressImg,
    icons: [
      { icon: SHELL, title: "Shell Scripting", isSvg: true },
      { icon: CONTAINER, title: "Container", isSvg: true },
      { icon: ITSEC, title: "IT Security", isSvg: false },
    ],
    doc: "/docs/projects/wordpress-multi-container-setup",
    git: "https://github.com/cyborg-s/wordpress_multi_container_setup",
  },
];
