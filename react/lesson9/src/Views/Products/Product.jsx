import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "32px" }}>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <Link

          to={"/product/"+product.id}
            key={product.id}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "20px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "auto",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer",
              position: "relative",
            }}
            className="product-card"
          >
            <div style={{ position: "absolute", top: "12px", right: "12px", display: "flex", gap: "8px" }}>
              {/* Like Icon */}
              <span
                style={{
                  fontSize: "20px",
                  color: "#e53935",
                  cursor: "pointer",
                  transition: "transform 0.15s",
                }}
                className="like-icon"
                title="Like"
              >
                ♥
              </span>
              {/* Share Icon */}
              <span
                style={{
                  fontSize: "20px",
                  color: "#1976d2",
                  cursor: "pointer",
                  transition: "transform 0.15s",
                }}
                className="share-icon"
                title="Share"
              >
                ⤴
              </span>
            </div>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: "0 0 12px 0",
                textAlign: "center",
                minHeight: "48px",
              }}
            >
              {product.title}
            </h4>
            <p style={{ fontWeight: "bold", fontSize: "18px", color: "#1976d2" }}>
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
      {/* Inline styles for hover/active */}
      <style>{`
        .product-card:hover, .product-card:active {
          box-shadow: 0 6px 24px rgba(25, 118, 210, 0.18);
          transform: translateY(-4px) scale(1.03);
          border-color: #1976d2;
        }
        .like-icon:hover, .like-icon:active {
          transform: scale(1.2);
          color: #b71c1c;
        }
        .share-icon:hover, .share-icon:active {
          transform: scale(1.2) rotate(-10deg);
          color: #0d47a1;
        }
      `}</style>
    </div>
  );
};

export default Product;