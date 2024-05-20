import "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {

  return (
    <>
      <Header />
      <div id="home">
        <Landing />
      </div>

      <div id="work">
        <Work />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
