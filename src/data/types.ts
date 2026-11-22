export type ProjectCategory =
  | 'AI & Machine Learning'
  | 'Full Stack Development'
  | 'Computer Vision'
  | 'Backend Development'
  | 'Generative AI'
  | 'Research';

export interface ProjectProof {
  githubUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  videoUrl?: string;
  architectureUrl?: string;
  thumbnail?: string;
  screenshots?: string[];
}

export interface Project extends ProjectProof {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  status?: string;
  accent?: 'cyan' | 'violet' | 'blue';
  problem?: string;
  solution?: string;
  contribution?: string;
  architecture?: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  category: string;
  year?: string;
  description: string;
  imagePath?: string;
  pdfPath?: string;
  verificationUrl?: string;
  credentialId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year?: string;
  description: string;
  proofImage?: string;
  certificatePDF?: string;
  officialURL?: string;
  projectURL?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: string;
  duration?: string;
  description: string;
  technologies: string[];
  certificateUrl?: string;
  completionLetterUrl?: string;
  projectRepositoryUrl?: string;
  supportingDocumentationUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  score?: string;
  description?: string;
  proofUrl?: string;
}

export interface ProfileLink {
  id: 'github' | 'linkedin' | 'leetcode';
  label: string;
  username?: string;
  url?: string;
}
