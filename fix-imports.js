const fs = require('fs');
const path = require('path');

// Función para procesar un archivo
function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Patrones de reemplazo
  const replacements = [
    // Radix UI components
    [/@radix-ui\/react-([^@]+)@[0-9.]+/g, '@radix-ui/react-$1'],
    // Lucide React
    [/lucide-react@[0-9.]+/g, 'lucide-react'],
    // Class Variance Authority
    [/class-variance-authority@[0-9.]+/g, 'class-variance-authority'],
    // Other packages
    [/react-hook-form@[0-9.]+/g, 'react-hook-form'],
    [/react-day-picker@[0-9.]+/g, 'react-day-picker'],
    [/embla-carousel-react@[0-9.]+/g, 'embla-carousel-react'],
    [/recharts@[0-9.]+/g, 'recharts'],
    [/cmdk@[0-9.]+/g, 'cmdk'],
    [/vaul@[0-9.]+/g, 'vaul'],
    [/input-otp@[0-9.]+/g, 'input-otp'],
    [/next-themes@[0-9.]+/g, 'next-themes'],
    [/sonner@[0-9.]+/g, 'sonner'],
    [/react-resizable-panels@[0-9.]+/g, 'react-resizable-panels']
  ];
  
  // Aplicar reemplazos
  replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });
  
  // Escribir el archivo modificado
  fs.writeFileSync(filePath, content);
  console.log(`Fixed imports in: ${filePath}`);
}

// Función para procesar directorio recursivamente
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      fixImportsInFile(fullPath);
    }
  });
}

// Procesar el directorio src/components/ui
const uiDir = path.join(__dirname, 'src', 'components', 'ui');
if (fs.existsSync(uiDir)) {
  console.log('Fixing imports in UI components...');
  processDirectory(uiDir);
  console.log('Done!');
} else {
  console.log('UI directory not found');
}
