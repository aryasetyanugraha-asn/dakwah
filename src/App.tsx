import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ScholarProfile } from './pages/ScholarProfile';
import ContentDetail from './pages/ContentDetail';
import { HomeFeed } from './pages/HomeFeed';
import AdminDashboard from './pages/AdminDashboard';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<HomeFeed />} />
        <Route path="/scholar" element={<ScholarProfile />} />
        <Route path="/content" element={<ContentDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
