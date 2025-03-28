import { useState, useEffect } from "react";
import "../styles/landingpage.css";

const LandingPage = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoClass, setLogoClass] = useState("logo");
  const [titles, setTitles] = useState("title");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete(); // Llamar función cuando desaparezca
    }, 3000);

    setTimeout(() => {
      setLogoClass("logo move-logo");
      setTitles("title move-title");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className={`landing-container ${isVisible ? "" : "fade-out"}`}>
      <img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="Logo" className={logoClass} />
      <h1 className={titles} alt="title">
        EL ROPERO DE MARTINA 
      </h1>
    </div>
  );
};

export default LandingPage;
