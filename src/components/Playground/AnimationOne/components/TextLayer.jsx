
import { motion } from 'framer-motion';
import styles from '../styles/AnimationOne.module.css';

/**
 * Reusable Text Layer Component
 * Supports 3D Z-translation, Opacity, and Parallax (x, y)
 */
export const TextLayer = ({ x, y, z, opacity, children, zIndex = 2 }) => {
    return (
        <motion.div
            className={`${styles.layer} ${styles.layerMid}`}
            style={{
                x: "-50%",
                y: "-50%",
                z,
                opacity,
                zIndex
            }}
        >
            <motion.div style={{ x, y }}>
                {children}
            </motion.div>
        </motion.div>
    );
};
