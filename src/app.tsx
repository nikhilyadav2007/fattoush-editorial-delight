import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add your new reservation route */}
        <Route path="/reserve" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
