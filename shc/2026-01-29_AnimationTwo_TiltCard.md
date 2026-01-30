# Protocolo SHC - Registro de Cambios
Fecha: 2026-01-29 20:38

| T | Archivo | Componente/Función | Descripción Forense Objetiva |
|:-:| :--- | :--- | :--- |
| **N** | `.../AnimationTwo/components/TiltCardLayer.jsx` | `TiltCardLayer` | Nuevo componente. Tarjeta interactiva con efecto de inclinación 3D (tilt) controlado por la posición del mouse (`onMouseMove`). |
| **M** | `.../AnimationTwo/index.jsx` | `AnimationTwo` | Implementación del renderizado de `TiltCardLayer` e importación del mismo. Se pasan props `opacity` y `scale`. |
| **M** | `.../AnimationTwo/hooks/useAnimationTwoTransforms.js` | `useAnimationTwoTransforms` | Adición de transformaciones para tarjeta final: `cardOpacity` (entry 0.85-0.95) y `cardScale` (entry 0.85-1.0). |
| **M** | `.../AnimationTwo/components/GridLayer.jsx` | `GridLayer` | Se añaden props `rotateY` y `rotate` (z-axis) al componente y a los estilos inline. |
| **M** | `.../AnimationTwo/styles/AnimationTwo.module.css` | `.cardContainer`, `.card`, `.cardContent` | Definición de estilos para el contenedor, cuerpo y contenido de la nueva tarjeta tilt. |
