
import { useTransform } from 'framer-motion';

export const useAnimationTransforms = (scrollYProgress, layerProps) => {

    // --- TIMELINE SCHEDULE (1800vh) ---
    // 0.00 - 0.83: Previous Phases (Texts, Parallax, M Reveal, React Reveal) - Remapped
    // 0.83 - 0.90: React Fade Out (Clean)
    // 0.90 - 1.00: PHASE 8 - The Explosion (Yellow Screen)

    // Helper for remapping: Multiplier roughly 0.83 (1500/1800)

    // --- PHASE 1: ENTRANCE ---
    const deepScale = useTransform(scrollYProgress, (v) => {
        if (v < 0.06) return (v / 0.06);
        if (v < 0.65) return 1;
        // Sync reduction (Phase 6/7 equivalent, now at ~0.65-0.83)
        if (v < 0.83) return 1 - ((v - 0.65) / 0.18) * 0.9; // 1 -> 0.1
        return 0; // Gone
    });

    const deepOpacity = useTransform(scrollYProgress,
        [0, 0.05, 0.70, 0.83],
        [0, 0.3, 0.3, 0]
    );

    // --- PARALLAX ---
    const parallaxIntensity = useTransform(scrollYProgress,
        [0, 0.06, 0.20, 0.28, 0.32, 0.36, 0.40, 0.45, 0.50],
        [0, 1, 1, 0, 1, 0, 0, 1, 0]
    );

    function useDampedParallax(parallaxValue) {
        return useTransform([parallaxValue, parallaxIntensity], ([px, intensity]) => px * intensity);
    }
    const deepX = useDampedParallax(layerProps.deep.style.x);
    const deepY = useDampedParallax(layerProps.deep.style.y);
    const midX = useDampedParallax(layerProps.mid.style.x);
    const midY = useDampedParallax(layerProps.mid.style.y);
    const frontX = useDampedParallax(layerProps.front.style.x);
    const frontY = useDampedParallax(layerProps.front.style.y);

    // --- TEXTS (Compressed) ---
    // Text 1
    const text1Z = useTransform(scrollYProgress, [0.20, 0.24], [0, 1000]);
    const text1Opacity = useTransform(scrollYProgress, [0.20, 0.24], [1, 0]);

    // Text 2A
    const text2AFinalZ = useTransform(scrollYProgress, (v) => {
        if (v < 0.24) return -2000;
        if (v < 0.28) return -2000 + ((v - 0.24) / 0.04) * 2000;
        if (v < 0.32) return 0;
        if (v < 0.36) return ((v - 0.32) / 0.04) * 1000;
        return 1000;
    });
    const text2AFinalOpacity = useTransform(scrollYProgress, (v) => {
        if (v < 0.24) return 0;
        if (v < 0.28) return (v - 0.24) / 0.04;
        if (v < 0.32) return 1;
        if (v < 0.36) return 1 - (v - 0.32) / 0.04;
        return 0;
    });

    // Text 2B
    const text2BZ = useTransform(scrollYProgress, (v) => {
        if (v < 0.36) return -2000;
        if (v < 0.40) return -2000 + ((v - 0.36) / 0.04) * 2000;
        if (v < 0.45) return 0;
        if (v < 0.50) return ((v - 0.45) / 0.05) * 1000;
        return 1000;
    });

    const text2BOpacity = useTransform(scrollYProgress, (v) => {
        if (v < 0.36) return 0;
        if (v < 0.40) return (v - 0.36) / 0.04;
        if (v < 0.45) return 1;
        if (v < 0.50) return 1 - (v - 0.45) / 0.05;
        return 0;
    });


    // --- GLOBAL SPHERE ANIMATION ---

    // Color: 
    // 0-0.5: Yellow Weak
    // 0.5-0.65: Yellow Intense (#FFEF00)
    // 0.65-0.83: White (#FFFFFF) - React Phase
    // 0.83-0.90: White -> Yellow Intense (#FFEF00) - Explosion Prep
    // 0.90-1.00: Yellow Intense (#FFEF00) - Explosion Fill
    const frontColor = useTransform(scrollYProgress,
        [0, 0.5, 0.65, 0.83, 0.90, 1.0],
        ["#ffe10058", "#ffe10058", "#FFEF00", "#FFFFFF", "#FFEF00", "#FFEF00"]
    );

    // Scale Logic
    const frontScaleCombined = useTransform(scrollYProgress, (v) => {
        // --- PREVIOUS PHASES (Compressed/Remapped) ---
        if (v < 0.06) return 0.1 + (v / 0.06) * 0.9;
        if (v < 0.20) return 1;
        if (v < 0.28) return 1.2;
        if (v < 0.32) return 1.2;
        if (v < 0.40) return 1.3;
        if (v < 0.45) return 1.3;
        if (v < 0.50) return 1.3;

        // Reduction (Was Phase 6)
        if (v < 0.65) return 1.3 - ((v - 0.50) / 0.15) * 0.7; // 1.3 -> 0.6

        // React Evolution (Was Phase 7) - White Sphere Shrinks
        // 0.65 -> 0.83
        if (v < 0.83) return 0.6 - ((v - 0.65) / 0.18) * 0.5; // 0.6 -> 0.1

        // React Exit & Prep (0.83 - 0.88) - Hold tiny
        // We start expanding slightly before React is fully gone for smooth mix?
        // Or wait. Let's wait.
        if (v < 0.88) return 0.1;

        // --- PHASE 8: EXPLOSION (0.88 - 1.00) ---
        // 0.1 -> 50 (Massive expansion to fill screen)
        // Using power curve for "explosive" feel 
        return 0.1 + Math.pow((v - 0.88) / 0.12, 3) * 60;
    });

    // --- LOGOS ---

    // Logo M: Reveal 0.55-0.60, Hold, Fade Out 0.65-0.70
    const logoOpacity = useTransform(scrollYProgress,
        [0.55, 0.60, 0.65, 0.70],
        [0, 1, 1, 0]
    );

    // React Logo: Reveal 0.70-0.75, Hold, Fade Out 0.83-0.88
    const reactOpacity = useTransform(scrollYProgress,
        [0.70, 0.75, 0.83, 0.88],
        [0, 1, 1, 0]
    );

    return {
        deepScale, deepOpacity, deepX, deepY,
        midX, midY,
        frontX, frontY, frontScaleCombined, frontColor,
        text1Z, text1Opacity,
        text2AFinalZ, text2AFinalOpacity,
        text2BZ, text2BOpacity,
        logoOpacity, reactOpacity
    };
};
