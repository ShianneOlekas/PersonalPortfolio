import './About.scss'
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic'

const aboutAnimation = keyframes`
        0% {color: #bc5292;
        text-shadow: none;}
    
        90% {color: #bc5292;
            text-shadow: none;}
    
        100% {color:  #bfbfbf;
            text-shadow: 0 0 7px #ebbcd8, -10px 0 50px #bc5292;}
    `

const ClassToggleStyled = styled.div`
    .about__letters {
        list-style: none;
        font-size: 3.5rem;
        font-family: 'Maitree';
        letter-spacing: 0.5rem;
        color: white;
        font-weight: 500;

        @media (min-width: 46.5rem) {
            font-size: 6rem;
        }
    }

    .trigger-animation {
        animation: ${aboutAnimation} 1.4s linear;
        animation-iteration-count: 1;
    }

    .trigger-animation:nth-child(1) {
        animation-delay: 0;
    }

    .trigger-animation:nth-child(2) {
        animation-delay: 0.1s;
    }
    .trigger-animation:nth-child(3) {
        animation-delay: 0.2s;
    }

    .trigger-animation:nth-child(4) {
        animation-delay: 0.3s;
    }

    .trigger-animation:nth-child(5) {
        animation-delay: 0.4s;
    }

    .about__letters:nth-child(6) {
        animation: none;
        color: #bc5292;
    }
  `;

function About() {

    return (
        <section className='about'>  
            <ClassToggleStyled className='about__title' id="trigger">
                <Controller>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"}  triggerHook={0.2}>
                        <div className='about__letters'>A</div>
                    </Scene>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"} triggerHook={0.2}>
                        <div className='about__letters'>B</div>
                    </Scene>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"} triggerHook={0.2}>
                        <div className='about__letters'>O</div>
                    </Scene>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"} triggerHook={0.2}>
                        <div className='about__letters'>U</div>
                    </Scene>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"} triggerHook={0.2}>
                        <div className='about__letters'>T</div>
                    </Scene>
                    <Scene classToggle={"trigger-animation"} triggerElement={"#trigger"} triggerHook={0.2}>
                        <div className='about__letters'>.</div>
                    </Scene>
                </Controller>
            </ClassToggleStyled>

            <div className='about__mission-section'>
                <div className='about__mission-circle-top'></div>
                <div className='about__mission-circle-bottom'></div>
                <div className='about__mission-circle-bottom-two'></div>
                <h2 className='about__mission-title'>My Mission</h2>
                <p className='about__mission-info'>To use my love of <span className='about__mission-info--cta'>coding</span> and <span className='about__mission-info--cta'>design</span> to create unique <span className='about__mission-info--cta-two'>eye-catching</span> websites.</p>
            </div>
        </section>
    );
}

export default About;