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
      </Routes>
    </BrowserRouter>
  );
}

export default App;