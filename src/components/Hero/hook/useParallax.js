import { useMotionValue, useTransform } from 'framer-motion';

export const useParallax = () => {
    // 1. Valores de movimiento
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Manejador del evento
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const centerX = innerWidth / 2;
        const centerY = innerHeight / 2;

        const xFactor = (clientX - centerX) / centerX;
        const yFactor = (clientY - centerY) / centerY;

        mouseX.set(xFactor);
        mouseY.set(yFactor);
    };

    // 3. Definición de capas y sus intensidades
    // Deep: Lejos (se mueve poco)
    const deep = {
        x: useTransform(mouseX, [-1, 1], [-20, 20]),
        y: useTransform(mouseY, [-1, 1], [-20, 20])
    };

    // Mid: Medio (se mueve moderadamente opuesto)
    const mid = {
        x: useTransform(mouseX, [-1, 1], [40, -40]),
        y: useTransform(mouseY, [-1, 1], [40, -40])
    };

    // Front: Cerca (se mueve mucho opuesto)
    const front = {
        x: useTransform(mouseX, [-1, 1], [80, -80]),
        y: useTransform(mouseY, [-1, 1], [80, -80])
    };

    // 4. Template para mantener el centrado CSS
    const transformTemplate = ({ x, y }) => {
        return `translate(-50%, -50%) translate(${x}, ${y})`;
    };

    return {
        handleMouseMove,
        layerProps: { // Helper para inyectar props rápido
            deep: { style: deep, transformTemplate },
            mid: { style: mid, transformTemplate },
            front: { style: front, transformTemplate }
        }
    };
};
