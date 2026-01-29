import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AnimationOne.module.css';
import reactLogo from '../../../../assets/react.svg';

export const ReactLogoLayer = ({ opacity, x, y }) => {
    return (
        <motion.div
            className={styles.layer}
            style={{
                opacity,
                width: 150, // Match Sphere size context
                height: 150,
                x: "-50%",
                y: "-50%",
                zIndex: 11, // Above "M" logo
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none'
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    x,
                    y
                }}
            >
                <motion.img
                    src={reactLogo}
                    alt="React Logo"
                    style={{
                        width: '55%',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.8))' // Blue glow respecting alpha
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear"
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
