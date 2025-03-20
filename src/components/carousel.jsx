import React from "react";
import "../styles/carousel.css";
import HomeProducts from "./homeproducts.jsx";

const products = [
  { title: "Jeans", img: "https://i.postimg.cc/RZm9hDHy/jean.jpg" },
  { title: "Gabanes", img: "https://i.postimg.cc/xjk94HQx/final-1.jpg" },
  { title: "Blusas", img: "https://i.postimg.cc/pyNG03vH/final.jpg" },
  { title: "Chaquetas", img: "https://i.postimg.cc/SQwmFsNy/jacket.jpg" },
  { title: "Ropa Interior", img: "https://i.postimg.cc/HLsg483t/ropa-interior.jpg" },
  { title: "Blazers", img: "https://i.postimg.cc/2yL97rPG/blazer.jpg" },
  { title: "Vestidos", img: "https://i.postimg.cc/0Qz1hgTM/vestido.jpg" },
  { title: "Zapatillas", img: "https://i.postimg.cc/63FxXjKH/zapatillas.jpg" },
  { title: "Gabardinas", img: "https://i.postimg.cc/15ws9QfD/gabardinas.jpg" },
  { title: "Busos", img: "https://i.postimg.cc/MpYwQm0T/ropa-deportiva.jpg" },
  { title: "Conjuntos", img: "https://i.postimg.cc/mrXGdZ5W/final-2.jpg" },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...products, ...products].map((product, index) => (
          <HomeProducts
            key={index}
            productTitle={product.title}
            productImage={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
