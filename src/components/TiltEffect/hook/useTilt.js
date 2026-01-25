import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export const useTilt = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the raw mouse values using a spring physics simulation
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Map mouse position to rotation degrees
    // Range: [-0.5, 0.5] (normalized center) -> [-20deg, 20deg]
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return {
        ref,
        rotateX,
        rotateY,
        handleMouseMove,
        handleMouseLeave
    };
};
