import { motion } from 'framer-motion';
import { useTilt } from './hook/useTilt';
import styles from './styles/Tilt.module.css';

const TiltEffect = () => {
    const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

    return (
        <div className={styles.container}>
            <div className={styles.grid} />

            <motion.div
                ref={ref}
                className={styles.card}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY
                }}
            >
                <div className={styles.cardContent}>
                    <motion.div
                        className={styles.circle}
                        animate={{ x: [-80, 80, -80] }} // Movimiento lineal de lado a lado
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default TiltEffect;
