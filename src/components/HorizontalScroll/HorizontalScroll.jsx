import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './styles/HorizontalScroll.module.css';
import { Card } from './components/Card';

const cards = [
    { title: "Vertical", id: "01" },
    { title: "To", id: "02" },
    { title: "Horizontal", id: "03" },
    { title: "Transformation", id: "04" },
    { title: "Perspective", id: "05" },
    { title: "Endless", id: "06" },
];

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <>
            <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#666', background: '#000' }}>
                Scroll Down to Enter Gallery ↓
            </div>

            <div ref={targetRef} className={styles.tallContainer}>
                <div className={styles.stickyWrapper}>
                    <motion.div style={{ x }} className={styles.cardContainer}>
                        {cards.map((card) => (
                            <Card key={card.id} card={card} />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#666', background: '#000' }}>
                Scroll Up to Return ↑
            </div>
        </>
    );
};

export default HorizontalScroll;
