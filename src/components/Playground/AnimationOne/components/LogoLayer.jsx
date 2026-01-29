
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationOne.module.css';
import logoM from '../../../../assets/m.svg'; // Adjust path relative to this file

export const LogoLayer = ({ opacity, scale = 1, x, y }) => {
    return (
        <motion.div
            className={styles.layer} // Use common layer class for centering
            style={{
                opacity,
                scale,
                width: 150, // Match Sphere size for relative sizing
                height: 150,
                x: "-50%", // Center on anchor
                y: "-50%",
                zIndex: 10, // Top layer
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none' // Let clicks pass through
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    x, // Apply parallax here if needed
                    y
                }}
            >
                <img
                    src={logoM}
                    alt="Logo M"
                    style={{
                        width: '60%', // Adjusted per user request (larger)
                        height: 'auto',
                        filter: 'brightness(0) saturate(100%)' // Ensure it's black or desire color if needed, relying on SVG default for now
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
