import styles from '../styles/HorizontalScroll.module.css';

export const Card = ({ card }) => {
    return (
        <div className={styles.card}>
            <span className={styles.cardId}>{card.id}</span>
            <span className={styles.cardTitle}>{card.title}</span>
        </div>
    );
};
