import React, { useState, useEffect } from 'react';
import API from '../services/api';
import axios from 'axios';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  max-width: 1200px; /* ancho máximo, ajusta según tu preferencia */
  margin: 20px auto; /* centrado horizontal */
  padding: 0 20px;   /* un poco de padding para que no pegue a los bordes */
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /*centrar las cards*/
`;

const ProductCard = styled.div`
  background-color: #fff;
  width: 220px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  color: #333;
`;

const Price = styled.p`
  color: #0064e0;
  font-weight: bold;
  margin: 8px 0;
`;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Consulta a tu backend
        const res = await API.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContainer>
      <h2>Productos</h2>
      <ProductsGrid>
        {products.map((prod) => (
          <ProductCard key={prod._id}>
            <ProductImage src={prod.image} alt={prod.name} />
            <ProductName>{prod.name}</ProductName>
            <Price>${prod.price}</Price>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;
