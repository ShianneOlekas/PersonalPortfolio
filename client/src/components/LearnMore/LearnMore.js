import './LearnMore.scss'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function LearnMore() {

    return (
        <Controller>
            <Scene
            duration={500}
            >
                {(progress) => (
                    <Tween        
                    staggerFrom={{
                        left: 700,
                    }}
                    staggerTo={{
                        left: 0,
                        ease: 'Back.easeOut',
                    }}
                    stagger={0.15}
                    totalProgress={progress}
                    paused
                    >
                    <div className='learn-more'>
                        <p className='learn-more__text'>Scroll</p>
                        <p className='learn-more__text learn-more__text--cta'>to learn</p>
                        <p className='learn-more__text'>more</p>
                        <div className='learn-more--rotated'></div>
                    </div>
                </Tween>
                )}
                
            </Scene>
        </Controller>
    )
}

export default LearnMore;