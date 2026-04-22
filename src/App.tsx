import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScholarProfile from './pages/ScholarProfile';
import ContentDetail from './pages/ContentDetail';
import HomeFeed from './pages/HomeFeed';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<HomeFeed />} />
        <Route path="/scholar" element={<ScholarProfile />} />
        <Route path="/content" element={<ContentDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
