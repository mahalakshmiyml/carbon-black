import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import Footer from "./Components/Includes/Footer";
import Home from "./Components/Home/Home";
import WhyUs from './Components/WhyUs/WhyUs';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Router>
        <TopMenuBar />
      
        <Routes>
          <Route path="/home" index element={<Home />}></Route>
          <Route path="/about" index element={<About />}></Route>
          <Route path="/why-us" index element={<WhyUs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
