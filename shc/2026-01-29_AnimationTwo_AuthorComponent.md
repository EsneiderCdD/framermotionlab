# Protocolo SHC - Registro de Cambios
Fecha: 2026-01-29 21:05
Referencia: Re-trabajo Tarea Nº 2 (Corrección: Componente Separado para Autor)

| T | Archivo | Componente/Función | Descripción Forense Objetiva |
|:-:| :--- | :--- | :--- |
| **N** | `.../AnimationTwo/components/TextLayerAuthor.jsx` | `TextLayerAuthor` | Nuevo componente para mostrar la firma ("By esneider...") y el saludo. Ubicado visualmente debajo del texto principal a la izquierda. |
| **M** | `.../AnimationTwo/styles/AnimationTwo.module.css` | `.authorContainer` | Se añaden estilos para posicionar el nuevo contenedor (`top: 45%`, `left: 10%`) y estilizar los textos internos. |
| **M** | `.../AnimationTwo/hooks/useAnimationTwoTransforms.js` | `useAnimationTwoTransforms` | Re-mapeo del timeline de animación. Se introduce `authorOpacity/Y/Scale` (0.35-0.60). Se desplaza el trigger de `TextLayerRight` (0.65-0.95) para evitar solapamiento. |
| **M** | `.../AnimationTwo/index.jsx` | `AnimationTwo` | Se extiende la altura del track a `500vh` para ralentizar la experiencia. Se importa e integra `TextLayerAuthor`. |
