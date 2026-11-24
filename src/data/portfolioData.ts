import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Juan Camilo López Suarez",
    role: "Desarrollador Full-Stack Junior",
    tagline: "Construyo aplicaciones web completas, modernas y escalables con React, TypeScript, Node.js y bases de datos. Apasionado por el código limpio, la arquitectura sólida y el aprendizaje continuo.",
    location: "Medellín, Colombia",
    timezone: "America/Bogota",
    availability: "Disponible para contratación",
    email: "juancamilolopezsuarez9@gmail.com",
    bioParagraph1: "Soy Juan Camilo López Suarez, desarrollador Full-Stack Junior radicado en Medellín, Colombia. Me apasiona transformar problemas reales en aplicaciones web intuitivas, rápidas y bien estructuradas.",
    bioParagraph2: "Cuento con bases sólidas tanto en frontend (React, TypeScript, Tailwind CSS) como en backend (Node.js, Express, APIs REST, PostgreSQL y MongoDB). Disfruto colaborar en equipo, recibir retroalimentación constructiva y aprender rápidamente nuevas herramientas del ecosistema.",
    bioParagraph3: "Mi enfoque combina atención al detalle en la interfaz de usuario con buenas prácticas en la capa de datos y servidor. Busco integrarme a un equipo donde pueda aportar valor real desde el primer día, resolver desafíos técnicos y seguir creciendo profesionalmente.",
    avatarUrl: "/profile.jpg",
    cvUrl: "#",
    stats: [
      { label: "Repositorios en GitHub", value: "20+" },
      { label: "Tecnologías dominadas", value: "10+" },
      { label: "Compromiso & Aprendizaje", value: "100%" },
    ],
  },
  skills: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
    "Git & GitHub",
    "Next.js / Vite",
    "Prisma ORM"
  ],
  services: [
    {
      title: "Desarrollo Frontend React & TypeScript",
      description: "Creación de interfaces web interactivas, componentes modulares y reutilizables, consumo fluido de APIs y diseño 100% responsivo.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"]
    },
    {
      title: "Desarrollo Backend & APIs REST",
      description: "Construcción de servidores robustos con Node.js y Express, autenticación segura (JWT), validación rigurosa de datos y lógica de negocio.",
      tags: ["Node.js", "Express", "REST APIs", "Autenticación JWT", "Postman"]
    },
    {
      title: "Bases de Datos & Arquitectura Full-Stack",
      description: "Modelado eficiente de datos relacionales y no relacionales, integración con ORMs y despliegue continuo de aplicaciones completas.",
      tags: ["PostgreSQL", "MongoDB", "Prisma ORM", "Git / GitHub", "Vercel / Render"]
    }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/camilin2718", handle: "camilin2718" },
    { platform: "WhatsApp", url: "https://wa.me/573015634719", handle: "+57 301 563 4719" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/juan-camilo-l%C3%B3pez-suarez", handle: "juan-camilo-lópez-suarez" },
    { platform: "Correo Directo", url: "mailto:juancamilolopezsuarez9@gmail.com", handle: "juancamilolopezsuarez9@gmail.com" },
  ],
  projects: [
    {
      id: "1",
      slug: "devflow-platform",
      title: "DevFlow Platform",
      category: "Full-Stack Web",
      client: "Proyecto de Código Abierto",
      year: "2026",
      timeline: "4 semanas",
      role: "Desarrollador Full-Stack",
      projectType: "Full-Stack App",
      tagline: "Plataforma comunitaria de preguntas, respuestas y debate técnico para desarrolladores de software.",
      overview: "DevFlow es una aplicación web Full-Stack diseñada para que desarrolladores publiquen dudas de programación, compartan soluciones y voten por las mejores respuestas. Desarrollada con React, TypeScript y Tailwind en el frontend, y Node.js con Express y PostgreSQL en el backend.",
      challenge: "El desafío radicaba en diseñar una arquitectura limpia con paginación eficiente de preguntas, sistema de votos en tiempo real, búsqueda con filtros por etiquetas tecnológicas y autenticación protegida con JWT.",
      solution: "Se estructuró una API REST modular con Express y Prisma ORM para consultas optimizadas a PostgreSQL. El frontend se construyó con React y custom hooks para la gestión reactiva de votos y filtrado sin recargar la página.",
      results: "Arquitectura escalable probada con más de 500 registros simulados y respuestas en menos de 100ms. Código completamente documentado con pruebas de endpoints en Postman.",
      metrics: [
        { label: "Tiempo de Respuesta API", value: "< 100ms" },
        { label: "Cobertura de Endpoints", value: "18 Rutas" },
        { label: "Lighthouse Performance", value: "98/100" }
      ],
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      ],
      deliverables: ["Arquitectura API REST", "Base de Datos PostgreSQL", "Frontend React + TypeScript", "Autenticación JWT", "Despliegue Full-Stack"],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "2",
      slug: "shopease-ecommerce",
      title: "ShopEase E-Commerce",
      category: "Full-Stack Web",
      client: "Proyecto Práctico Comercial",
      year: "2025",
      timeline: "5 semanas",
      role: "Desarrollador Full-Stack",
      projectType: "E-Commerce",
      tagline: "Tienda en línea completa con catálogo dinámico, carrito persistente y pasarela de pagos.",
      overview: "ShopEase es una plataforma de comercio electrónico Full-Stack que permite explorar productos, filtrar por categorías y precios, administrar un carrito de compras interactivo y procesar pedidos de prueba.",
      challenge: "Implementar un flujo de compra robusto que mantenga la sincronización del carrito entre recargas de página, valide stock en el backend y asegure las transacciones sin duplicación de órdenes.",
      solution: "Frontend desarrollado con React y Context API para el estado global del carrito. Backend con Node.js y MongoDB para almacenamiento flexible de productos y órdenes, integrando simulación de pasarela de pago segura.",
      results: "Flujo de compra fluido completado en 3 pasos, interfaz responsive adaptable a teléfonos móviles y panel de administración para gestión de inventario.",
      metrics: [
        { label: "Páginas & Vistas", value: "8 Pantallas" },
        { label: "Operaciones CRUD", value: "100% Funcional" },
        { label: "Compatibilidad Móvil", value: "100%" }
      ],
      heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80"
      ],
      deliverables: ["Catálogo de Productos", "Carrito de Compras", "API en Node/Express", "Base de Datos MongoDB", "Panel de Gestión"],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "3",
      slug: "tasksync-manager",
      title: "TaskSync Manager",
      category: "Frontend Web",
      client: "Herramienta de Productividad",
      year: "2025",
      timeline: "3 semanas",
      role: "Desarrollador Frontend",
      projectType: "Productivity App",
      tagline: "Aplicación de gestión de tareas estilo Kanban con arrastrar y soltar e historial de actividad.",
      overview: "TaskSync es un gestor de proyectos interactivo diseñado para organizar flujos de trabajo personales o en equipo mediante tableros personalizables, etiquetas de prioridad y fechas de vencimiento.",
      challenge: "Lograr una interacción rápida de arrastrar y soltar (drag & drop) que funcione sin retrasos en navegadores de escritorio y dispositivos táctiles, preservando el orden de las tareas en todo momento.",
      solution: "Construida con React, TypeScript y Tailwind CSS, empleando HTML5 Drag and Drop API y almacenamiento en LocalStorage con sincronización preparada para API REST.",
      results: "Experiencia de usuario instantánea y fluida a 60 FPS, con atajos de teclado y modo oscuro integrado.",
      metrics: [
        { label: "Rendimiento", value: "60 FPS" },
        { label: "Persistencia de Datos", value: "LocalStorage / API" },
        { label: "Accesibilidad", value: "WCAG AA" }
      ],
      heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
      ],
      deliverables: ["Tablero Kanban Interactivo", "Drag and Drop", "Componentes en React", "Diseño Responsivo"],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "4",
      slug: "fintrack-dashboard",
      title: "FinTrack Dashboard",
      category: "Frontend Web",
      client: "Panel Analítico",
      year: "2024",
      timeline: "3 semanas",
      role: "Desarrollador Frontend",
      projectType: "Analytics Dashboard",
      tagline: "Dashboard analítico para monitoreo de ingresos, gastos y presupuestos mensuales con gráficos interactivos.",
      overview: "FinTrack es una interfaz analítica moderna que transforma datos numéricos en métricas visuales intuitivas: gráficos de líneas, barras de distribución de gastos y tablas con ordenamiento dinámico.",
      challenge: "Organizar gran cantidad de información financiera en un diseño limpio, evitando saturar la vista del usuario y facilitando filtros por rangos de fecha.",
      solution: "Desarrollado con React, TypeScript y Chart.js/Recharts. Diseño basado en tarjetas modulares con Tailwind CSS y consumo de datos simulados mediante endpoints REST asíncronos.",
      results: "Visualización clara de tendencias financieras, exportación básica de reportes y tiempo de carga inferior a 0.8 segundos.",
      metrics: [
        { label: "Velocidad de Carga", value: "0.8s" },
        { label: "Gráficos Dinámicos", value: "5 Tipos" },
        { label: "Diseño Modular", value: "100%" }
      ],
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      ],
      deliverables: ["Dashboard de Métricas", "Gráficos Interactivos", "Consumo de API REST", "Modo Oscuro"],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "5",
      slug: "cafe-origen",
      title: "Café Origen",
      category: "Diseño Web",
      client: "Proyecto Web Comercial",
      year: "2024",
      timeline: "2 semanas",
      role: "Desarrollador Web",
      projectType: "Sitio Web Comercial",
      tagline: "Sitio web para una marca de café especial con catálogo de variedades y selector de molienda.",
      overview: "Café Origen es una landing page moderna e interactiva creada para presentar café de origen colombiano, su proceso de tostión artesanal y permitir a los clientes explorar métodos de preparación recomendados.",
      challenge: "Crear una experiencia visual cautivadora que transmita la tradición cafetera con animaciones sutiles y tiempos de carga ultra rápidos.",
      solution: "Construida con React, Vite y Tailwind CSS, optimizando imágenes webp y transiciones suaves con Framer Motion.",
      results: "Puntuación de 100/100 en SEO y Accesibilidad en Google Lighthouse, navegación intuitiva y adaptable a cualquier pantalla.",
      metrics: [
        { label: "Google Lighthouse", value: "100/100" },
        { label: "Peso Total", value: "< 500kb" },
        { label: "Tasa de Rebote", value: "-40%" }
      ],
      heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
      ],
      deliverables: ["Diseño Web Responsivo", "Optimización Lighthouse", "Animaciones Framer Motion", "Catálogo Interactivo"],
      liveUrl: "https://github.com/camilin2718"
    }
  ],
  experiences: [
    {
      period: "2024 – Presente",
      role: "Desarrollador Full-Stack Junior",
      company: "Proyectos Independientes & Open Source",
      type: "Proyectos / Freelance",
      description: "Construcción de aplicaciones web Full-Stack completas con React, TypeScript, Node.js y bases de datos relacionales y NoSQL. Implementación de buenas prácticas de código, arquitectura modular y control de versiones con Git."
    },
    {
      period: "2023 – 2024",
      role: "Desarrollador Frontend & Backend",
      company: "Práctica & Proyectos Prácticos",
      type: "Desarrollo Activo",
      description: "Desarrollo de interfaces de usuario responsivas con React y Tailwind CSS, integración de APIs RESTful, diseño de modelos de datos en PostgreSQL y MongoDB y despliegue en entornos cloud."
    },
    {
      period: "2022 – 2023",
      role: "Estudiante de Desarrollo Web Full-Stack",
      company: "Formación Técnica & Autodidacta",
      type: "Educación & Certificación",
      description: "Formación intensiva en fundamentos de ingeniería de software, algoritmia, JavaScript moderno (ES6+), estructuras de datos, patrones de diseño y trabajo colaborativo con Git y GitHub."
    }
  ],
  awards: [
    {
      year: "2024",
      title: "Certificación en Desarrollo Web Full-Stack",
      organization: "Academia de Software",
      description: "Acreditación por dominar el desarrollo de aplicaciones completas: interfaces con React, servidores con Node.js/Express y gestión de bases de datos relacionales y no relacionales."
    },
    {
      year: "2023",
      title: "Especialización en React & TypeScript",
      organization: "Plataforma de Educación Tech",
      description: "Certificado en desarrollo de aplicaciones web escalables, tipado estricto, custom hooks, gestión de estado y optimización de rendimiento."
    },
    {
      year: "2023",
      title: "Desarrollo Backend con Node.js & APIs REST",
      organization: "Certificación de Ingeniería",
      description: "Reconocimiento por la creación y documentación de APIs seguras, autenticación con JWT, testing de endpoints y conexión con PostgreSQL."
    },
    {
      year: "2022",
      title: "Fundamentos de Programación & Algoritmos",
      organization: "Educación en Computación",
      description: "Bases sólidas en resolución de problemas algorítmicos, lógica de programación, complejidad temporal y buenas prácticas de código limpio."
    }
  ]
};
