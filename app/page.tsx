'use client'

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import PIKA from "@/pages/PIKA";
import Division from "@/pages/Division";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderContent = () => {
    switch (currentSection) {
      case "home":
        return <Home onSectionChange={setCurrentSection} />;
      case "pika":
        return <PIKA onBack={() => setCurrentSection("home")} />;
      case "tec":
        return <Division division={currentSection} onBack={() => setCurrentSection("home")} />;
      case "about":
        return <About onBack={() => setCurrentSection("home")} />;
      case "contact":
        return <Contact onBack={() => setCurrentSection("home")} />;
      default:
        return <Home onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <>
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}