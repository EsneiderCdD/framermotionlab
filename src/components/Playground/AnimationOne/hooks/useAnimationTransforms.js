import { useTransform } from 'framer-motion';

export const useAnimationTransforms = (scrollYProgress, layerProps) => {

    // --- TIMELINE SCHEDULE (900vh) ---
    // 0.00 - 0.12: Entrance
    // 0.12 - 0.40: Text 1 Read (Window 1)
    // 0.40 - 0.48: Text 1 Exit
    // 0.48 - 0.56: Text 2A Enter
    // 0.56 - 0.64: Text 2A Read (Window 2)
    // 0.64 - 0.72: Text 2A Exit
    // 0.72 - 0.80: Text 2B Enter
    // 0.80 - 0.90: Text 2B Read (Window 3)
    // 0.90 - 1.00: Text 2B Exit + Halo Reduce

    // --- PHASE 1: ENTRANCE (0% - 12%) ---
    const deepScale = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

    // --- MULTI-PHASE PARALLAX LOGIC ---
    const parallaxIntensity = useTransform(scrollYProgress,
        // W1(0.12-0.40) -> OFF(0.40-0.56) -> W2(0.56-0.64) -> OFF(0.64-0.80) -> W3(0.80-0.90) -> OFF(0.90+)
        [0, 0.12, 0.40, 0.56, 0.64, 0.72, 0.80, 0.90, 1],
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

    // --- TEXT 1 (0.12 - 0.48) ---
    const text1Z = useTransform(scrollYProgress, [0.40, 0.48], [0, 1000]);
    const text1Opacity = useTransform(scrollYProgress, [0.40, 0.48], [1, 0]);

    // --- TEXT 2A: "Y es en la pausa..." (0.48 - 0.72) ---
    const text2AFinalZ = useTransform(scrollYProgress, (v) => {
        if (v < 0.48) return -2000;
        if (v < 0.56) return -2000 + ((v - 0.48) / 0.08) * 2000; // Enter
        if (v < 0.64) return 0; // Hold (Window 2)
        if (v < 0.72) return ((v - 0.64) / 0.08) * 1000; // Exit
        return 1000;
    });
    const text2AFinalOpacity = useTransform(scrollYProgress, (v) => {
        if (v < 0.48) return 0;
        if (v < 0.56) return (v - 0.48) / 0.08;
        if (v < 0.64) return 1;
        if (v < 0.72) return 1 - (v - 0.64) / 0.08;
        return 0;
    });

    // --- TEXT 2B: "para transformar..." (0.72 - 1.0) ---
    // Enter: 0.72 - 0.80
    // Read: 0.80 - 0.90 (Window 3)
    // Exit: 0.90 - 1.00 (FlyThrough)

    // Z-Axis Logic
    const text2BZ = useTransform(scrollYProgress, (v) => {
        if (v < 0.72) return -2000;
        if (v < 0.80) return -2000 + ((v - 0.72) / 0.08) * 2000; // Enter
        if (v < 0.90) return 0; // Hold (Window 3)
        if (v < 1.00) return ((v - 0.90) / 0.10) * 1000; // Exit
        return 1000;
    });

    const text2BOpacity = useTransform(scrollYProgress, (v) => {
        if (v < 0.72) return 0;
        if (v < 0.80) return (v - 0.72) / 0.08;
        if (v < 0.90) return 1;
        if (v < 1.00) return 1 - (v - 0.90) / 0.10;
        return 0;
    });


    // --- GLOBAL SPHERE ANIMATION ---
    // Color: Keeps Yellow (NO ORANGE TRANSITION)
    const frontColor = useTransform(scrollYProgress, [0, 1], ["#fffde7", "#ffe10058"]);

    // Scale Logic: Pause during Windows (0.12-0.40, 0.56-0.64, 0.80-0.90)
    const frontScaleCombined = useTransform(scrollYProgress, (v) => {
        // Window 1
        if (v < 0.12) return 0.1 + (v / 0.12) * 0.9;
        if (v < 0.40) return 1;

        // Transition 1
        if (v < 0.56) return 1 + ((v - 0.40) / 0.16) * 0.2; // 1 -> 1.2

        // Window 2
        if (v < 0.64) return 1.2;

        // Transition 2 (Heavy)
        if (v < 0.80) return 1.2 + ((v - 0.64) / 0.16) * 0.1; // 1.2 -> 1.3

        // Window 3
        if (v < 0.90) return 1.3;

        // FINAL EXIT: Hold
        return 1.3;
    });

    // --- HALO/BACKGROUND REDUCTION (0.90 - 1.00) ---
    // The "Big Blurry Halo" is the Layer Deep. We fade it out here.
    const deepOpacity = useTransform(scrollYProgress,
        [0, 0.08, 0.90, 1.00],
        [0, 0.3, 0.3, 0] // Fade In -> Hold -> Fade Out
    );

    return {
        deepScale, deepOpacity, deepX, deepY,
        midX, midY,
        frontX, frontY, frontScaleCombined, frontColor,
        text1Z, text1Opacity,
        text2AFinalZ, text2AFinalOpacity,
        text2BZ, text2BOpacity
    };
};
