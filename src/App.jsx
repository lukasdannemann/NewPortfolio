import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css';


function App() {
  const [shouldAnimate, setShouldAnimate] = useState(() => {
    const isFirst = !sessionStorage.getItem('loaded');
    const navType = performance.getEntriesByType('navigation')[0]?.type;
    if (isFirst) sessionStorage.setItem('loaded', '1');
    return isFirst || navType === 'reload';
  });

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => setShouldAnimate(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <Router>
      <div className={`app ${shouldAnimate ? 'first-load' : ''}`}>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
