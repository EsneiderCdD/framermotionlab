import { useMotionValue, useMotionTemplate } from 'framer-motion';

export const useTorch = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    };

    // Creamos el template dinámico para la máscara.
    // Framer Motion actualiza esto directamente en el DOM sin re-renders de React.
    const maskImage = useMotionTemplate`radial-gradient(circle 250px at ${x}px ${y}px, black 0%, transparent 100%)`;

    return {
        handleMouseMove,
        // Retornamos props listas para aplicarse al elemento 'light'
        lightLayerProps: {
            style: {
                maskImage,
                WebkitMaskImage: maskImage // Soporte para Safari/Chrome basados en Webkit
            }
        }
    };
};
