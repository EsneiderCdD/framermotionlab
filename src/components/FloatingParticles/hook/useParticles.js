import { useMemo } from 'react';

const NUM_PARTICLES = 50;

export const useParticles = () => {
    // Generate static random data once to avoid re-renders changing positions
    const particles = useMemo(() => {
        return Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 1, // 1px to 5px
            xStart: Math.random() * 100, // 0% to 100%
            yStart: Math.random() * 100, // 0% to 100%
            duration: Math.random() * 10 + 10, // 10s to 20s (slow drift)
            delay: Math.random() * -20, // Negative delay for instant start
            opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6
        }));
    }, []);

    return { particles };
};
