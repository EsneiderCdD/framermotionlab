# Protocolo SIA (Scroll Interaction Architecture)

Este protocolo define la arquitectura estándar para la construcción de experiencias de "Scrollytelling" y animaciones interactivas complejas en Framer Motion Lab. Su objetivo es garantizar rendimiento, mantenibilidad y una gestión limpia de estados en conflicto (Scroll vs. Mouse).

## 1. Principios Fundamentales

### A. Segregación de Responsabilidades (Hierarchy Rule)
Jamás mezclar transformaciones conflictivas (ej. `scale` del scroll y `translate` del mouse) en el mismo Nodo DOM.
- **Padre (Wrapper):** Responsable del **Contexto Global** (Layout, Scroll, Opacidad, Escala General).
- **Hijo (Actor):** Responsable de la **Interacción Local** (Mouse Parallax, Hover, Tilt).

### B. Modulación de Estados (State Modulation)
La interacción no es binaria (ON/OFF), es **gradual**.
- Utilizar `useTransform` para modular la intensidad de los efectos secundarios basándose en el progreso del efecto principal.
- *Regla*: `IntensidadInteracción = InputUsuario * ProgresoScroll`.
- Esto asegura que al revertir el scroll, los estados se limpien matemáticamente a 0.

---

## 2. Anatomía de una Escena (Actores)

### 1. El Trigger (Detonador)
- **Herramienta:** `useScroll`
- **Función:** Provee la "línea de tiempo" (0 a 1).
- **Referencia:** Debe estar atado al contenedor físico (`track`) pero relativo al viewport (`scroller`).

### 2. Los Transformadores (Traductores)
- **Herramienta:** `useTransform`
- **Función:** Mapean `Tiempo (Scroll)` -> `Valor Visual`.
- **Ejemplo:** `const scale = useTransform(scrollY, [0, 1], [0.5, 1])`.

### 3. La Composición (Jerarquía)
```jsx
<Wrapper (Padre)>      // Controlado por Scroll
    style={{ scale }}  // Se encoge/crece
>
    <Actor (Hijo)>     // Controlado por Mouse
        style={{ x, y }} // Se mueve
    </Actor>
</Wrapper>
```

---

## 3. Workflow de Implementación

1.  **Estructura Estática:** Maquetar la escena final (CSS puro).
2.  **Definición del Viewport:** Crear el contenedor de scroll (`300vh` intent, `100vh` visual).
3.  **Animación Base:** Conectar el `useScroll` a las propiedades del Padre (`Wrapper`).
4.  **Integración de Interacción:** 
    - Crear hook de interacción (ej. `useParallax`).
    - Aplicar propiedades al Hijo (`Actor`).
5.  **Damping/Modulación:**
    - Crear transformaciones que multipliquen los valores del Hijo por el progreso del Padre.
    - Asegurar que `Progress = 0` implica `Effect = 0`.

---

## 4. Troubleshooting (Diagnóstico de Errores)

| Síntoma | Causa Probable | Solución |
| :--- | :--- | :--- |
| **"Salto" al revertir animation** | Conflicto de `transform` en el mismo nodo. | Separar en Padre/Hijo. Añadir `will-change`. |
| **Elemento descentrado** | Framer sobrescribe `translate(-50%, -50%)`. | Forzar `x: "-50%", y: "-50%"` en el `style` del Motion Component. |
| **Scroll bar visible** | CSS overflow mal configurado. | Usar `.viewport { scrollbar-width: none; }`. |
