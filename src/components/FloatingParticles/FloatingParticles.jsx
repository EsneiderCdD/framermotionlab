import { motion } from 'framer-motion';
import { useParticles } from './hook/useParticles';
import styles from './styles/FloatingParticles.module.css';

const FloatingParticles = () => {
    const { particles } = useParticles();

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.textTitle}>
                    FRAMER<br />
                    MOTION<br />
                    LAB
                </h1>
                <p className={styles.textSubtitle}>
                    Explorando los límites de la animación web.
                    Una colección de experiencias interactivas y fluidas.
                </p>
            </div>

            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={styles.particle}
                    style={{
                        width: p.size,
                        height: p.size,
                        top: `${p.yStart}%`,
                        left: `${p.xStart}%`,
                        // Alternamos entre dorado y blanco aleatoriamente para dar profundidad
                        backgroundColor: Math.random() > 0.5 ? '#c48912' : '#ffffff',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [p.opacity, 0, p.opacity],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
