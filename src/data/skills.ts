export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages used across backend, frontend and AI projects.',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive interfaces, component-driven UI and web fundamentals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'REST APIs, authentication, service architecture and integrations.',
    skills: ['Spring Boot', 'FastAPI', 'Django', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational data modeling and persistent application storage.',
    skills: ['MySQL', 'SQLite'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Applied machine learning, computer vision, NLP and explainable AI.',
    skills: [
      'Machine Learning',
      'Generative AI',
      'NLP',
      'Computer Vision',
      'YOLO',
      'OpenCV',
      'Explainable AI',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Development, collaboration, testing and deployment tooling.',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Power BI', 'AWS PartyRock'],
  },
];
