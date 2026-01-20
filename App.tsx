
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConsultationPage from './pages/ConsultationPage';
import FAQPage from './pages/FAQPage';
import ContabilitaPage from './pages/ContabilitaPage';

// Componente per resettare lo scroll ad ogni cambio di rotta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulenze" element={<ConsultationPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contabilita" element={<ContabilitaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
