import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './styles/StickyCards.module.css';
import { Card } from './components/Card';

const projects = [
    {
        title: "Matthias Leidinger",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        color: "#e1dad6",
        textColor: "#000"
    },
    {
        title: "Clément Chapillon",
        description: "This is a story on the border between reality and dreams, about the doubts and anxiety that the future holds.",
        color: "#c24b40",
        textColor: "#fff"
    },
    {
        title: "Zissou",
        description: "Though he views photography as a medium for storytelling, Zissou’s images don’t explicitly narrate a tale in the traditional sense.",
        color: "#1c1c1c",
        textColor: "#fff"
    },
    {
        title: "Mathias Svold",
        description: "The coastline of Denmark is incredibly long compared to its land area. It acts as a border between the sea and the soil.",
        color: "#88a388",
        textColor: "#000"
    },
];

const StickyCards = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.intro}>
                <h1 className={styles.introTitle}>Scroll to Stack</h1>
            </div>

            {projects.map((project, i) => {
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        total={projects.length}
                    />
                )
            })}
        </div>
    );
};

export default StickyCards;
