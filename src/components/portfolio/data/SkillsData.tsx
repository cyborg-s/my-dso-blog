import HtmlLogo from "../../../assets/html.svg";
import CssLogo from "../../../assets/css.svg";
import DocuLogo from "../../../assets/docu.svg";
import PythonLogo from "../../../assets/python.svg";
import ShellLogo from "../../../assets/shell.svg";
import YamlLogo from "../../../assets/yaml.svg";
import DockerLogo from "../../../assets/docker.svg";
import GithubLogo from "../../../assets/github.svg";
import SecLogo from "../../../assets/secLogo.png";

export interface Skill {
  name: string;
  logo: any; // ReactComponent oder string (PNG)
  isSvg: boolean;
  descHead: string;
  descText: string;
}

export const skillsData: Skill[] = [
  {
    name: "HTML",
    logo: HtmlLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· User-friendly navigation menus<br/>· Responsive web design<br/>· Contact forms and login pages<br/>· Transitions, animations and hover effect",
  },
  {
    name: "CSS",
    logo: CssLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· Styling and layout<br/>· Responsive design<br/>· Animations and hover effects",
  },
  {
    name: "Static site generator",
    logo: DocuLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· search functionality<br/>· static website and customization<br/>· tags, categories, and RSS feeds<br/>· translation",
  },
  {
    name: "Python",
    logo: PythonLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· Build APIs<br/>· automate testing<br/>· spam filtering, recommendation systems",
  },
  {
    name: "Shell scripting",
    logo: ShellLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· Adding new users and setting their permissions<br/>· Conditional statements, loops, functions<br/>· Automate calculations and scripts",
  },
  {
    name: "Yaml",
    logo: YamlLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· Kubernetes deployments<br/>· store settings like database connections<br/>· environment variables<br/>· represent complex data structures",
  },
  {
    name: "Container",
    logo: DockerLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· CI/CD pipelines<br/>· build microservices applications<br/>· automate testing and deployment",
  },
  {
    name: "CI/CD with GitHub Actions",
    logo: GithubLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText:
      "· Automated builds and tests<br/>· pre-built actions for common tasks<br/>· streamline deployment workflows",
  },
  {
    name: "IT Security",
    logo: SecLogo,
    isSvg: false,
    descHead: "How I used this skill",
    descText:
      "· simulate attacks and identify vulnerabilities<br/>· Setting up multi-factor authentication<br/>· Implement authentication and authorization mechanisms",
  },
];
