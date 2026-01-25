import { motion } from 'framer-motion';
import { useTorch } from './hook/useTorch';
import styles from './styles/TorchEffect.module.css';

const TorchEffect = () => {
    const { handleMouseMove, lightLayerProps } = useTorch();

    return (
        <div className={styles.container} onMouseMove={handleMouseMove}>

            {/* 1. Capa Oscura (Base) */}
            <div className={styles.darkLayer}>
                <h2 className={styles.titleDark}>
                    Los pequeños detalles<br />
                    construyen grandes momentos
                </h2>
                <p className={styles.subtitleDark}>
                    y la verdadera magia reside<br />
                    en lo que a veces no vemos.
                </p>
            </div>

            {/* 2. Capa de Luz (Revelación) */}
            {/* Usamos motion.div aquí para aplicar la máscara dinámica de alto rendimiento */}
            <motion.div
                className={styles.lightLayer}
                {...lightLayerProps}
            >
                <div className={styles.lightContent}>
                    <h2 className={styles.titleLight}>
                        Los pequeños detalles<br />
                        construyen grandes momentos
                    </h2>
                    <p className={styles.subtitleLight}>
                        y la verdadera magia reside<br />
                        en lo que a veces no vemos.
                    </p>
                </div>
            </motion.div>

        </div>
    );
};

export default TorchEffect;
