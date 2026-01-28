import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '../Hero/hook/useParallax';
import styles from './styles/AnimationOne.module.css';

const AnimationOne = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax Hook
    const { handleMouseMove, layerProps } = useParallax();

    // --- SCROLL ANIMATIONS (The "Story" - Growing/Shrinking) ---
    // Deep Layer matches scroll: 0 -> 1 scale
    const deepScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const deepOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.3]);

    // Front Sphere matches scroll: 0.1 -> 1 scale
    const frontScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    // Front Color: Off-white -> Yellow
    const frontColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["#fffde7", "#ffe10058"]
    );

    // --- PARALLAX MODULATION (The "Development") ---
    // We want Parallax to be 0 when Scroll is 0, and Full when Scroll is 1.
    // This creates the effect that the element "gains" 3D movement as it emerges.

    // Helper to dampen a motion value based on scroll progress
    function useDampedParallax(parallaxValue) {
        return useTransform([parallaxValue, scrollYProgress], ([px, progress]) => {
            // If we are at the top (progress 0), parallax is 0.
            // If we are at the bottom (progress 1), parallax is full (px).
            // We can even make it start later, e.g., only after 50% scroll.
            // Let's make it gradual:
            return px * progress;
        });
    }

    // Create dampened values for each layer
    const deepX = useDampedParallax(layerProps.deep.style.x);
    const deepY = useDampedParallax(layerProps.deep.style.y);

    const midX = useDampedParallax(layerProps.mid.style.x);
    const midY = useDampedParallax(layerProps.mid.style.y);

    const frontX = useDampedParallax(layerProps.front.style.x);
    const frontY = useDampedParallax(layerProps.front.style.y);


    return (
        <div
            ref={containerRef}
            style={{ height: '300vh', position: 'relative' }}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.stickyWrapper}>
                <div className={styles.container}>
                    <div className={styles.scene}>

                        {/* 1. BACKGROUND LAYER */}
                        {/* Wrapper: Handles Scroll Scale & Centering */}
                        <motion.div
                            className={`${styles.layer} ${styles.layerDeep}`}
                            style={{
                                scale: deepScale,
                                opacity: deepOpacity,
                                x: "-50%", // Always centered
                                y: "-50%",
                                border: 'none',
                                background: 'transparent'
                            }}
                        >
                            {/* Child: Handles Damped Parallax */}
                            <motion.div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    x: deepX,
                                    y: deepY
                                }}
                                className={styles.visualDeep}
                            />
                        </motion.div>

                        {/* 2. TEXT LAYER */}
                        {/* Wrapper: Handles Centering (No scroll scale on text itself usually, or strictly static) */}
                        <motion.div
                            className={`${styles.layer} ${styles.layerMid}`}
                            style={{
                                x: "-50%", // FIXED: Center the wrapper properly
                                y: "-50%",
                            }}
                        >
                            {/* Child: Handles Damped Parallax */}
                            <motion.div style={{ x: midX, y: midY }}>
                                <h2 className={styles.titleDark}>
                                    Los pequeños detalles<br />
                                    construyen grandes momentos
                                </h2>
                                <p className={styles.subtitleDark}>
                                    y la verdadera magia reside<br />
                                    en lo que a veces no vemos.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* 3. FRONT SPHERE LAYER */}
                        {/* Wrapper: Handles Scroll Scale, Color & Centering */}
                        <motion.div
                            className={`${styles.layer} ${styles.layerFront}`}
                            style={{
                                scale: frontScale,
                                backgroundColor: frontColor,
                                x: "-50%", // Always centered
                                y: "-50%",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Child: Handles Damped Parallax */}
                            <motion.div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    x: frontX,
                                    y: frontY
                                }}
                            />
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimationOne;
