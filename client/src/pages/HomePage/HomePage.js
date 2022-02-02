import Welcome from "../../components/Welcome/Welcome";
import About from "../../components/About/About";
import LearnMore from "../../components/LearnMore/LearnMore";

function HomePage() {
    return (
        <>
           <Welcome />
           <LearnMore/>
           <About />
        </>
    );
}

export default HomePage;