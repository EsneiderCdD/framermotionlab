
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const TiltCardLayer = ({ opacity, scale, rotateYGlobal }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

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

    return (
        <motion.div
            ref={ref}
            className={styles.cardContainer} // Wrapper for positioning and global animation
            style={{
                opacity,
                scale,
                // Ensure it's centered and on top
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                zIndex: 20 // Higher than grid (z=3) and text (z=10)
            }}
        >
            <motion.div
                className={styles.card}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY
                }}
            >
                <div className={styles.cardContent}>
                    {/* 1. Animated Sphere */}
                    <div className={styles.sphereContainer}>
                        <motion.div
                            className={styles.animatedSphere}
                            animate={{ x: [-20, 20, -20] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* 2. Dummy Buttons */}
                    <div className={styles.buttonGroup}>
                        <div className={styles.dummyButton}></div>
                        <div className={styles.dummyButton}></div>
                    </div>

                    {/* 3. Bottom Text */}
                    <div className={styles.bottomText}>
                        <p>Explicaciones y código listo<br />para revelar sus secretos</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
