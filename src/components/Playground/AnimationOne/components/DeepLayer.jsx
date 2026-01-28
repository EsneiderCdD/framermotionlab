
import { motion } from 'framer-motion';
import styles from '../styles/AnimationOne.module.css';

export const DeepLayer = ({ scale, opacity, x, y }) => {
    return (
        <motion.div
            className={`${styles.layer} ${styles.layerDeep}`}
            style={{
                scale,
                opacity,
                x: "-50%",
                y: "-50%",
                border: 'none',
                background: 'transparent'
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    x,
                    y
                }}
                className={styles.visualDeep}
            />
        </motion.div>
    );
};
