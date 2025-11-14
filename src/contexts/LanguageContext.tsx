import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'AI Engineering Student',
    'hero.specialties': 'Computer Vision  • NLP • Multi-Agent Systems',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'AI Engineering student specializing in Computer Vision, Deep Learning, and NLP. Proven experience in developing multi-agent systems, real-time image processing, and language models. Strong focus on deploying embedded AI solutions and creating value through intelligent systems.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.deeplearning': 'Deep Learning',
    'skills.computervision': 'Computer Vision',
    'skills.nlp': 'NLP & LLMs',
    'skills.deployment': 'AI Deployment',
    'skills.programming': 'Programming',
    'skills.frameworks': 'Frameworks & Tools',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.talan.role': 'AI Engineer Intern',
    'experience.talan.company': 'Talan Tunisia (Portalyze)',
    'experience.talan.location': 'Tunis, Tunisia',
    'experience.talan.desc1': 'Engineered multi-agent AI system leveraging LLMs and RAG for automated strategic analysis',
    'experience.talan.desc2': 'Implemented intelligent agents for web scraping, contextual enrichment, and strategic recommendations',
    'experience.talan.desc3': 'Developed self-assessment mechanism using LLM-as-judge and expert chatbot for business consulting',
    'experience.riadi.role': 'Web Developer Intern',
    'experience.riadi.company': 'RIADI Research Lab, University of Manouba',
    'experience.riadi.location': 'Tunis, Tunisia',
    'experience.riadi.desc1': 'Developed full-stack application with React and role-based authentication system',
    'experience.riadi.desc2': 'Implemented conflict resolution algorithm for aggregating expert evaluations',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.pitchlab.title': 'Pitch Lab - AI Communication Coach',
    'projects.pitchlab.desc': 'Multimodal ML pipeline integrating speech recognition, emotion analysis, and NLP assessment for real-time presentation feedback.',
    'projects.smartpark.title': 'SmartPark - Intelligent Parking System',
    'projects.smartpark.desc': 'Real-time parking monitoring system optimized for edge devices using YOLO and TensorFlow Lite.',
    'projects.visual.title': 'Visual Assistance System',
    'projects.visual.desc': 'Mobile application for visually impaired using real-time object detection, OCR, and voice-guided navigation.',
    
    // Education
    'education.title': 'Education',
    'education.ensi.degree': 'Engineering Cycle in Computer Science',
    'education.ensi.school': 'National School of Computer Science (ENSI)',
    'education.ensi.location': 'Manouba, Tunisia',
    'education.ipeit.degree': 'Preparatory Cycle – Mathematics and Physics',
    'education.ipeit.school': 'Preparatory Institute for Engineering Studies of Tunis (IPEIT)',
    'education.ipeit.location': 'Tunis, Tunisia',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always open to discussing new projects, creative ideas or opportunities.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.role': 'Étudiante en Ingénierie IA',
    'hero.specialties': 'Vision par Ordinateur  • NLP • Systèmes Multi-Agents',
    'hero.cta': 'Voir Mes Projets',
    'hero.contact': 'Me Contacter',
    
    // About
    'about.title': 'À Propos',
    'about.description': 'Étudiante en ingénierie IA spécialisée en Vision par Ordinateur, Deep Learning et NLP. Expérience avérée dans le développement de systèmes multi-agents, le traitement d\'images en temps réel et les modèles de langage. Forte orientation vers le déploiement de solutions d\'IA embarquée et la création de valeur par des systèmes intelligents.',
    
    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.deeplearning': 'Deep Learning',
    'skills.computervision': 'Vision par Ordinateur',
    'skills.nlp': 'NLP & LLMs',
    'skills.deployment': 'Déploiement IA',
    'skills.programming': 'Programmation',
    'skills.frameworks': 'Frameworks & Outils',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.talan.role': 'Stagiaire Ingénieure IA',
    'experience.talan.company': 'Talan Tunisia (Portalyze)',
    'experience.talan.location': 'Tunis, Tunisie',
    'experience.talan.desc1': 'Conçu un système IA multi-agents utilisant LLMs et RAG pour l\'analyse stratégique automatisée',
    'experience.talan.desc2': 'Implémenté des agents intelligents pour le web scraping, l\'enrichissement contextuel et les recommandations stratégiques',
    'experience.talan.desc3': 'Développé un mécanisme d\'auto-évaluation utilisant LLM-as-judge et chatbot expert pour le conseil d\'entreprise',
    'experience.riadi.role': 'Développeuse Web Stagiaire',
    'experience.riadi.company': 'Laboratoire de Recherche RIADI, Université de Manouba',
    'experience.riadi.location': 'Tunis, Tunisie',
    'experience.riadi.desc1': 'Développé une application full-stack avec React et système d\'authentification basé sur les rôles',
    'experience.riadi.desc2': 'Implémenté un algorithme de résolution de conflits pour agréger les évaluations d\'experts',
    
    // Projects
    'projects.title': 'Projets Phares',
    'projects.pitchlab.title': 'Pitch Lab - Coach IA en Communication',
    'projects.pitchlab.desc': 'Pipeline ML multimodal intégrant reconnaissance vocale, analyse d\'émotions et évaluation NLP pour des retours en temps réel.',
    'projects.smartpark.title': 'SmartPark - Système de Stationnement Intelligent',
    'projects.smartpark.desc': 'Système de surveillance de parking en temps réel optimisé pour les appareils embarqués utilisant YOLO et TensorFlow Lite.',
    'projects.visual.title': 'Système d\'Assistance Visuelle',
    'projects.visual.desc': 'Application mobile pour malvoyants utilisant détection d\'objets en temps réel, OCR et navigation vocale guidée.',
    
    // Education
    'education.title': 'Formation',
    'education.ensi.degree': 'Cycle d\'Ingénieur en Informatique',
    'education.ensi.school': 'École Nationale des Sciences de l\'Informatique (ENSI)',
    'education.ensi.location': 'Manouba, Tunisie',
    'education.ipeit.degree': 'Cycle Préparatoire – Mathématiques et Physique',
    'education.ipeit.school': 'Institut Préparatoire aux Études d\'Ingénieurs de Tunis (IPEIT)',
    'education.ipeit.location': 'Tunis, Tunisie',
    
    // Contact
    'contact.title': 'Contactez-Moi',
    'contact.subtitle': 'Je suis toujours ouverte à discuter de nouveaux projets, d\'idées créatives ou d\'opportunités.',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
