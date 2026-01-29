import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const TextLayerRight = ({ opacity, y, scale }) => {
    return (
        <motion.div
            className={styles.textContainerRight}
            style={{ opacity, y, scale }}
        >
            <h1 className={styles.mainTitle} style={{ alignItems: 'flex-end' }}>
                <span className={styles.titleLine}>DYNAMIC</span>
                <span className={styles.titleLine}>PERSPECTIVE</span>
                <span className={styles.titleLine}>SYSTEM</span>
            </h1>
            <p className={styles.subtitle} style={{ textAlign: 'right' }}>
                Profundidad simulada en tiempo real. <br />
                Una grilla infinita que responde a tu movimiento.
            </p>
        </motion.div>
    );
};
