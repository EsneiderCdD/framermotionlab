
import { useTransform } from 'framer-motion';

export const useAnimationTwoTransforms = (scrollYProgress) => {

    // --- TIMELINE (500vh) ---
    // 0.00 - 0.10: Start (Solid Yellow)
    // 0.10 - 0.40: Transition to Dark (Yellow Opacity 1->0, Dark Opacity 0->1)
    // 0.40 - 1.00: Grid Entry & Movement

    // 1. Background State (Continuous Yellow)
    const yellowOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Always visible
    // Dark layer not used for now, but keeping prop if needed or just remove.

    // 2. Grid Entry
    // Appear faster ("levemente... mas rapido")
    const gridOpacity = useTransform(scrollYProgress, [0.0, 0.15], [0, 1]);

    // 3. Grid Movement (Simulate flight or depth)
    // "mas visual, mas profundidad" -> Increased range again, balanced.
    const gridScale = useTransform(scrollYProgress, [0, 1.0], [0.8, 1.1]); // Grows to >1.0 for immersion
    const gridRotateX = useTransform(scrollYProgress, [0, 1.0], [5, 25]); // Tilt increases noticeably to show depth

    // 4. Text Left Entry & Exit
    const textOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.45, 0.55], [0, 1, 1, 0]); // Fade IN then OUT
    const textY = useTransform(scrollYProgress, [0.15, 0.35], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.15, 0.35], [0.95, 1]);

    // 5. Text Right Entry (New Phase)
    const textRightOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const textRightY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);
    const textRightScale = useTransform(scrollYProgress, [0.6, 0.8], [0.95, 1]);

    return {
        yellowOpacity,
        gridOpacity,
        gridScale,
        gridRotateX,
        textOpacity,
        textY,
        textScale,
        textRightOpacity,
        textRightY,
        textRightScale
    };
};
