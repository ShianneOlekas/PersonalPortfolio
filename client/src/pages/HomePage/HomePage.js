import Welcome from "../../components/Welcome/Welcome";
import About from "../../components/About/About";
import LearnMore from "../../components/LearnMore/LearnMore";
import { Controller, Scene } from 'react-scrollmagic'

function HomePage() {
    return (
        <>
        <Controller>
           <Welcome />
           <LearnMore/>
           <About />
        </Controller>
        </>
    );
}

export default HomePage;