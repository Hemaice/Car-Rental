import { useState } from 'react';
import Navigation from './components/Navigation';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import Listing from './pages/Listing';
import About from './pages/About';
import Contact from './pages/Contact';
import { Vehicle } from './data/vehicles';

// ✅ Import Toaster
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'listing':
        return <Listing onBookVehicle={setSelectedVehicle} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ✅ Global Toaster */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#7a1c1c',
            color: '#fff',
          },
        }}
      />

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Pages */}
      {renderPage()}

      {/* Booking Modal */}
      <BookingModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />

    </div>
  );
}

export default App;