import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminPanel/adminPanellayout';
import About from './Components/Pages/About';
import Africa from './Components/Pages/Africa';
import Buisness from './Components/Pages/Buisness';
import Business from './Components/Pages/Congodrc';
import ContactSection from './Components/Pages/ContactSection';
import HeaderSlider from './Components/Pages/HeaderSlider';
import Health from './Components/Pages/HealthSection';
import Home from './Components/Pages/Home';
import LoginPage from './Components/Pages/login';
import MidSlider from './Components/Pages/MidSlider';
import Other from './Components/Pages/Others';
import Politics from './Components/Pages/Politics';
import PostDetail from './Components/Pages/PostDetail';
import RightAds from './Components/Pages/RightAds';
import SettingsPage from './Components/Pages/SettingsPage';
import Sports from './Components/Pages/sport';
import Technology from './Components/Pages/Technology';
import UserManagement from './Components/Pages/UserManagement';
import World from './Components/Pages/World';
import MainLayout from './MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Other Pages */}
          <Route path="health" element={<Health />} />
          <Route path="sports" element={<Sports />} />
          <Route path="politics" element={<Politics />} />
          <Route path="business" element={<Buisness />} />
          <Route path="africa" element={<Africa />} />
          <Route path="congo-drc" element={<Business />} />
          <Route path="others" element={<Other />} />
          <Route path="technology" element={<Technology />} />
          <Route path="world" element={<World />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactSection />} />

        </Route>

        <Route path="/news/:id" element={<PostDetail />} />

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="header-slider" element={<HeaderSlider />} />
          <Route path="mid-slider" element={<MidSlider />} />
          <Route path="right-mid-slider" element={<RightAds />} />
          <Route path="bottom-slider" element={<RightAds />} />

          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<SettingsPage />} />

          {/*





   */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
