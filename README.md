# Juan Camilo López Suarez — Portafolio (Vite + React + TypeScript)

Un portafolio moderno, minimalista y de alto impacto, construido con **React 19**, **TypeScript**, **Vite**, **Tailwind CSS** y **Framer Motion**.

---

## ✨ Características Principales

- **Diseño Editorial & Minimalista**: Tipografía cuidada, espaciado preciso y alto contraste con enfoque moderno.
- **Header Dinámico**:
  - Indicador de estado con pulso verde activo (*"Available now"*).
  - Reloj en tiempo real sincronizado (*"London, UK • Live Time"*).
  - Selector de tema **Modo Claro / Modo Oscuro** con persistencia en `localStorage`.
- **Hero Section**:
  - Titular impactante con insignia de archivo (`22—26`).
  - Badges de disciplinas interactivas (*Web Design*, *UI/UX Design*, *Brand Identity*).
  - Botones de acción rápida hacia proyectos y contacto.
- **Selected Works & Filtros**:
  - Filtro por categorías (*All*, *Web Design*, *UI/UX*, *Branding*).
  - Tarjetas interactivas con zoom suave en imagen y botón circular con flecha indicadora (`↗`).
- **Modal de Caso de Estudio Completo**:
  - Al hacer clic en cualquier proyecto se abre un modal con efecto backdrop blur.
  - Muestra: Empresa, Tiempo de entrega, Rol, Tipo de proyecto, Resumen, Desafío, Solución, Resultados e impacto con métricas (`+185% Leads`, `3m 42s`, etc.), galería visual y entregables.
  - Navegación entre proyectos anterior/siguiente con teclado (`←`/`→`) o botones, y cierre con `ESC`.
- **Marquee / Ticker Infinito**: Ticker horizontal fluido con las habilidades y tecnologías.
- **Sección 'Who Am I'**:
  - Filosofía y narrativa personal.
  - Contadores de impacto (Años de experiencia, Proyectos entregados, Clientes atendidos).
  - Retrato con filtro monocromo y botón interactivo para **Descargar CV**.
  - Tarjetas de servicios detallados.
- **Experiencia & Premios**:
  - Línea de tiempo profesional (North Studio, Pixel Foundry, Lumen Creative, etc.).
  - Reconocimientos y premios (Awwwards, Framer Marketplace, CSS Design Awards, Behance).
- **Formulario de Contacto Interactivo**:
  - Selector de presupuesto en píldoras (`< $5k`, `$5k – $15k`, etc.).
  - Garantía de respuesta en 2 horas.
  - Efecto de celebración con **confeti** al enviar y estado de confirmación.
  - Enlaces a perfiles sociales (Twitter/X, GitHub, LinkedIn, Dribbble, Instagram).
- **Floating Dock Inferior**: Menú flotante estilo isla en la parte inferior para navegación ágil entre páginas (`Home`, `Projects`, `About`, `Contact`).

---

## 🚀 Inicio Rápido

### 1. Clonar / Navegar al proyecto
```bash
cd Portafolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: [http://localhost:5173/](http://localhost:5173/)

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para producción se generarán en la carpeta `dist/`.

---

## 🛠️ Personalización Fácil en 1 Minuto

Todo el contenido del portafolio se administra de forma centralizada en el archivo:

👉 [src/data/portfolioData.ts](file:///c:/Users/Usuario/Desktop/Portafolio/src/data/portfolioData.ts)

Puedes editar directamente:
- **`personal`**: Tu nombre, cargo, descripción, ciudad, zona horaria, avatar y enlace al CV.
- **`skills`**: Tu lista de habilidades para la marquesina.
- **`services`**: Tus paquetes o servicios de diseño/desarrollo.
- **`projects`**: Tus propios proyectos, capturas de pantalla, métricas y enlaces en vivo.
- **`experiences`**: Tu historial laboral y puestos.
- **`awards`**: Tus premios, menciones o certificaciones.
- **`socials`**: Tus enlaces a redes y perfiles profesionales.

---

## 📁 Estructura del Proyecto

```text
Portafolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Barra superior con estado en vivo y reloj
│   │   ├── FloatingDock.tsx       # Menú flotante estilo isla
│   │   ├── Hero.tsx               # Portada y presentación editorial
│   │   ├── SelectedWorks.tsx      # Galería con filtros de categoría
│   │   ├── ProjectCard.tsx        # Tarjeta de proyecto con micro-interacciones
│   │   ├── ProjectModal.tsx       # Modal completo de caso de estudio
│   │   ├── SkillsMarquee.tsx      # Ticker infinito de habilidades
│   │   ├── WhoAmI.tsx             # Sección sobre mí y servicios
│   │   ├── ExperienceSection.tsx  # Historial laboral
│   │   ├── AwardsSection.tsx      # Reconocimientos y premios
│   │   ├── ContactSection.tsx     # Formulario con confeti y contacto
│   │   └── Footer.tsx             # Pie de página y créditos
│   ├── data/
│   │   └── portfolioData.ts       # Datos centralizados y editables
│   ├── hooks/
│   │   └── useUtils.ts            # Hooks para reloj en vivo y tema oscuro/claro
│   ├── pages/
│   │   ├── HomePage.tsx           # Página de inicio
│   │   ├── ProjectsPage.tsx       # Página dedicada de proyectos
│   │   ├── AboutPage.tsx          # Página sobre mí
│   │   └── ContactPage.tsx        # Página de contacto
│   ├── types/
│   │   └── index.ts               # Modelos e interfaces TypeScript
│   ├── App.tsx                    # Enrutador y estructura base
│   ├── index.css                  # Directivas de Tailwind y estilos base
│   └── main.tsx                   # Punto de entrada de React
├── tailwind.config.js             # Configuración de colores y fuentes
├── package.json                   # Dependencias y scripts
└── README.md                      # Documentación del proyecto
```
