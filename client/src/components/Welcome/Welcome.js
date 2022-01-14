import './Welcome.scss'
import helloIcon from '../../assets/icons/Hello-cropped.svg'
import nameLogo from '../../assets/icons/logo.svg'

function Welcome() {
    return (
        <section className='welcome'>
            <div className='welcome__text-container'>
                <img className='welcome__shianne' src={nameLogo}/>
                <p className='welcome__paragraph'>Hi. Nice to meet you! I’m a full-stack web dev with a strong interest in CSS and design, in order to bring UI to life. </p>
            </div> 
            <img className='welcome__icon' src={helloIcon}/>
        </section>
    );
}

export default Welcome;