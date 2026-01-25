import { motion } from 'framer-motion';
import { useParallax } from './hook/useParallax';
import styles from './styles/MouseParallax.module.css';

const MouseParallax = () => {
    const { handleMouseMove, layerProps } = useParallax();

    return (
        <div
            className={styles.container}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.scene}>
                {/* Layer 1: Background */}
                <motion.div
                    className={`${styles.layer} ${styles.layerDeep}`}
                    {...layerProps.deep}
                />

                {/* Layer 2: Text */}
                <motion.div
                    className={`${styles.layer} ${styles.layerMid}`}
                    {...layerProps.mid}
                >
                    Framer Motion
                </motion.div>

                {/* Layer 3: Circle */}
                <motion.div
                    className={`${styles.layer} ${styles.layerFront}`}
                    {...layerProps.front}
                />
            </div>
        </div>
    );
};

export default MouseParallax;
