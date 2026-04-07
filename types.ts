export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  image: string;
  link: string;
  dashboard?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'certification';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'technical' | 'tools' | 'frameworks';
}

export interface SoftSkill {
  subject: string;
  A: number;
  fullMark: number;
}