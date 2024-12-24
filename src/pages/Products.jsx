import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Centra las cards */
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
  margin: 5px 0;
`;

const Price = styled.p`
  color: #0064e0;
  font-weight: bold;
  margin: 5px 0;
`;

const AddButton = styled.button`
  background-color: #0064e0;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
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
            <AddButton onClick={() => addToCart(prod)}>Agregar al carrito</AddButton>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;
