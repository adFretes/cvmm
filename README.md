```markdown
# CVMM App - Virgen de la Medalla Milagrosa

Este proyecto es la plataforma web de la capilla, generado con [Vite](https://vitejs.dev/) y React. Utiliza [Tailwind CSS](https://tailwindcss.com/) para los estilos, [shadcn/ui](https://ui.shadcn.com/) para los componentes de la interfaz y efectos visuales interactivos.

##  Inicialización del Proyecto

```bash
npm create vite@latest cvmm-app
cd cvmm-app/
npm install
npm run dev

```

##  Instalación y Configuración de Tailwind CSS

Instala los paquetes necesarios usando el nuevo plugin de Vite:

```bash
npm install tailwindcss @tailwindcss/vite

```

Actualiza tu archivo **`vite.config.ts`** para incluir el plugin:

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

```

Agrega la directiva en tu archivo principal de estilos (por ejemplo, `index.css`):

```css
@import "tailwindcss";

```

## 🧩 Configuración de shadcn/ui

Para que los componentes de shadcn funcionen correctamente, es necesario configurar los alias de rutas (paths).

### 1. Configurar TypeScript

Agrega la configuración de rutas en **`tsconfig.json`**:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

Haz lo mismo en **`tsconfig.app.json`**:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

### 2. Configurar el Alias en Vite

Instala los tipos de Node necesarios para resolver las rutas:

```bash
npm install -D @types/node

```

Actualiza el archivo **`vite.config.ts`** para que quede de la siguiente manera:

```typescript
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```

### 3. Inicializar e instalar componentes

Ejecuta el comando de inicialización y luego instala los componentes base que utilizará la aplicación:

```bash
npx shadcn@latest init
npx shadcn@latest add button card input

```

##  Dependencias Adicionales

### Efectos Visuales (Confeti)

Utilizado para el juego de catequesis o animaciones de éxito:

```bash
npm install --save canvas-confetti
npm install --save-dev @types/canvas-confetti

```

### Tipografía

Las fuentes utilizadas en el diseño se gestionan a través de [Google Fonts](https://fonts.google.com/). Agrega las siguientes líneas en la etiqueta `<head>` de tu archivo `index.html`:

```html
<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
<link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
<link href="[https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;700&display=swap](https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;700&display=swap)" rel="stylesheet">

```

```

```


npm i react-router
https://reactrouter.com/start/data/installation
