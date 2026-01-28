
import { useTransform } from 'framer-motion';

export const useAnimationTransforms = (scrollYProgress, layerProps) => {

    // --- PHASE 1: ENTRANCE (0% - 15%) ---
    const deepScale = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const deepOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.3]);

    // --- PHASE 2: PARALLAX & DEVELOPMENT (15% - 50%) ---
    // Parallax Intensity: 0 -> 1 -> 1 -> 0
    // Disabled during Phase 1, Active during Phase 2, Disabled for FlyThrough
    const parallaxIntensity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.6], [0, 1, 1, 0]);

    // Helper to dampen parallax
    function useDampedParallax(parallaxValue) {
        return useTransform([parallaxValue, parallaxIntensity], ([px, intensity]) => px * intensity);
    }

    const deepX = useDampedParallax(layerProps.deep.style.x);
    const deepY = useDampedParallax(layerProps.deep.style.y);
    const midX = useDampedParallax(layerProps.mid.style.x);
    const midY = useDampedParallax(layerProps.mid.style.y);
    const frontX = useDampedParallax(layerProps.front.style.x);
    const frontY = useDampedParallax(layerProps.front.style.y);

    // --- PHASE 3: TEXT 1 EXIT & TEXT 2A ENTRY (50% - 70%) ---
    // Text 1: "Los pequeños detalles..." -> Exits
    const text1Z = useTransform(scrollYProgress, [0.5, 0.6], [0, 1000]);
    const text1Opacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
    // Optimization: Hide when fully transparent/gone to save render
    // We can map opacity 0 -> display "none" using a custom transform if supported, 
    // or just rely on opacity + pointerEvents usually.
    // For now, let's keep it simple Math. 

    // Text 2A: "Y es en la pausa..." -> Enters (Zoom In)
    const text2AZ = useTransform(scrollYProgress, [0.55, 0.7], [-2000, 0]);
    const text2AOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

    // --- PHASE 4: TEXT 2A EXIT & TEXT 2B ENTRY (70% - 90%) ---
    // Text 2A: Exits FlyThrough
    // Logic: Enter (-2000 -> 0) -> Hold (0) -> Exit (0 -> 1000)
    const text2AFinalZ = useTransform(scrollYProgress, (v) => {
        if (v < 0.55) return -2000;
        if (v < 0.7) return -2000 + ((v - 0.55) / 0.15) * 2000; // -2000 -> 0
        if (v < 0.75) return 0; // Hold small moment
        if (v < 0.85) return ((v - 0.75) / 0.10) * 1000; // 0 -> 1000
        return 1000;
    });

    // Opacity Logic for Text 2A handles both entrance and exit
    const text2AFinalOpacity = useTransform(scrollYProgress, (v) => {
        if (v < 0.55) return 0;
        if (v < 0.65) return (v - 0.55) / 0.10; // 0 -> 1
        if (v < 0.75) return 1;
        if (v < 0.85) return 1 - (v - 0.75) / 0.10; // 1 -> 0
        return 0;
    });

    // Text 2B: "para transformar lo ordinario..." -> Enters
    const text2BZ = useTransform(scrollYProgress, [0.8, 0.95], [-2000, 0]);
    const text2BOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);


    // --- GLOBAL SPHERE ANIMATION ---
    // Color: Yellow -> Orange (Phase 4)
    const frontColor = useTransform(scrollYProgress,
        [0, 0.15, 0.7, 0.9],
        ["#fffde7", "#ffe10058", "#ffe10058", "#ff6b0080"]
    );

    // Scale Logic
    const frontScaleCombined = useTransform(scrollYProgress, (v) => {
        if (v < 0.15) return 0.1 + (v / 0.15) * 0.9; // 0.1 -> 1
        if (v < 0.55) return 1; // Static
        if (v < 0.7) return 1 + ((v - 0.55) / 0.15) * 0.2; // 1 -> 1.2
        if (v < 0.8) return 1.2;
        if (v < 0.95) return 1.2 + ((v - 0.8) / 0.15) * 0.1; // 1.2 -> 1.3 (Heavy)
        return 1.3;
    });

    return {
        deepScale, deepOpacity, deepX, deepY,
        midX, midY,
        frontX, frontY, frontScaleCombined, frontColor,
        text1Z, text1Opacity,
        text2AFinalZ, text2AFinalOpacity,
        text2BZ, text2BOpacity
    };
};
