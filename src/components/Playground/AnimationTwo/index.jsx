
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import styles from './styles/AnimationTwo.module.css';
import { GridLayer } from './components/GridLayer';
import { TextLayerTwo } from './components/TextLayerTwo';
import { TextLayerAuthor } from './components/TextLayerAuthor';
import { TextLayerRight } from './components/TextLayerRight';
import { TiltCardLayer } from './components/TiltCardLayer';
import { useAnimationTwoTransforms } from './hooks/useAnimationTwoTransforms';

const AnimationTwo = ({ scrollContainer }) => {
    // ... refs ...
    const scrollerRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollContainer,
        offset: ["start start", "end end"]
    });

    const {
        yellowOpacity,
        gridOpacity,
        gridScale,
        gridRotateX,
        textOpacity,
        textY,
        textScale,
        authorOpacity, // New Author Text Params
        authorY,
        authorScale,
        textRightOpacity,
        textRightY,
        textRightScale,
        cardOpacity,
        cardScale
    } = useAnimationTwoTransforms(scrollYProgress);

    return (
        <div ref={scrollerRef} className={styles.viewport}>
            <div ref={containerRef} className={styles.track} style={{ height: '500vh' }}> {/* Extended height to 500vh for slower feel */}
                <div className={styles.stickyWrapper}>
                    <div className={styles.container} style={{ perspective: '1000px' }}>

                        {/* Layer 1: Yellow Background */}
                        <motion.div
                            className={styles.layerYellow}
                            style={{ opacity: yellowOpacity }}
                        />

                        {/* Layer 3: Grid */}
                        <GridLayer
                            opacity={gridOpacity}
                            scale={gridScale}
                            rotateX={gridRotateX}
                        />

                        {/* Layer 4: Text Content Left */}
                        <TextLayerTwo
                            opacity={textOpacity}
                            y={textY}
                            scale={textScale}
                        />

                        {/* Layer 4.5: Author Text Content (Below Left) */}
                        <TextLayerAuthor
                            opacity={authorOpacity}
                            y={authorY}
                            scale={authorScale}
                        />

                        {/* Layer 5: Text Content Right */}
                        <TextLayerRight
                            opacity={textRightOpacity}
                            y={textRightY}
                            scale={textRightScale}
                        />

                        {/* Layer 6: Final Interactive Card */}
                        <TiltCardLayer
                            opacity={cardOpacity}
                            scale={cardScale}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimationTwo;
