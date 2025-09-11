# 📱 WIN Internet App - Mobile Mockups

> Mockups móviles interactivos para aplicación de proveedor de internet WIN - Diseño mobile-first con React, Vite y Tailwind CSS

[![Deploy to Azure](https://img.shields.io/badge/Deploy-Azure%20Static%20Web%20Apps-blue)](https://github.com/juandedios199012/desing-mobile-azure-web-static)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac)](https://tailwindcss.com/)

## 🎯 Propósito del Proyecto

Este proyecto fue desarrollado como **mockup interactivo** para una aplicación móvil de gestión de servicios de internet del proveedor WIN en Perú. Incluye pantallas completas de UI/UX mobile-first con navegación funcional entre secciones.

## ✨ Características Implementadas

### 🖥️ Pantallas Principales
- **Login Screen** - Pantalla de inicio de sesión con validación de formulario
- **Dashboard/Home** - Panel principal con información del plan de internet
- **Solicitudes** - Sistema de gestión de solicitudes con filtros por tipo
- **Smart WiFi/Soporte** - Herramientas de diagnóstico y soporte técnico
- **Mi Cuenta** - Gestión de datos personales y configuración

### 🎨 Diseño y UX
- **Mobile-first**: Diseño optimizado para 380px (simulación móvil)
- **Navegación por pestañas**: Bottom tab navigation nativa
- **Estados interactivos**: Hover, active y transiciones suaves
- **Iconografía SVG**: Íconos personalizados sin dependencias externas
- **Sistema de colores**: Paleta naranja corporativa de WIN
- **Componentes reutilizables**: Badge, SectionTitle, TopBar, etc.

### 🛠️ Funcionalidades Técnicas
- **Validación de formularios**: Login con campos obligatorios
- **Filtrado dinámico**: Sistema de filtros en solicitudes
- **Estados de UI**: Loading, active, disabled states
- **Responsive design**: Adaptable a diferentes tamaños
- **Timeline components**: Seguimiento visual de estados

## 🚀 Stack Tecnológico

```json
{
  "frontend": {
    "framework": "React 18",
    "bundler": "Vite 7.1.5",
    "styling": "Tailwind CSS 3.4.0",
    "language": "JavaScript (JSX)"
  },
  "deployment": {
    "platform": "Azure Static Web Apps",
    "ci_cd": "GitHub Actions",
    "domain": "Custom Azure domain"
  },
  "development": {
    "package_manager": "npm",
    "dev_server": "Vite HMR",
    "linting": "ESLint"
  }
}
```

## 📋 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### 🔧 Setup Local

```bash
# 1. Clonar repositorio
git clone https://github.com/juandedios199012/desing-mobile-azure-web-static.git
cd desing-mobile-azure-web-static

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:5173/
```

### 🏗️ Build y Despliegue

```bash
# Build para producción
npm run build

# Preview del build local
npm run preview

# Deploy automático (via GitHub Actions)
git push origin master
```

## 📱 Guía de Uso

### Login
1. **Documento**: Mínimo 8 caracteres (DNI/CE/RUC)
2. **Contraseña**: Mínimo 6 caracteres
3. **Captcha**: Placeholder (no funcional en mockup)
4. **Botón habilitado**: Solo cuando ambos campos cumplen requisitos

### Navegación
- **Inicio**: Dashboard con información del plan
- **Smart WiFi**: Herramientas de diagnóstico
- **Solicitudes**: Gestión de tickets con filtros
- **Mi cuenta**: Datos personales y configuración

### Interacciones
- Tabs con estado activo/inactivo
- Filtros funcionales en solicitudes
- Botones con estados hover/active
- Timeline de progreso visual

## 🎨 Estructura de Componentes

```
App.jsx
├── ScreenLogin/          # Pantalla de inicio de sesión
├── Home/                 # Dashboard principal
├── Requests/             # Gestión de solicitudes
├── Support/              # Soporte técnico
└── Shared Components/
    ├── Badge             # Etiquetas de estado
    ├── SectionTitle      # Títulos de sección
    ├── TopBar            # Barra superior
    ├── BottomTab         # Navegación inferior
    ├── QuickAction       # Botones de acción rápida
    ├── StatusPill        # Estados de solicitudes
    ├── Timeline          # Progreso visual
    └── Icono             # Iconografía SVG
```

## 🎯 Prompt Original Usado

```
El archivo abierto fue por un caso de diseño y necesito que lo ejecutes, 
otra herramienta de IA Generativa me dio estas indicaciones:

Opciones para probarlo en Visual Studio Code (con React y Tailwind)
1. Instalas Node.js en tu PC
2. Creas un proyecto con Vite o Create React App
3. Copias el código que te dejé en el canvas (App.tsx o App.jsx)
4. Instalas Tailwind CSS
5. Ejecutas con npm run dev
6. Así verías las pantallas navegables en tu navegador

👉 Este camino es más técnico (lo usaría tu equipo de desarrollo)
```

## 🔧 Configuración Azure Static Web Apps

### Pipeline Configuration
```yaml
# .github/workflows/azure-static-web-apps-*.yml
app_location: "/"           # Código fuente en raíz
api_location: ""            # Sin API backend
output_location: "dist"     # Output de Vite build
```

### Static Web App Config
```json
// public/staticwebapp.config.json
{
  "routes": [
    { "route": "/*", "serve": "/index.html", "statusCode": 200 }
  ],
  "navigationFallback": { "rewrite": "/index.html" }
}
```

## 📊 Métricas del Proyecto

- **Líneas de código**: ~384 líneas JSX
- **Componentes**: 8 componentes principales + 8 componentes compartidos
- **Pantallas**: 4 pantallas funcionales + login
- **Build time**: ~583ms (optimizado)
- **Bundle size**: ~203KB JS + ~15KB CSS (gzipped: ~67KB total)

## 🔄 Flujo de Desarrollo Implementado

1. **Desarrollo Local**: `npm run dev` → `localhost:5173`
2. **Git Workflow**: `git add` → `git commit` → `git push`
3. **CI/CD**: GitHub Actions automático en push
4. **Deploy**: Azure Static Web Apps
5. **Monitoreo**: GitHub Actions logs + Azure portal

## 💡 Lessons Learned y Best Practices

### ✅ Lo que funcionó bien:
- **Vite + React**: Setup rápido y HMR eficiente
- **Tailwind CSS 3.4.0**: Versión estable sin conflictos PostCSS
- **Mobile-first**: Diseño específico para 380px
- **SVG Icons**: Sin dependencias externas, customizable
- **Azure Static Web Apps**: Deploy automático y confiable

### 🔧 Configuraciones críticas:
- **PostCSS config**: `tailwindcss` y `autoprefixer` en plugins
- **Tailwind config**: Content paths correctos para purging
- **Azure output**: `dist` folder (no `build`)
- **Static Web App config**: SPA routing con fallback
- **Git ignore**: Excluir `node_modules`, incluir `public/`

### 🚨 Problemas resueltos:
- **Tailwind PostCSS**: Usar versión 3.4.0 estable
- **Azure deployment**: Configurar `output_location: "dist"`
- **SPA routing**: Agregar `staticwebapp.config.json`
- **macOS files**: `.DS_Store` en .gitignore

## 📝 Template para Futuros Proyectos

### Prompt Template:
```
Necesito crear mockups móviles interactivos para [CLIENTE/PROYECTO]:

REQUERIMIENTOS:
- React + Vite + Tailwind CSS
- Diseño mobile-first ([ANCHO]px)
- [NÚMERO] pantallas: [LISTA DE PANTALLAS]
- Navegación [TIPO DE NAVEGACIÓN]
- Deploy en [PLATAFORMA]

CARACTERÍSTICAS ESPECÍFICAS:
- [FUNCIONALIDAD 1]
- [FUNCIONALIDAD 2]
- [SISTEMA DE COLORES/BRANDING]

CONFIGURACIÓN:
- Configurar pipeline CI/CD
- Optimizar para [PLATAFORMA DE DEPLOY]
- Documentación README completa
```

## 🤝 Contribuciones

Este proyecto está configurado para recibir contribuciones:

1. Fork del repositorio
2. Crear feature branch: `git checkout -b feature/nueva-pantalla`
3. Commit cambios: `git commit -m 'Add: nueva pantalla de pagos'`
4. Push branch: `git push origin feature/nueva-pantalla`
5. Crear Pull Request

## 📞 Contacto y Soporte

- **Repositorio**: [GitHub - desing-mobile-azure-web-static](https://github.com/juandedios199012/desing-mobile-azure-web-static)
- **Issues**: Reportar bugs o solicitar features
- **Discussions**: Preguntas y mejoras

---

**Desarrollado con ❤️ usando GitHub Copilot y herramientas modernas de desarrollo web.**

*Este README sirve como template y documentación para futuros proyectos de mockups móviles.*
