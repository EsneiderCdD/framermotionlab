
import { motion } from 'framer-motion';
import styles from '../styles/AnimationOne.module.css';

export const SphereLayer = ({ scale, backgroundColor, x, y }) => {
    return (
        <motion.div
            className={`${styles.layer} ${styles.layerFront}`}
            style={{
                scale,
                backgroundColor,
                x: "-50%",
                y: "-50%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    x,
                    y
                }}
            />
        </motion.div>
    );
};
