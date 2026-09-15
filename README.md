# Playwright E-commerce Test Suite

Automated test suite para validar flujos críticos en aplicaciones e-commerce. 
Implementa best practices: Page Object Model, data-driven testing y reportes HTML.

## 🎯 Casos cubiertos
- **Login Flow** - Autenticación de usuario
- **Shopping Cart** - Agregar/remover items
- **Checkout** - Validación de compra completa

## 🛠️ Tech Stack
- **Playwright** 1.40+
- **TypeScript** 5.0+
- **Node.js** 18+

## 📦 Instalación
```bash
npm install
```

## ▶️ Ejecutar tests
```bash
# Modo headless
npm test

# Con UI interactiva
npm run test:ui

# Debug
npm run test:debug
```

## 📊 Reportes
Los reportes HTML se generan automáticamente en `/test-results/`

## 📂 Estructura
