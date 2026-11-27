import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Juan Camilo López Suarez",
    role: "Desarrollador Junior Full-Stack",
    tagline: "Desarrollo software robusto para gobierno digital, plataformas web interactivas e integración de IA con React, TypeScript, C#, Python y bases de datos.",
    location: "Medellín, Colombia",
    timezone: "America/Bogota",
    availability: "Disponible para contratación",
    email: "juancamilolopezsuarez9@gmail.com",
    phone: "+57 301 563 4719",
    bioParagraph1: "Soy Juan Camilo López Suarez, Desarrollador Junior Full-Stack radicado en Medellín, Colombia, con experiencia real en desarrollo de software para gobierno digital, pruebas de calidad y capacitación técnica a clientes municipales.",
    bioParagraph2: "Mi experiencia abarca desde el frontend moderno con React, TypeScript y Angular, hasta el backend transaccional con C#, ASP.NET, Python (FastAPI) y bases de datos como SQL Server y PostgreSQL (Neon). Además, implemento flujos CI/CD con Docker y GitHub Actions, e integro modelos de Inteligencia Artificial (LLMs) en aplicaciones interactivas.",
    bioParagraph3: "Me enfoco en entender el funcionamiento integral de cada sistema para construir productos que funcionen eficientemente en el mundo real. Me caracterizo por mi orden, puntualidad y rigurosa atención al detalle.",
    avatarUrl: "/profile.jpg",
    cvUrl: "/Juan_Camilo_Lopez_Suarez_CV.pdf",
    stats: [
      { label: "Municipios asesorados", value: "50+" },
      { label: "Integraciones de IA", value: "LLMs & Chatbots" },
    ],
  },
  skills: [
    "React",
    "TypeScript",
    "Angular",
    "Tailwind CSS",
    "C# & ASP.NET",
    "Python & FastAPI",
    "SQL Server",
    "PostgreSQL (Neon)",
    "Docker & CI/CD",
    "Integración IA / LLMs",
    "APIs RESTful",
    "Git & GitHub Actions",
    "SAP CAP (Node.js)",
    "OpenUI5 / SAP Fiori",
    "OData v4",
    "SQLite"
  ],
  technicalSkillsByCategory: [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Angular", "OpenUI5 / SAP Fiori", "Tailwind CSS", "Vite", "HTML5/CSS3/JavaScript", "Framer Motion"]
    },
    {
      category: "Backend & APIs",
      skills: ["C#", "ASP.NET WebForms", "Python", "FastAPI", "SQLAlchemy", "SAP CAP (Node.js)", "OData v4", "APIs RESTful"]
    },
    {
      category: "Bases de Datos",
      skills: ["Microsoft SQL Server", "PostgreSQL (Neon)", "SQLite", "Modelado Relacional", "Consultas Optimizadas"]
    },
    {
      category: "DevOps & Despliegue",
      skills: ["Docker", "Git / GitHub", "GitHub Actions (CI/CD)", "Servidores IIS", "Vercel"]
    },
    {
      category: "Inteligencia Artificial",
      skills: ["Chatbots con IA", "Integración APIs LLM (Cerebras, Gemini, OpenAI, Groq)", "Prompt Engineering"]
    },
    {
      category: "Redes & Comunicaciones",
      skills: ["TCP/IP", "Subnetting", "Cisco Packet Tracer", "Protocolos de Correo (IMAP / SSL)"]
    }
  ],
  services: [
    {
      title: "Desarrollo de Software para Gobierno Digital",
      description: "Construcción de módulos de ventanilla única, radicación electrónica, gestión documental (SGDEA) y paneles de control para entidades gubernamentales y alcaldías.",
      tags: ["SGDEA", "Ventanilla Única", "Trámites PQRSD", "C# / ASP.NET", "SQL Server"]
    },
    {
      title: "Aplicaciones Web Full-Stack Modernas",
      description: "Diseño y arquitectura completa de soluciones web reactivas en React, TypeScript y Angular con backends rápidos en Python (FastAPI) o C#, conectados a bases de datos relacionales.",
      tags: ["React", "TypeScript", "Angular", "Python / FastAPI", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Integración de IA & Chatbots Inteligentes",
      description: "Implementación de asistentes conversacionales y automatización inteligente mediante APIs de LLM de última generación (Groq, Gemini, OpenAI, Cerebras) con interfaces React.",
      tags: ["Chatbots IA", "LLM APIs", "Prompt Engineering", "React & TypeScript", "Automatización"]
    },
    {
      title: "DevOps, Contenedores & Automatización CI/CD",
      description: "Contenedorización de microservicios y aplicaciones con Docker, creación de flujos de integración y entrega continua (CI/CD) con GitHub Actions y pruebas de calidad (QA).",
      tags: ["Docker", "GitHub Actions", "CI/CD", "Pruebas QA", "IIS"]
    }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/camilin2718", handle: "camilin2718" },
    { platform: "WhatsApp", url: "https://wa.me/573015634719", handle: "+57 301 563 4719" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/juan-camilo-lopez-suarez", handle: "juan-camilo-lopez-suarez" },
    { platform: "Correo Directo", url: "mailto:juancamilolopezsuarez9@gmail.com", handle: "juancamilolopezsuarez9@gmail.com" },
  ],
  projects: [
    {
      id: "1",
      slug: "sgdea-gestor-radicacion",
      title: "SGDEA Municipal — Gestor de Radicación y Archivo Central",
      category: "Gobierno Digital & Full-Stack",
      client: "Alcaldías Municipales / Entidades Territoriales",
      year: "2026",
      timeline: "Febrero – Noviembre 2026",
      role: "Desarrollador Junior Full-Stack & DevOps",
      projectType: "Sistema de Gestión Documental y Archivo Central (v2.4)",
      tagline: "Plataforma oficial para radicación de entrada, interna y salida, trazabilidad de expedientes y buzón electrónico IMAP.",
      overview: "Sistema integral de Gestión Documental Electrónica de Archivo (SGDEA Municipal v2.4) para entidades territoriales y alcaldías de Colombia. Administra el ciclo completo de las comunicaciones oficiales mediante Ventanilla Única: radicación de entrada (comunicaciones de ciudadanos y entes de control como Contraloría), radicación interna (memorandos entre dependencias) y radicación de salida. Incorpora sincronización automática con buzón de correo electrónico institucional (IMAP / SSL 993 vía Outlook Office 365) para procesar solicitudes y anexos PDF en radicados oficiales con un solo clic.",
      challenge: "Implementar un sistema de radicación consecutiva oficial estricta que prevenga duplicidades, controle términos de ley y riesgo de vencimiento de PQRSD, y además integre la lectura y transferencia de correos electrónicos con anexos PDF desde el buzón de la entidad.",
      solution: "Arquitectura modular en React y TypeScript con validación en tiempo real y borrador sincronizado en memoria para ventanilla. Integración de servicio IMAP en segundo plano para conexión segura con Office 365. Contenedorización completa con Docker y despliegue continuo mediante GitHub Actions.",
      results: "Gestión fluida de comunicaciones oficiales en alcaldías, alertas automáticas de expedientes en riesgo de vencimiento y digitalización total de la correspondencia municipal eliminando el papel.",
      metrics: [
        { label: "Tipos de Radicación", value: "Entrada, Interna y Salida" },
        { label: "Integración Correo", value: "IMAP SSL 993 (Office 365)" },
        { label: "Despliegue", value: "Docker + GitHub Actions" }
      ],
      heroImage: "/projects/radicacion/hero.jpg",
      gallery: [
        "/projects/radicacion/hero.jpg",
        "/projects/radicacion/panel.png",
        "/projects/radicacion/ventanilla.jpg",
        "/projects/radicacion/buzon.jpg"
      ],
      deliverables: [
        "Módulo Ventanilla Única de Radicación (Entrada, Interna y Salida)",
        "Buzón de Radicación Electrónica IMAP (Outlook Office 365)",
        "Panel de Control PQRSD y Semáforo de Tiempos de Ley",
        "Imágenes Docker y Automatización CI/CD con GitHub Actions",
        "Capacitación Técnica a Equipos Municipales"
      ],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "2",
      slug: "dashboard-gestion-tramites",
      title: "Dashboard de Gestión de Trámites y PQRSD",
      category: "Gobierno Digital & Analítica",
      client: "Alcaldías Municipales (~50 Municipios)",
      year: "2026",
      timeline: "8 semanas",
      role: "Desarrollador Full-Stack (Frontend, Backend & DB)",
      projectType: "Panel Analítico & Gestión Ciudadana",
      tagline: "Panel integral para monitoreo, métricas y gestión de trámites ciudadanos con y sin recaudo, y peticiones PQRSD.",
      overview: "Panel analítico y operativo de alto rendimiento diseñado para entidades territoriales y secretarías municipales. Centraliza el control de solicitudes ciudadanas: PQRSD anónimas e identificadas, trámites con recaudo y trámites sin recaudo (licencias de construcción, certificados de residencia, permisos de apertura de local). Incluye reportes diarios, gráficos de dona de avance y comparativas de radicación vs. resolución mensual.",
      challenge: "Consolidar métricas provenientes de diversas secretarías municipales en un dashboard claro y en tiempo real, garantizando que los funcionarios puedan auditar porcentajes de finalización y cuellos de botella en la atención.",
      solution: "Frontend modular construido con React y TypeScript, utilizando componentes visuales y Tailwind CSS para gráficos de progreso y estado de trámites. Backend desarrollado en C# conectado a Microsoft SQL Server para procesamiento transaccional de expedientes.",
      results: "Reducción drástica en tiempos de consulta de estado para los funcionarios, visualización centralizada del volumen de solicitudes y control visual del cumplimiento municipal en más de un 60%-88% por trámite.",
      metrics: [
        { label: "Municipios Asesorados", value: "~50 Municipios" },
        { label: "Tipos de Trámites", value: "PQRSD, Con y Sin Recaudo" },
        { label: "Visualización", value: "Gráficos & KPIs Diarios" }
      ],
      heroImage: "/projects/tramites/hero.png",
      gallery: [
        "/projects/tramites/hero.png",
        "/projects/tramites/metricas.jpg",
        "/projects/tramites/cards.png"
      ],
      deliverables: [
        "Dashboard Analítico en React + TypeScript",
        "Servicios Backend en C#",
        "Base de Datos Microsoft SQL Server",
        "Reportes Diarios & Mensuales de Solicitudes",
        "Métricas de Eficiencia por Secretaría"
      ],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "3",
      slug: "tilinflex-streaming",
      title: "TILINFLEX — Plataforma de Streaming Anime",
      category: "Full-Stack Web & Streaming",
      client: "Proyecto de Desarrollo Full-Stack",
      year: "2026",
      timeline: "6 semanas",
      role: "Desarrollador Full-Stack (Python & Angular)",
      projectType: "Plataforma de Streaming Web",
      tagline: "Plataforma de streaming de anime con catálogo dinámico, filtros avanzados y reproductor multimedia.",
      overview: "Tilinflex es una plataforma web completa de streaming orientada a series y películas de anime. Cuenta con un catálogo interactivo con carruseles de episodios en tendencia, buscador en tiempo real, barra lateral de filtros multicriterio (por tipo, estado de emisión, género y ordenamiento) y una arquitectura desacoplada con backend en Python y base de datos relacional serverless en PostgreSQL (Neon).",
      challenge: "Diseñar un backend eficiente capaz de gestionar catálogos de video y metadatos con consultas rápidas, junto con un frontend reactivo en Angular que permita filtrado instantáneo sin recargar vistas y una interfaz fluida en modo oscuro.",
      solution: "Se desarrolló una API RESTful con Python y FastAPI conectada a PostgreSQL alojada en Neon Cloud para consultas de baja latencia. En el cliente se utilizó Angular con Tailwind CSS para una interfaz inmersiva y un sistema modular de filtros dinámicos.",
      results: "Navegación cinematográfica rápida con tiempos de respuesta de API < 120ms, exploración ágil de títulos organizados por temporadas y episodios, y diseño 100% responsivo.",
      metrics: [
        { label: "Tiempo de Respuesta API", value: "< 120ms" },
        { label: "Base de Datos Cloud", value: "PostgreSQL (Neon)" },
        { label: "Frontend", value: "Angular + Tailwind" }
      ],
      heroImage: "/projects/tilinflex/hero.jpg",
      gallery: [
        "/projects/tilinflex/hero.jpg",
        "/projects/tilinflex/explorar.jpg"
      ],
      deliverables: [
        "API REST en Python (FastAPI)",
        "Base de Datos PostgreSQL en Neon Cloud",
        "Frontend SPA en Angular",
        "Filtros Multicriterio Dinámicos",
        "Interfaz Inmersiva en Modo Oscuro"
      ],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "4",
      slug: "chatbots-ia-municipal",
      title: "Chatbots con Inteligencia Artificial para Ciudadanía",
      category: "Inteligencia Artificial & Frontend",
      client: "1cero1 Software / Sector Municipal",
      year: "2026",
      timeline: "Febrero – Noviembre 2026",
      role: "Desarrollador Frontend & Prompt Engineer",
      projectType: "Asistente Virtual con LLM",
      tagline: "Chatbots conversacionales inteligentes para orientación ciudadana y radicación de consultas.",
      overview: "Implementación de asistentes conversacionales dotados de Inteligencia Artificial para sitios web y plataformas de atención a la ciudadanía municipal. Desarrollados con React y TypeScript, e integrados con modelos de lenguaje a través de APIs de LLM avanzadas (Cerebras, Gemini, OpenAI y Groq), brindando respuestas contextuales precisas y guiando a los usuarios en sus trámites.",
      challenge: "Garantizar tiempos de respuesta inmediatos y respuestas estrictamente delimitadas al contexto normativo municipal, evitando alucinaciones y facilitando la interacción a usuarios con baja familiaridad digital.",
      solution: "Diseño riguroso de prompts (Prompt Engineering), interfaces de chat en React con streaming de respuestas en tiempo real, manejo de estados con TypeScript y conexión con endpoints de inferencia rápida.",
      results: "Atención automatizada 24/7 de preguntas frecuentes ciudadanas, reduciendo la carga de consultas repetitivas en las ventanillas municipales.",
      metrics: [
        { label: "Modelos Integrados", value: "Gemini, Groq, OpenAI" },
        { label: "Frontend", value: "React + TypeScript" },
        { label: "Disponibilidad", value: "24/7 Asistido por IA" }
      ],
      heroImage: "/projects/ia/ai-hero.jpg",
      gallery: [
        "/projects/ia/ai-hero.jpg",
        "/projects/ia/ai-chip.jpg",
        "/projects/ia/ai-cloud.jpg"
      ],
      deliverables: [
        "Componente de Chatbot Interactivo en React",
        "Integración de APIs de LLM (Cerebras, Gemini, OpenAI, Groq)",
        "Prompt Engineering Especializado en Gestión Pública",
        "Historial de Conversación y Manejo de Errores"
      ],
      liveUrl: "https://github.com/camilin2718"
    },
    {
      id: "5",
      slug: "sap-cap-inventory-fiori",
      title: "Portal de Compras e Inventario (SAP MM / Fiori)",
      category: "Ecosistema SAP & Full-Stack",
      client: "Proyecto Empresarial SAP BTP / Local",
      year: "2026",
      timeline: "Noviembre 2026",
      role: "Desarrollador SAP CAP & OpenUI5",
      projectType: "Aplicación Empresarial SAP Fiori (CAP + OData v4)",
      tagline: "Portal de gestión de inventario, catálogo de materiales y órdenes de compra con flujo de aprobación y actualización automática de stock.",
      overview: "Aplicación empresarial estilo SAP MM / SAP Fiori desarrollada con arquitectura oficial de SAP: backend en SAP Cloud Application Programming Model (CAP) sobre Node.js con modelo de datos CDS, base de datos SQLite y servicios OData v4 reales, conectado a un frontend OpenUI5 con tema SAP Horizon, ShellBar y navegación lateral (ToolPage / SideNavigation).",
      challenge: "Implementar un sistema completo de compras e inventario con lógica transaccional real (cálculo automático de subtotales y totales, flujo de estados de órdenes y actualización segura del stock en almacén) siguiendo los estándares oficiales de SAP sin depender de licencias ni servidores pagos.",
      solution: "Modelado relacional en CDS (Suppliers, Materials, PurchaseOrders, PurchaseOrderItems) con datos semilla en CSV, acciones OData v4 personalizadas (submitOrder, approveOrder, receiveGoods, cancelOrder, adjustStock) y una interfaz OpenUI5 con Dashboard de KPIs, buscador de materiales y maestro-detalle de órdenes de compra.",
      results: "Control en tiempo real del stock crítico, automatización del ingreso de mercancía al inventario al recibir órdenes aprobadas y una arquitectura portable lista para escalar a SAP HANA Cloud o PostgreSQL.",
      metrics: [
        { label: "Backend & API", value: "SAP CAP (Node.js) + OData v4" },
        { label: "Frontend UI", value: "OpenUI5 / SAP Fiori Horizon" },
        { label: "Base de Datos", value: "SQLite (@cap-js/sqlite)" }
      ],
      heroImage: "/projects/sap-inventario/hero.png",
      gallery: [
        "/projects/sap-inventario/hero.png",
        "/projects/sap-inventario/materiales.png",
        "/projects/sap-inventario/ordenes.png"
      ],
      deliverables: [
        "Modelo de Datos CDS y Datos Iniciales CSV (SAP CAP)",
        "Servicio OData v4 con Lógica Transaccional y Acciones",
        "Frontend OpenUI5 estilo SAP S/4HANA (ShellBar + SideNavigation)",
        "Dashboard de KPIs, Catálogo de Materiales y Órdenes de Compra",
        "Persistencia en SQLite con @cap-js/sqlite"
      ],
      liveUrl: "https://github.com/camilin2718"
    }
  ],
  experiences: [
    {
      period: "Febrero 2026 – Noviembre 2026",
      role: "Desarrollador Junior",
      company: "1cero1 Software S.A.S",
      type: "Tiempo Completo / Híbrido",
      description: "Desarrollo de software para gobierno digital, cubriendo el ciclo de vida de desarrollo, pruebas de calidad (QA), automatización de infraestructura y capacitación a clientes municipales en todo el país.",
      achievements: [
        "Creé imágenes y contenedores Docker para todos los proyectos de la empresa y automaticé estos procesos mediante integración continua (CI/CD) con GitHub Actions.",
        "Creé y publiqué diversos formularios para la ciudadanía, como parte de la asesoría y la creación de software para alrededor de 50 municipios del país.",
        "Implementé chatbots con herramientas de inteligencia artificial, usando React y TypeScript.",
        "Realicé pruebas de calidad del software desarrollado para los municipios garantizando estándares de estabilidad.",
        "Brindé capacitaciones a diversos municipios sobre el uso de los softwares que se les suministraban."
      ]
    },
    {
      period: "2024 – Presente",
      role: "Desarrollador de Software en Formación & Proyectos",
      company: "Institución Universitaria ITM / Proyectos Personales",
      type: "Educación & Práctica Aplicada",
      description: "Diseño y desarrollo de plataformas completas como Tilinflex (streaming con Python, Angular y Neon PostgreSQL), aplicaciones analíticas y experimentación con redes y LLMs.",
      achievements: [
        "Construcción de arquitecturas cliente-servidor con Angular, React, FastAPI y C#.",
        "Modelado de bases de datos relacionales en SQL Server y PostgreSQL.",
        "Prácticas avanzadas de redes (TCP/IP, subnetting y simulaciones en Cisco Packet Tracer)."
      ]
    }
  ],
  education: [
    {
      degree: "Tecnología en Desarrollo de Software",
      institution: "Institución Universitaria ITM",
      period: "2024 – Presente",
      status: "En curso"
    }
  ],
  references: [
    {
      name: "Javier González",
      company: "1cero1 Software S.A.S",
      role: "Líder de Desarrollo",
      phone: "+57 301 336 6200"
    }
  ],
  languages: [
    {
      language: "Español",
      level: "Nativo"
    },
    {
      language: "Inglés",
      level: "B2 (Intermedio Avanzado)"
    },
    {
      language: "Alemán",
      level: "B1 (Intermedio)"
    }
  ],
  awards: [
    {
      year: "2026",
      title: "Despliegue de Soluciones para Gobierno Digital",
      organization: "1cero1 Software S.A.S",
      description: "Reconocimiento por el despliegue exitoso de contenedores Docker, automatización CI/CD con GitHub Actions y soporte a más de 50 municipios."
    },
    {
      year: "2025",
      title: "Implementación de Asistentes IA en Software Ciudadano",
      organization: "Sector Tecnológico",
      description: "Diseño e integración de chatbots inteligentes con APIs de LLMs en interfaces web React para atención ciudadana 24/7."
    },
    {
      year: "2024",
      title: "Tecnología en Desarrollo de Software",
      organization: "Institución Universitaria ITM",
      description: "Formación académica de excelencia en ingeniería de software, arquitectura de sistemas, bases de datos y redes computacionales."
    }
  ]
};
