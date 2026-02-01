import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const TextLayerAuthor = ({ opacity, y, scale }) => {
    return (
        <motion.div
            className={styles.authorContainer}
            style={{ opacity, y, scale }}
        >
            <p className={styles.authorName}>
                By esneider cadavid david
            </p>
            <p className={styles.authorGreeting}>
                "Espero que lo disfrutes, un saludo"
            </p>
        </motion.div>
    );
};
