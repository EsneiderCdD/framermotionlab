import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const TextLayerRight = ({ opacity, y, scale }) => {
    return (
        <motion.div
            className={styles.textContainerRight}
            style={{ opacity, y, scale }}
        >
            <h1 className={styles.mainTitle} style={{ alignItems: 'flex-end', fontSize: '3.5rem' }}>
                <span className={styles.titleLine}>APRENDE DE</span>
                <span className={styles.titleLine}>ANIMACIONES</span>
                <span className={styles.titleLine}>WEB</span>
            </h1>
            <p className={styles.subtitle} style={{ textAlign: 'right' }}>
                Explora conceptos, aprende, visualiza <br />
                mientras creas y comparte tus animaciones!
            </p>
        </motion.div>
    );
};
