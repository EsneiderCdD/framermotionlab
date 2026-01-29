import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useParallax } from '../../Hero/hook/useParallax';
import { useAnimationTransforms } from './hooks/useAnimationTransforms';
import styles from './styles/AnimationOne.module.css';

// Components
import { DeepLayer } from './components/DeepLayer';
import { SphereLayer } from './components/SphereLayer';
import { TextLayer } from './components/TextLayer';
import { LogoLayer } from './components/LogoLayer';
import { ReactLogoLayer } from './components/ReactLogoLayer';

const AnimationOne = () => {
    const scrollerRef = useRef(null);
    const containerRef = useRef(null);

    // Track scroll progress of the virtual track
    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollerRef,
        offset: ["start start", "end end"]
    });

    // Mouse Parallax Hook
    const { handleMouseMove, layerProps } = useParallax();

    // Get all calculated transforms from our custom hook
    const {
        deepScale, deepOpacity, deepX, deepY,
        midX, midY,
        frontX, frontY, frontScaleCombined, frontColor,
        text1Z, text1Opacity,
        text2AFinalZ, text2AFinalOpacity,
        text2BZ, text2BOpacity,
        logoOpacity,
        reactOpacity
    } = useAnimationTransforms(scrollYProgress, layerProps);

    return (
        <div ref={scrollerRef} className={styles.viewport} onMouseMove={handleMouseMove}>
            <div ref={containerRef} className={styles.track} style={{ height: '1800vh' }}>
                <div className={styles.stickyWrapper}>
                    <div className={styles.container}>
                        <div className={styles.scene}>

                            {/* Layer 1: Background Glow */}
                            <DeepLayer
                                scale={deepScale}
                                opacity={deepOpacity}
                                x={deepX}
                                y={deepY}
                            />

                            {/* Text 1: The Initial Idea */}
                            <TextLayer
                                x={midX}
                                y={midY}
                                z={text1Z}
                                opacity={text1Opacity}
                            >
                                <h2 className={styles.titleDark}>
                                    Los pequeños detalles<br />
                                    construyen grandes momentos
                                </h2>
                                <p className={styles.subtitleDark}>
                                    y la verdadera magia reside<br />
                                    en lo que a veces no vemos.
                                </p>
                            </TextLayer>

                            {/* Text 2A: The Pause */}
                            <TextLayer
                                x={midX}
                                y={midY}
                                z={text2AFinalZ}
                                opacity={text2AFinalOpacity}
                                zIndex={2}
                            >
                                <h2 className={styles.titleDark}>
                                    Y es en la pausa<br />
                                    donde encontramos el ritmo
                                </h2>
                            </TextLayer>

                            {/* Text 2B: The Transformation (Thin, Elegant) */}
                            <TextLayer
                                x={midX}
                                y={midY}
                                z={text2BZ}
                                opacity={text2BOpacity}
                                zIndex={3}
                            >
                                <h2 className={styles.titleDark} style={{ fontSize: '3rem', fontWeight: 300 }}>
                                    para transformar lo ordinario<br />
                                    en algo extraordinario.
                                </h2>
                            </TextLayer>

                            {/* Layer 3: The Sphere */}
                            <SphereLayer
                                scale={frontScaleCombined}
                                backgroundColor={frontColor}
                                x={frontX}
                                y={frontY}
                            />

                            {/* Layer 4: The Logo Reveal (Centered in Sphere) */}
                            <LogoLayer
                                opacity={logoOpacity}
                                x={frontX}
                                y={frontY}
                            />

                            {/* Layer 5: React Evolution */}
                            <ReactLogoLayer
                                opacity={reactOpacity}
                                x={frontX}
                                y={frontY}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimationOne;
