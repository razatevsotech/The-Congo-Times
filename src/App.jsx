import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Components/Pages/Home";
import Africa from "./Components/Pages/sport";
import Business from "./Components/Pages/Congodrc";
import Other from "./Components/Pages/Others";
import Health from "./Components/Pages/HealthSection";
import Sports from "./Components/Pages/sport";
import Politics from "./Components/Pages/Politics";
import Buisness from "./Components/Pages/Buisness";
import Technology from "./Components/Pages/Technology";
import World from "./Components/Pages/World";
import About from "./Components/Pages/About";
import ContactSection from "./Components/Pages/ContactSection";
import AdminLayout from "./AdminPanel/adminPanellayout";
import Dashboard from "./Components/Pages/dashboard";
import Users from "./Components/Pages/users";
import HeaderSlider from "./Components/Pages/HeaderSlider";
import MidSlider from "./Components/Pages/MidSlider";
import LeftAds from "./Components/Pages/LeftAds";
import RightAds from "./Components/Pages/RightAds";
import AllBanners from "./Components/Pages/initialBanner";
import MediaLibrary from "./Components/Pages/MediaLibrary";
import UserManagement from "./Components/Pages/UserManagement";
import SettingsPage from "./Components/Pages/SettingsPage";
import LoginPage from "./Components/Pages/login";
import NewsDetails from "./Components/Pages/RelatedPosts";

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
        <Route path="/news/:id" element={<NewsDetails />} />
    


<Route path="/login" element={<LoginPage />}>
</Route>


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