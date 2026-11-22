import type { ComponentType, CSSProperties } from 'react';
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Eye,
  Globe,
  Languages,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import {
  SiBootstrap,
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiOpencv,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
} from 'react-icons/si';

const icons: Record<string, ComponentType<{ className?: string; style?: CSSProperties }>> = {
  Java: SiOpenjdk,
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Bootstrap: SiBootstrap,
  'Spring Boot': SiSpringboot,
  FastAPI: SiFastapi,
  Django: SiDjango,
  'REST APIs': Globe,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  'Machine Learning': BrainCircuit,
  'Generative AI': Sparkles,
  NLP: Languages,
  'Computer Vision': Eye,
  YOLO: Target,
  OpenCV: SiOpencv,
  'Explainable AI': ShieldCheck,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Postman: SiPostman,
  'Power BI': BarChart3,
  'AWS PartyRock': Cloud,
  'AWS PartyRock AI': Cloud,
  'Prompt Engineering': Sparkles,
  'Chrome Extension': Code2,
  XGBoost: Code2,
  CatBoost: Code2,
  DistilBERT: BrainCircuit,
  SHAP: ScanEye,
  YOLOv8n: Target,
  MongoDB: Database,
  JWT: ShieldCheck,
  Razorpay: Code2,
  WebSockets: Globe,
  Pytest: Code2,
  SQLAlchemy: Database,
  Pydantic: Code2,
  Vite: Code2,
  'Spring Security': ShieldCheck,
};

const colors: Record<string, string> = {
  Java: '#ED8B00',
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#264DE4',
  React: '#61DAFB',
  Bootstrap: '#7952B3',
  'Spring Boot': '#6DB33F',
  FastAPI: '#009688',
  MySQL: '#4479A1',
  SQLite: '#003B57',
  OpenCV: '#5C3EE8',
  Git: '#F05032',
  Docker: '#2496ED',
  Postman: '#FF6C37',
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-4 w-4' }: TechIconProps) {
  const Icon = icons[name] ?? Code2;
  const color = colors[name];
  return <Icon className={className} style={color ? { color } : undefined} aria-hidden="true" />;
}
