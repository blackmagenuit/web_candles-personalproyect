# Aura by Jaz - Velas Artesanales 🕯️

Sitio web de velas aromáticas artesanales con carrito de compras integrado y modo oscuro.

## ✨ Características

- 🎨 **Diseño elegante** con Tailwind CSS
- 🌙 **Modo oscuro/claro** automático
- 🛒 **Carrito de compras** funcional con localStorage
- 📱 **Totalmente responsive** 
- ♿ **Accesible** con navegación por teclado
- 🚀 **Optimizado** para producción
- 📧 **Formulario de contacto** con Formspree

## 🚀 Demo en Vivo

Visita la demo: [https://blackmagenuit.github.io/web_candles-personalproyect/](https://blackmagenuit.github.io/web_candles-personalproyect/)

## 🛠️ Tecnologías

- **HTML5** semántico
- **Tailwind CSS** v3.4+ con configuración personalizada
- **JavaScript** vanilla para interactividad
- **Formspree** para formularios
- **GitHub Pages** para hosting

## 📦 Instalación y Desarrollo

### Opción 1: Desarrollo Rápido (CDN)
```bash
# Clona el repositorio
git clone https://github.com/blackmagenuit/web_candles-personalproyect.git
cd web_candles-personalproyect

# Abre directamente en el navegador o usa un servidor local
# El sitio usa CDN como fallback automático
```

### Opción 2: Desarrollo Optimizado (CLI)
```bash
# Instala las dependencias
npm install

# Compila CSS en modo desarrollo (watch)
npm run build-css

# Inicia servidor de desarrollo
npm run dev

# Para producción (CSS minificado)
npm run build-prod
```

## 📁 Estructura del Proyecto

```
├── index.html              # Página principal
├── tailwind.config.js      # Configuración de Tailwind
├── package.json           # Dependencias y scripts
├── src/
│   └── input.css          # CSS fuente con componentes
├── dist/
│   └── output.css         # CSS compilado y optimizado
├── img/                   # Imágenes de productos y logo
└── README.md             # Documentación
```

## 🎨 Personalización

### Colores de Marca
Los colores están definidos en `tailwind.config.js`:
- **rosatierra**: Paleta principal (50-900)
- **tierra**: Paleta secundaria (50-900)

### Tipografías
- **Playfair Display**: Títulos elegantes
- **Source Sans Pro**: Texto del cuerpo
- **Cormorant Garamond**: Textos decorativos

### Componentes Reutilizables
En `src/input.css` encontrarás clases como:
- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario  
- `.product-card` - Tarjeta de producto
- `.form-input` - Campo de formulario

## 🛒 Funcionalidades

### Carrito de Compras
- ✅ Agregar/eliminar productos
- ✅ Persistencia con localStorage
- ✅ Contador dinámico
- ✅ Cálculo de totales
- ✅ Notificaciones visuales

### Formulario de Contacto
- ✅ Validación HTML5
- ✅ Integración con Formspree
- ✅ Estados de carga y error
- ✅ Feedback visual

## 📱 Responsive Design

- **Mobile First**: Diseñado desde móvil hacia escritorio
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes flexibles**: Grid adaptativo y elementos escalables

## 🚀 Optimizaciones para Producción

- **PurgeCSS automático**: Solo incluye CSS utilizado
- **Minificación**: CSS y assets optimizados
- **Lazy loading**: Imágenes y recursos
- **Fallback CDN**: Carga automática si falla CSS local

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Creado por [blackmagenuit](https://github.com/blackmagenuit) - MIT License

## 🔗 Enlaces

- **Portfolio**: [github.com/blackmagenuit](https://github.com/blackmagenuit)
- **Demo**: [Ver sitio en vivo](https://blackmagenuit.github.io/web_candles-personalproyect/)
- **Issues**: [Reportar problemas](https://github.com/blackmagenuit/web_candles-personalproyect/issues)