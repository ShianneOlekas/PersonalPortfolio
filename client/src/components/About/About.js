import './About.scss'
import { useRef, useEffect } from 'react';

function About() {
    const aboutRef = useRef();

    useEffect(() => {

    });

    const aboutScrollHandler = () => {
        const currentScroll = window.scrollY;
        const aboutTitleLocation = aboutRef.current

        if(aboutTitleLocation) {
            aboutTitleLocation.className.add(`about__letters--trigger-animation`)
        }
    }


    return (
        <section className='about'>
            <div className="about__title">
                <ul className="about__list">
                    <li className='about__letters' ref={aboutRef}>A</li>
                    <li className='about__letters'>B</li>
                    <li className='about__letters'>O</li>
                    <li className='about__letters'>U</li>
                    <li className='about__letters'>T</li>
                    <li className='about__letters'>.</li>
                </ul>
            </div>
        </section>
    );
}

export default About;