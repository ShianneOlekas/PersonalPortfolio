import './LearnMore.scss'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function LearnMore() {

    return (
        
            <Scene
            duration={500}
            triggerElement="#trigger"
            indicators='true'
            >
                {(progress) => (
                    <Tween        
                    to={{
                        left: '0px',
                        rotation: -360,
                    }}
                    totalProgress={progress}
                    paused
                    >
                    <div className='learn-more' id='trigger'>
                        <p className='learn-more__text'>Scroll</p>
                        <p className='learn-more__text learn-more__text--cta'>to learn</p>
                        <p className='learn-more__text'>more</p>
                        <div className='learn-more--rotated'></div>
                    </div>
                </Tween>
                )}
                
            </Scene>
       
    )
}

export default LearnMore;