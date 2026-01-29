Fecha: 2026-01-28 19:10

| T | Archivo | Componente/Función | Descripción Forense Objetiva |
|:-:| :--- | :--- | :--- |
| **M** | `src/components/Playground/AnimationOne/hooks/useAnimationTransforms.js` | `useAnimationTransforms` | Se modifica la lógica del timeline. Se implementa lógica 'Multi-Phase Parallax' con 'Momentum Windows' (interludios de interacción mouse) en fases de lectura de texto (0.12-0.40, 0.56-0.64, 0.80-0.90). Se mantiene color `frontColor` en amarillo constante. Se añade lógica para reducir opacidad de `deepOpacity` (halo/fondo) en fase final (0.90-1.00). |
| **M** | `src/components/Playground/AnimationOne/hooks/useAnimationTransforms.js` | `frontScaleCombined` | Se ajusta la lógica de escala de la esfera para 'congelar' el crecimiento durante las ventanas de parallax activo. |

*Leyenda T (Tipo): N=Nuevo / M=Modificado / D=Borrado*
