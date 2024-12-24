import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

const CartItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: #ff3b3f;
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <CartContainer>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item._id}>
              <div>
                <strong>{item.name}</strong> (x{item.quantity}) - ${item.price} c/u
              </div>
              <RemoveButton onClick={() => removeFromCart(item._id)}>Eliminar</RemoveButton>
            </CartItem>
          ))}
          <hr />
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </CartContainer>
  );
}

export default Cart;
