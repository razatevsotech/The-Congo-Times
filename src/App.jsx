import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

import Home from "./Components/Pages/Home";

import Health from "./Components/Pages/HealthSection";
import Sports from "./Components/Pages/sports";
import Politics from "./Components/Pages/Politics";
import Buisness from "./Components/Pages/Buisness";
import Art from "./Components/Pages/Art";
import Science from "./Components/Pages/Science";
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
          <Route path="art" element={<Art />} />
          <Route path="science" element={<Science />} />
          <Route path="world" element={<World />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactSection />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;