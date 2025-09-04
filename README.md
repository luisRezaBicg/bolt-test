# Calculadora de Ahorros

Una aplicación web profesional para calcular y visualizar el crecimiento de tus ahorros con interés compuesto.

## 🚀 Características

- **Calculadora Interactiva**: Calcula el crecimiento de tus ahorros en tiempo real
- **Visualización de Datos**: Gráficos que muestran la evolución de tus ahorros año por año
- **Análisis Detallado**: Desglose de contribuciones vs. interés ganado
- **Diseño Responsivo**: Funciona perfectamente en móviles, tablets y desktop
- **Interfaz Profesional**: Diseño moderno inspirado en aplicaciones financieras

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** para desarrollo y build
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **GitHub Pages** para deployment

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/savings-calculator.git
cd savings-calculator
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🚀 Deployment a GitHub Pages

### Configuración Inicial

1. **Crea un repositorio en GitHub** con el nombre `savings-calculator`

2. **Configura GitHub Pages**:
   - Ve a Settings → Pages en tu repositorio
   - En "Source", selecciona "GitHub Actions"

3. **Sube tu código**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/savings-calculator.git
git push -u origin main
```

### Deployment Automático

El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente cuando haces push a la rama `main`. El sitio estará disponible en:

```
https://tu-usuario.github.io/savings-calculator/
```

### Deployment Manual (Alternativo)

Si prefieres hacer deployment manual:

```bash
npm run deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── SavingsForm.tsx     # Formulario de entrada
│   ├── ResultsDisplay.tsx  # Mostrar resultados
│   └── ProgressChart.tsx   # Gráfico de progreso
├── types/              # Definiciones TypeScript
│   └── savings.ts
├── utils/              # Utilidades y cálculos
│   └── calculations.ts
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Uso

1. **Ingresa tus datos**:
   - Monto inicial de inversión
   - Contribución mensual
   - Tasa de interés anual esperada
   - Período de tiempo en años

2. **Visualiza los resultados**:
   - Total final de ahorros
   - Desglose de contribuciones vs. interés
   - Gráfico año por año del crecimiento

3. **Analiza el impacto**:
   - Ve cómo el interés compuesto acelera tu crecimiento
   - Experimenta con diferentes escenarios
   - Planifica tu estrategia de ahorro

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run deploy` - Despliega a GitHub Pages (manual)

## 📝 Notas Importantes

- **Base URL**: El proyecto está configurado con `base: '/savings-calculator/'` para GitHub Pages
- **Responsive**: Diseñado mobile-first con breakpoints para tablet y desktop
- **Accesibilidad**: Incluye labels apropiados y navegación por teclado
- **Performance**: Optimizado para carga rápida y experiencia fluida

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

---

**¡Empieza a planificar tu futuro financiero hoy mismo! 💰**