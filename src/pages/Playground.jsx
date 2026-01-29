import React, { useRef } from 'react';
import AnimationOne from '../components/Playground/AnimationOne';
import AnimationTwo from '../components/Playground/AnimationTwo';
import styles from './Playground.module.css';

const Playground = () => {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} className={styles.mainContainer}>
            <AnimationOne scrollContainer={scrollRef} />
            <AnimationTwo scrollContainer={scrollRef} />
        </div>
    );
};

export default Playground;
