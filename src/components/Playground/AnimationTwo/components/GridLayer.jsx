import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const GridLayer = ({ opacity, scale, rotateX = 0, rotateY = 0 }) => {
    return (
        <motion.div
            className={styles.grid}
            style={{
                opacity,
                scale,
                rotateX,
                rotateY,
                perspective: 1000
            }}
        />
    );
};
