import './Welcome.scss'

function Welcome() {
    return (
        <section className='welcome'>
            {/* this will hold name and small blurb */}
            <div className='welcome__text-container'>
                <h1 className='welcome__shianne'>Shianne (Ana) Olekas.</h1>
                <p className='welcome__paragraph'>Hi. Nice to meet you! I’m a full-stack web dev with a strong interest in CSS and design, in order to bring UI to life. </p>
            </div> 
            <img className='welcome__vector'/>
        </section>
    );
}

export default Welcome;