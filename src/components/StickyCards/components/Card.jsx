import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/StickyCards.module.css';

export const Card = ({ i, title, description, color, textColor, range, targetScale, total }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // El truco está aquí:
    // A medida que scrolleamos, queremos que la tarjeta anterior se escale un poquito para abajo
    // O queremos que esta tarjeta, al entrar, haga un efecto de "entrar en escena"
    // El ejemplo original usaba esto para el scale de entrada tipo "Deck"

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div
                className={styles.card}
                style={{
                    backgroundColor: color,
                    color: textColor,
                    scale: scale, // Efecto simple pero efectivo
                    top: `calc(-10% + ${i * 25}px)` // El offset de apilado clásico
                }}
            >
                <div className={styles.cardBody}>
                    <div className={styles.imagePlaceholder}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: textColor,
                            opacity: 0.1,
                            borderRadius: '20px'
                        }} />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.cardTitle}>{title}</h2>
                        <p className={styles.cardDescription}>{description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
