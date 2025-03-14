import { useState, useEffect } from "react";
import "../styles/landingpage.css";

const LandingPage = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoClass, setLogoClass] = useState("logo");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete(); // Llamar función cuando desaparezca
    }, 5000);

    // Activar animación del logo
    setTimeout(() => {
      setLogoClass("logo move-logo");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className={`landing-container ${isVisible ? "" : "fade-out"}`}>
      <img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="Logo" className={logoClass} />
    </div>
  );
};

export default LandingPage;
