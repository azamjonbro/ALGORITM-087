import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OneProduct() {
  let { id } = useParams();
  let [oneProduct, setOneProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setOneProduct(data);
      });
  }, [id]);

  if (!oneProduct) {
    return <div className="one-product-loading">Loading...</div>;
  }

  return (
    <div className="one-product-container">
      <div className="one-product-card">
        <img src={oneProduct.image} alt={oneProduct.title} className="one-product-image" />
        <div className="one-product-info">
          <h2 className="one-product-title">{oneProduct.title}</h2>
          <p className="one-product-category">{oneProduct.category}</p>
          <p className="one-product-description">{oneProduct.description}</p>
          <div className="one-product-bottom">
            <span className="one-product-price">${oneProduct.price}</span>
            <span className="one-product-rating">
              ⭐ {oneProduct.rating?.rate} ({oneProduct.rating?.count} reviews)
            </span>
          </div>
        </div>
      </div>
      <style>{`
        .one-product-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          background: #f5f6fa;
        }
        .one-product-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          display: flex;
          max-width: 700px;
          padding: 32px;
          gap: 32px;
        }
        .one-product-image {
          width: 220px;
          height: 220px;
          object-fit: contain;
          border-radius: 12px;
          background: #f0f0f0;
        }
        .one-product-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .one-product-title {
          font-size: 2rem;
          margin-bottom: 8px;
        }
        .one-product-category {
          color: #888;
          font-size: 1rem;
          margin-bottom: 16px;
        }
        .one-product-description {
          font-size: 1.1rem;
          margin-bottom: 24px;
        }
        .one-product-bottom {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .one-product-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1976d2;
        }
        .one-product-rating {
          font-size: 1rem;
          color: #ff9800;
        }
        @media (max-width: 600px) {
          .one-product-card {
            flex-direction: column;
            align-items: center;
            padding: 16px;
            gap: 16px;
          }
          .one-product-image {
            width: 100%;
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
}

export default OneProduct;
