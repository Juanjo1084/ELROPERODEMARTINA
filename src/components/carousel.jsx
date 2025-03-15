import { useState, useEffect } from "react";
import "../styles/carousel.css"; 

const images = [
  "https://sopotey.com/blog/wp-content/uploads/2024/02/ropa-de-mujer-elegante-y-moderna.jpg",
  "https://sopotey.com/blog/wp-content/uploads/2024/02/ropa-elegante-mujer-joven.jpg",
  "https://sopotey.com/blog/wp-content/uploads/2024/02/ropa-mujer-original-y-elegante.jpg"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambio automático cada 3s
    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}
