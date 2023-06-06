import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import Services from "./Components/Service.jsx";
import Contact from "./Components/Contact.jsx";


import "./Style/App.scss";
import "./Style/Colors.scss";
import "./Style/header.scss";
import "./Style/Home.scss";
import "./Style/Footer.scss";
import "./Style/Contact.scss";
import "./Style/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;