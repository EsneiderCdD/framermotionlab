
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
    // "velemente la grilla continue... acercamiento leve hacia una profundidad"
    const gridScale = useTransform(scrollYProgress, [0, 1.0], [0.8, 1.5]); // Continues growing past screen edges (immersive)
    const gridRotateX = useTransform(scrollYProgress, [0, 1.0], [5, 30]); // Continues tilting

    // 4. Text Left Entry & Exit (FRAMER MOTION...)
    const textOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.30, 0.40], [0, 1, 1, 0]);
    const textY = useTransform(scrollYProgress, [0.15, 0.25], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.15, 0.25], [0.95, 1]);

    // 4.5. Author Text (NEW - By Esneider...)
    // Aparece justo cuando el anterior se desvanece o poco despues
    const authorOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.50, 0.60], [0, 1, 1, 0]);
    const authorY = useTransform(scrollYProgress, [0.35, 0.45], [30, 0]);
    const authorScale = useTransform(scrollYProgress, [0.35, 0.45], [0.95, 1]);

    // 5. Text Right Entry & Exit (Dynamic System...)
    // Shifted later to accommodate Author Text
    const textRightOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
    const textRightY = useTransform(scrollYProgress, [0.65, 0.75], [30, 0]);
    const textRightScale = useTransform(scrollYProgress, [0.65, 0.75], [0.95, 1]);

    // 6. Final Card Entry ("vaya apareciendo desde el centro")
    const cardOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const cardScale = useTransform(scrollYProgress, [0.85, 1.0], [0.5, 1]);
    // Note: cardRotation comes from internal mouse interaction, not scroll here.

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
        textRightScale,
        authorOpacity,
        authorY,
        authorScale,
        cardOpacity,
        cardScale
    };
};
