import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationTwo.module.css';

export const GridLayer = ({ opacity, scale, rotateX = 0, rotateY = 0, rotate = 0 }) => {
    return (
        <motion.div
            className={styles.grid}
            style={{
                opacity,
                scale,
                rotateX,
                rotateY,
                rotate, // Z-rotation
                perspective: 1000
            }}
        />
    );
};
