import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/HomeSection";
// import About from "./Components/About/AboutSection";
import Services from "./Components/Services/ServicesSection";
import Work from "./Components/Work/WorkSection";
import Projects from "./Components/Projects/ProjectSection";
import Alert from "./Components/Alert/Alert";
import Contact from "./Components/Contact/ContactSection";
import Progress from "./Components/Progress/Progress";
import Footer from "./Components/Footer/Footer";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        this.setState({
            scrolled: scrolled
        });
    };

    render() {
        const progressContainerStyle = {
            background: "#f8bbd0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            height: "4px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 99
        };
        const progressBarStyle = {
            height: "4px",
            background: "#e91e63",
            width: this.state.scrolled
        };

        return (
            <>
                <div style={progressContainerStyle}>
                    <div style={progressBarStyle} />
                </div>
                <div className="content">
                    <Header />
                    <Home />
                    {/* <About /> */}
                    <Services />
                    <Work />
                    <Projects />
                    <Alert />
                    <Contact />
                    <Progress />
                    <Footer />
                </div>
            </>
        );
    }
};

