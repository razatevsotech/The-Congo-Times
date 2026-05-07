import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminPanel/adminPanellayout';
import About from './Components/Pages/About';
import ContactSection from './Components/Pages/ContactSection';
import Home from './Components/Pages/Home';
import PostDetail from './Components/Pages/PostDetail';
import LoginPage from './Components/Pages/login';
import HeaderSlider from './Components/Pages/HeaderSlider';
import MidSlider from './Components/Pages/MidSlider';
import RightAds from './Components/Pages/RightAds';
import UserManagement from './Components/Pages/UserManagement';
import SettingsPage from './Components/Pages/SettingsPage';
import DynamicCategoryPage from './Components/Pages/DynamicCategoryPage';
import MainLayout from './MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Static Pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactSection />} />

          {/* Dynamic Category Pages */}
          <Route path=":categorySlug" element={<DynamicCategoryPage />} />
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
