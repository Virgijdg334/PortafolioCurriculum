import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Cargar idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      certificates: 'Certificados',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      available: 'Disponible para contratación',
      greeting: 'Hola, soy',
      role: 'Desarrollador Full-Stack Junior',
      specialization: 'Especializado en aplicaciones multiplataforma y tecnologías cloud',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
      viewCV: 'Ver CV',
      technologies: 'Tecnologías',
      projectsCount: 'Proyectos',
      cvTitle: 'Currículum - Virgilio J. Domínguez',
      cvDescription: 'Desarrollador Junior especializado en aplicaciones multiplataforma',
      downloadCV: 'Descargar CV',
      viewFullSize: 'Ver en tamaño completo',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mí',
      subtitle: 'Desarrollador Junior especializado en aplicaciones multiplataforma y tecnologías web modernas',
      stats: {
        technologies: 'Tecnologías Dominadas',
        projects: 'Proyectos Completados',
        certificates: 'Certificaciones',
        experience: 'Años de Experiencia',
      },
      achievements: {
        student: 'Estudiante de 1° año - Desarrollo de Aplicaciones Multiplataforma',
        bachelor: 'Bachiller en Tecnología - IES Isidya',
        organizer: 'Organizador de eventos - Videojuegos Party (2022)',
        location: 'Sevilla, España',
      },
      bio1: 'Soy Virgilio J. Domínguez, un desarrollador junior apasionado por la tecnología y la innovación. Actualmente estoy cursando el primer año del Grado Superior en Desarrollo de Aplicaciones Multiplataforma en el Instituto Isidac, donde estoy ampliando mis conocimientos técnicos.',
      bio2: 'Mi experiencia incluye el desarrollo de aplicaciones utilizando diversas tecnologías como Java, HTML, CSS, XML, Angular y React. He trabajado con OpenWebinar especializándome en diferentes lenguajes de programación, además de obtener certificaciones en AWS Cloud Computing.',
      bio3: 'Además de la programación, he demostrado habilidades de organización y gestión al ser organizador de eventos en Videojuegos Party. Tengo un nivel avanzado de inglés que me permite acceder a recursos técnicos internacionales y colaborar en proyectos globales.',
      softSkills: {
        teamwork: 'Trabajo en equipo',
        events: 'Organización de eventos',
        english: 'Inglés avanzado',
        aws: 'AWS Cloud',
        learning: 'Aprendizaje continuo',
        problemSolving: 'Resolución de problemas',
      },
      myGoal: 'Mi Objetivo',
      goalText: 'Seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y contribuyendo a proyectos que generen un impacto positivo en la sociedad.',
    },
    skills: {
      title: 'Habilidades',
      titleHighlight: 'Técnicas',
      subtitle: 'Stack tecnológico completo y herramientas de desarrollo modernas',
      categories: {
        frontend: {
          title: 'Frontend',
          description: 'Desarrollo de interfaces modernas y responsivas',
        },
        backend: {
          title: 'Backend',
          description: 'Servicios y APIs escalables',
        },
        database: {
          title: 'Bases de Datos',
          description: 'Gestión de datos eficiente',
        },
        cloud: {
          title: 'Cloud & DevOps',
          description: 'Infraestructura cloud y despliegue',
        },
        tools: {
          title: 'Herramientas',
          description: 'Desarrollo y colaboración',
        },
      },
      proficiency: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    certificates: {
      title: 'Certificados',
      titleHighlight: 'y Formación',
      subtitle: 'Formación continua y certificaciones profesionales',
      viewCertificate: 'Ver Certificado',
      certList: {
        java: {
          title: 'Java Fundamentals',
          issuer: 'OpenWebinars',
          date: 'Octubre 2024',
          description: 'Fundamentos de programación en Java, incluyendo POO, estructuras de datos y mejores prácticas.',
        },
        react: {
          title: 'React Basics',
          issuer: 'OpenWebinars',
          date: 'Octubre 2024',
          description: 'Desarrollo de interfaces con React, hooks, componentes y gestión de estado.',
        },
        html: {
          title: 'HTML Fundamentals',
          issuer: 'OpenWebinars',
          date: 'Octubre 2024',
          description: 'Estructura HTML5, semántica web y mejores prácticas de accesibilidad.',
        },
        css: {
          title: 'CSS Fundamentals',
          issuer: 'OpenWebinars',
          date: 'Octubre 2024',
          description: 'Estilos CSS3, layouts modernos, responsive design y animaciones.',
        },
        aws: {
          title: 'AWS Cloud Practitioner Essentials',
          issuer: 'OpenWebinars',
          date: 'Noviembre 2024',
          description: 'Fundamentos de AWS Cloud, servicios principales y arquitectura cloud.',
        },
        angular: {
          title: 'Angular Basics',
          issuer: 'OpenWebinars',
          date: 'Octubre 2024',
          description: 'Desarrollo con Angular, componentes, servicios y routing.',
        },
      },
    },
    projects: {
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      subtitle: 'Portfolio de proyectos reales desarrollados con tecnologías modernas',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      projectsList: {
        tightpoker: {
          title: 'TightPoker',
          description: 'Aplicación de gestión de torneos de póker con sistema de ranking y estadísticas en tiempo real.',
          features: {
            tournaments: 'Sistema de torneos',
            ranking: 'Ranking dinámico',
            stats: 'Estadísticas detalladas',
            responsive: 'Diseño responsivo',
          },
        },
        cardshop: {
          title: 'CardTCGShop',
          description: 'E-commerce especializado en cartas coleccionables con carrito de compras y gestión de inventario.',
          features: {
            cart: 'Carrito de compras',
            inventory: 'Gestión de inventario',
            search: 'Búsqueda avanzada',
            payment: 'Sistema de pagos',
          },
        },
        chatbot: {
          title: 'Chatbot Empresarial',
          description: 'Chatbot inteligente para atención al cliente empresarial con IA conversacional.',
          features: {
            ai: 'IA conversacional',
            multilang: 'Multilenguaje',
            analytics: 'Análisis de conversaciones',
            integration: 'Integración API',
          },
        },
      },
    },
    contact: {
      title: 'Contacto',
      titleHighlight: 'Conmigo',
      subtitle: 'Estoy disponible para nuevos proyectos y oportunidades laborales',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto o oportunidad laboral...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
      },
      info: {
        title: 'Información de Contacto',
        email: 'Email',
        location: 'Ubicación',
        locationValue: 'Sevilla, España',
        availability: 'Disponibilidad',
        availabilityValue: 'Disponible para trabajo remoto y presencial',
      },
      toast: {
        success: '¡Mensaje enviado!',
        successDescription: 'Gracias por contactarme. Te responderé pronto.',
        error: 'Error',
        errorDescription: 'Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.',
      },
    },
    footer: {
      description: 'Desarrollador Full-Stack Junior especializado en aplicaciones multiplataforma y tecnologías web modernas.',
      rights: 'Todos los derechos reservados.',
      quickLinks: 'Enlaces Rápidos',
      social: 'Redes Sociales',
    },
    scrollToTop: 'Volver arriba',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      certificates: 'Certificates',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for hire',
      greeting: "Hi, I'm",
      role: 'Junior Full-Stack Developer',
      specialization: 'Specialized in cross-platform applications and cloud technologies',
      viewProjects: 'View Projects',
      contact: 'Contact',
      viewCV: 'View CV',
      technologies: 'Technologies',
      projectsCount: 'Projects',
      cvTitle: 'Resume - Virgilio J. Domínguez',
      cvDescription: 'Junior Developer specialized in cross-platform applications',
      downloadCV: 'Download CV',
      viewFullSize: 'View full size',
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'Junior Developer specialized in cross-platform applications and modern web technologies',
      stats: {
        technologies: 'Technologies Mastered',
        projects: 'Completed Projects',
        certificates: 'Certifications',
        experience: 'Years of Experience',
      },
      achievements: {
        student: '1st year Student - Cross-Platform Application Development',
        bachelor: 'Technology High School Graduate - IES Isidya',
        organizer: 'Event Organizer - Videogames Party (2022)',
        location: 'Seville, Spain',
      },
      bio1: "I'm Virgilio J. Domínguez, a junior developer passionate about technology and innovation. I'm currently in my first year of Higher Education in Cross-Platform Application Development at Instituto Isidac, where I'm expanding my technical knowledge.",
      bio2: 'My experience includes developing applications using various technologies such as Java, HTML, CSS, XML, Angular, and React. I have worked with OpenWebinar specializing in different programming languages, in addition to obtaining certifications in AWS Cloud Computing.',
      bio3: 'Beyond programming, I have demonstrated organizational and management skills as an event organizer at Videogames Party. I have an advanced level of English that allows me to access international technical resources and collaborate on global projects.',
      softSkills: {
        teamwork: 'Teamwork',
        events: 'Event organization',
        english: 'Advanced English',
        aws: 'AWS Cloud',
        learning: 'Continuous learning',
        problemSolving: 'Problem solving',
      },
      myGoal: 'My Goal',
      goalText: 'To keep growing as a developer, learning new technologies and contributing to projects that generate a positive impact on society.',
    },
    skills: {
      title: 'Technical',
      titleHighlight: 'Skills',
      subtitle: 'Complete technology stack and modern development tools',
      categories: {
        frontend: {
          title: 'Frontend',
          description: 'Modern and responsive interface development',
        },
        backend: {
          title: 'Backend',
          description: 'Scalable services and APIs',
        },
        database: {
          title: 'Databases',
          description: 'Efficient data management',
        },
        cloud: {
          title: 'Cloud & DevOps',
          description: 'Cloud infrastructure and deployment',
        },
        tools: {
          title: 'Tools',
          description: 'Development and collaboration',
        },
      },
      proficiency: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    certificates: {
      title: 'Certificates',
      titleHighlight: 'and Training',
      subtitle: 'Continuous training and professional certifications',
      viewCertificate: 'View Certificate',
      certList: {
        java: {
          title: 'Java Fundamentals',
          issuer: 'OpenWebinars',
          date: 'October 2024',
          description: 'Java programming fundamentals, including OOP, data structures and best practices.',
        },
        react: {
          title: 'React Basics',
          issuer: 'OpenWebinars',
          date: 'October 2024',
          description: 'Interface development with React, hooks, components and state management.',
        },
        html: {
          title: 'HTML Fundamentals',
          issuer: 'OpenWebinars',
          date: 'October 2024',
          description: 'HTML5 structure, web semantics and accessibility best practices.',
        },
        css: {
          title: 'CSS Fundamentals',
          issuer: 'OpenWebinars',
          date: 'October 2024',
          description: 'CSS3 styles, modern layouts, responsive design and animations.',
        },
        aws: {
          title: 'AWS Cloud Practitioner Essentials',
          issuer: 'OpenWebinars',
          date: 'November 2024',
          description: 'AWS Cloud fundamentals, core services and cloud architecture.',
        },
        angular: {
          title: 'Angular Basics',
          issuer: 'OpenWebinars',
          date: 'October 2024',
          description: 'Development with Angular, components, services and routing.',
        },
      },
    },
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle: 'Portfolio of real projects developed with modern technologies',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projectsList: {
        tightpoker: {
          title: 'TightPoker',
          description: 'Poker tournament management application with ranking system and real-time statistics.',
          features: {
            tournaments: 'Tournament system',
            ranking: 'Dynamic ranking',
            stats: 'Detailed statistics',
            responsive: 'Responsive design',
          },
        },
        cardshop: {
          title: 'CardTCGShop',
          description: 'E-commerce specialized in collectible cards with shopping cart and inventory management.',
          features: {
            cart: 'Shopping cart',
            inventory: 'Inventory management',
            search: 'Advanced search',
            payment: 'Payment system',
          },
        },
        chatbot: {
          title: 'Business Chatbot',
          description: 'Intelligent chatbot for business customer service with conversational AI.',
          features: {
            ai: 'Conversational AI',
            multilang: 'Multilanguage',
            analytics: 'Conversation analytics',
            integration: 'API integration',
          },
        },
      },
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      subtitle: "I'm available for new projects and job opportunities",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or job opportunity...',
        send: 'Send Message',
        sending: 'Sending...',
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        location: 'Location',
        locationValue: 'Seville, Spain',
        availability: 'Availability',
        availabilityValue: 'Available for remote and on-site work',
      },
      toast: {
        success: 'Message sent!',
        successDescription: "Thank you for contacting me. I'll respond soon.",
        error: 'Error',
        errorDescription: 'There was a problem sending the message. Please try again.',
      },
    },
    footer: {
      description: 'Junior Full-Stack Developer specialized in cross-platform applications and modern web technologies.',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      social: 'Social Media',
    },
    scrollToTop: 'Back to top',
  },
};
