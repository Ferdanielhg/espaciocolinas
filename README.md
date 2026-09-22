# Espacio Colinas - Landing Page Oficial

Sitio web oficial y landing page para **Espacio Colinas** (enfoque actual: **Barbería**), desarrollado con tecnologías web estándar modernas (HTML5, Vanilla CSS3 y JavaScript), diseñado Mobile-First y listo para desplegarse en **Vercel** o cualquier hosting estático.

---

## 💈 Características Principales

- **Identidad de Marca Oficial de Canva**:
  - Logotipos oficiales transparentes extraídos en alta resolución (`assets/logo_banner_barberia_transparent.png`, `assets/emblem_sun_transparent.png`).
  - Paleta cromática original: Lino Hueso (`#FAF9F5`), Verde Bosque Pizarra (`#1A302D`), Bronce Terracota (`#9E6A4B`) y Oro Champaña (`#C89D5C`).
  - Tipografías elegantes (*Playfair Display*, *Cinzel*, *Outfit*).
- **Menú Interactivo de Barbería**:
  - Precios reales extraídos del diseño original:
    - **Corte Fade**: $220 *(Destacado)*
    - **Corte de Barba**: $170
    - **Corte Regular Adulto**: $150
    - **Corte Regular Niño**: $90
    - **Delineado Ceja**: $70
  - Al seleccionar cualquier servicio, se genera dinámicamente el mensaje pre-llenado para agendar por WhatsApp al número **`+52 656 113 7420`**.
- **Roadmap del Concepto 'Espacio Colinas'**:
  - **Etapa 1 (Activa)**: Barbería tradicional y contemporánea para caballeros.
  - **Etapa 2 (Próximamente)**: Salón de Belleza integral para damas.
  - **Etapa 3 (En Planeación)**: Café de especialidad y terraza lounge.
- **Experiencia 100% Móvil (Mobile-First)**:
  - Barra inferior fija (*Sticky Thumb Bar*) para agendar con un solo toque desde el smartphone.
  - Menú hamburguesa fluido.
  - Tiempos de carga ultrarrápidos (0 dependencias pesadas, < 100kb de código).
- **Configurado para Vercel**:
  - Incluye `vercel.json` con encabezados de seguridad y caché optimizada.

---

## 🚀 Cómo Subir a GitHub y Desplegar en Vercel

### Paso 1: Inicializar repositorio Git local

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "feat: landing page inicial Espacio Colinas Barberia"
```

### Paso 2: Crear el repositorio en GitHub y subirlo

1. Crea un nuevo repositorio en [GitHub](https://github.com/new) (ej. `espacio-colinas-landing`).
2. Vincula y sube tus cambios:

```bash
git remote add origin https://github.com/TU_USUARIO/espacio-colinas-landing.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel

1. Entra a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** > **"Project"**.
3. Selecciona tu repositorio `espacio-colinas-landing`.
4. Deja la configuración por defecto (Framework Preset: *Other* / *Static Site*).
5. Haz clic en **"Deploy"**.
6. ¡Listo! En menos de 30 segundos tu sitio estará en línea con certificado SSL gratuito y URL personalizada.

---

## 📁 Estructura del Proyecto

```
espaciocolinas-landing-page/
├── index.html            # Estructura semántica, accesibilidad y SEO
├── vercel.json           # Configuración de caché y seguridad para Vercel
├── css/
│   ├── variables.css     # Tokens de diseño (colores Canva, tipografías, espaciados)
│   ├── base.css          # Reset y tipografía global
│   ├── components.css    # Tarjetas, botones, héroe y secciones
│   └── responsive.css    # Optimizaciones móviles
├── js/
│   ├── main.js           # Lógica de reserva WhatsApp y selección de servicios
│   └── animations.js     # Animaciones suaves de scroll
├── assets/               # Logotipos oficiales e imágenes de alta definición
└── README.md             # Esta guía
```
