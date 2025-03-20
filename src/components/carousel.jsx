import React from "react";
import "../styles/carousel.css";
import HomeProducts from "./homeproducts.jsx";

const products = [
  { title: "Jeans", img: "https://hmcolombia.vtexassets.com/arquivos/ids/4100732-483-725?v=638667348051500000&width=483&height=725&aspect=true" },
  { title: "Gabanes", img: "https://hmcolombia.vtexassets.com/arquivos/ids/4247616-483-725?v=638744269622130000&width=483&height=725&aspect=true" },
  { title: "Blusas", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3728407-483-725?v=638531704850170000&width=483&height=725&aspect=true" },
  { title: "Chaquetas", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" },
  { title: "Ropa Interior", img: "https://hmcolombia.vtexassets.com/arquivos/ids/4100732-483-725?v=638667348051500000&width=483&height=725&aspect=true" },
  { title: "Blazers", img: "https://hmcolombia.vtexassets.com/arquivos/ids/4247616-483-725?v=638744269622130000&width=483&height=725&aspect=true" },
  { title: "Vestidos", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3728407-483-725?v=638531704850170000&width=483&height=725&aspect=true" },
  { title: "Zapatillas", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" },
  { title: "Gabardinas", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" },
  { title: "Busos", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" },
  { title: "Conjuntos", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" },
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
