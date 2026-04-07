import { Project, ExperienceItem, Skill, SoftSkill } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/nirmalkumarmurali",
  linkedin: "https://www.linkedin.com/in/nirmal-kumar-murali/",
  email: "nirmal-kumar.murali@epita.fr",
  resume: "#"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Steam Publisher & Developer Analytics",
    tech: ["Python", "Pandas", "SQL", "Power BI", "Jupyter"],
    description: "End-to-end analysis of 10,000+ Steam games to evaluate publisher and developer portfolio performance across ownership, review sentiment, playtime, and concurrent users. Key finding: boutique studios outperform major publishers on review sentiment by up to 15%.",
    image: "/portfolio/dashboard_screenshot.png",
    link: "https://github.com/nirmalkumarmurali/steam-publisher-analytics"
  },
  {
    id: 2,
    title: "End-to-End Machine Learning Pipeline",
    tech: ["Python", "Scikit-Learn", "MLflow", "Pandas", "Jupyter"],
    description: "Modular ML pipeline covering data ingestion, validation, feature engineering, model training, and experiment tracking — aligned with industry MLOps standards. Full experiment logging via MLflow for reproducible model lifecycle management.",
    image: "https://picsum.photos/600/400?random=11",
    link: "https://github.com/nirmalkumarmurali"
  },
  {
    id: 3,
    title: "Customer Churn ML Pipeline",
    tech: ["Python", "Scikit-Learn", "MLflow", "Plotly"],
    description: "End-to-end ML pipeline predicting customer churn with 96% accuracy across 6,000 customers and 14 features. Random Forest classifier with SMOTE class balancing and stratified cross-validation for robust performance. Full experiment tracking via MLflow for reproducible model lifecycle management.",
    image: "/portfolio/churn-pipeline.png",
    link: "https://github.com/nirmalkumarmurali/Customer-Churn-ML-Pipeline",
    dashboard: "/portfolio/customer_churn_dashboard.html"
  },
  {
    id: 4,
    title: "AI-Powered Job Description Analyser",
    tech: ["Python", "NLP", "Hugging Face", "Streamlit"],
    description: "Python automation tool leveraging generative AI and NLP models to extract, classify, and structure key skills and requirements from job descriptions automatically. Designed for live deployment on Hugging Face Spaces.",
    image: "https://picsum.photos/600/400?random=12",
    link: "https://github.com/nirmalkumarmurali"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Masters in Data Science & Analytics (DSA)",
    company: "EPITA — École d'Ingénieurs en Informatique",
    location: "Paris, France",
    period: "2023 – Present",
    description: [
      "Specialisation in Data Analytics, Machine Learning, Power BI, and Python pipeline development.",
      "Building solo projects in Python, SQL, and Power BI published on GitHub."
    ],
    type: "education"
  },
  {
    id: 2,
    role: "Bachelor of Science in Computer Science",
    company: "Ramakrishna Mission Vivekananda College",
    location: "Chennai, India",
    period: "2018 – 2021",
    description: [
      "Major in Computer Science with foundations in programming, databases, and algorithms."
    ],
    type: "education"
  },
  {
    id: 3,
    role: "Client Specialist",
    company: "Access Healthcare",
    location: "Remote",
    period: "May 2023 – Sep 2023",
    description: [
      "Used reporting dashboards to monitor KPIs and track process performance across US healthcare revenue cycle operations.",
      "Acted as bridge between clients and internal teams, translating data insights into actionable recommendations."
    ],
    type: "work"
  },
  {
    id: 4,
    role: "AR Consultant",
    company: "AGS Health",
    location: "Remote",
    period: "Aug 2022 – May 2023",
    description: [
      "Analysed aging reports and denial trend data to identify cash flow optimisation opportunities for healthcare clients.",
      "Collaborated with cross-functional teams using data-driven recommendations to improve accounts receivable processes."
    ],
    type: "work"
  },
  {
    id: 5,
    role: "Associate Customer Service",
    company: "Sutherland Global Services (Amazon.ca)",
    location: "Remote",
    period: "Jul 2021 – Aug 2022",
    description: [
      "Provided customer support for Amazon.ca via chat and email.",
      "Consistently maintained SLA and quality KPIs across all operations."
    ],
    type: "work"
  }
];

export const TECHNICAL_SKILLS: Skill[] = [
  { name: "Python", level: 80, category: "technical" },
  { name: "SQL", level: 78, category: "technical" },
  { name: "Power BI", level: 82, category: "tools" },
  { name: "Machine Learning", level: 72, category: "technical" },
  { name: "Pandas / NumPy", level: 80, category: "technical" },
  { name: "Data Analysis", level: 85, category: "technical" },
  { name: "Git & GitHub", level: 75, category: "tools" },
  { name: "Excel", level: 78, category: "tools" },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { subject: 'Communication', A: 88, fullMark: 100 },
  { subject: 'Problem Solving', A: 92, fullMark: 100 },
  { subject: 'Collaboration', A: 85, fullMark: 100 },
  { subject: 'Adaptability', A: 88, fullMark: 100 },
  { subject: 'Analytical Thinking', A: 90, fullMark: 100 },
  { subject: 'Creativity', A: 80, fullMark: 100 },
];
