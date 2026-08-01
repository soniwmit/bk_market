import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy Load Pages as required
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState('');

  const handleOpenOrderModal = () => {
    setSelectedMedicine('');
    setIsOrderModalOpen(true);
  };

  const handleSelectMedicineForOrder = (medicineName: string) => {
    setSelectedMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased font-sans transition-colors duration-200">
          {/* Header Navbar */}
          <Navbar onOpenOrderModal={handleOpenOrderModal} />

          {/* Main Page Routing */}
          <main className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
                  <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-widest animate-pulse">
                    Loading BK MARKET...
                  </p>
                </div>
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      onOpenOrderModal={handleOpenOrderModal}
                      onSelectMedicineForOrder={handleSelectMedicineForOrder}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={<About onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/services"
                  element={
                    <Services
                      onOpenOrderModal={handleOpenOrderModal}
                      onSelectMedicineForOrder={handleSelectMedicineForOrder}
                    />
                  }
                />
                <Route
                  path="/gallery"
                  element={<Gallery onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/contact"
                  element={<Contact onOpenOrderModal={handleOpenOrderModal} />}
                />
                {/* Fallback Route */}
                <Route
                  path="*"
                  element={
                    <Home
                      onOpenOrderModal={handleOpenOrderModal}
                      onSelectMedicineForOrder={handleSelectMedicineForOrder}
                    />
                  }
                />
              </Routes>
            </Suspense>
          </main>

          {/* Floating Action Buttons */}
          <FloatingActions onOpenOrderModal={handleOpenOrderModal} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialMedicineName={selectedMedicine}
          />

          {/* Footer with Global Tracking Hook */}
          <Footer onOpenOrderModal={handleOpenOrderModal} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
