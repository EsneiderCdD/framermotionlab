import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const TextLayerTwo = ({ opacity, y, scale }) => {
    return (
        <motion.div
            className={styles.textContainer}
            style={{ opacity, y, scale }}
        >
            <h1 className={styles.mainTitle}>
                <span className={styles.titleLine}>FRAMER</span>
                <span className={styles.titleLine}>MOTION</span>
                <span className={styles.titleLine}>LAB</span>
            </h1>
            <p className={styles.subtitle}>
                Explorando los límites de la animación web. <br />
                Una colección de experiencias interactivas y fluidas.
            </p>
        </motion.div>
    );
};
