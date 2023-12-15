import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '..//Redux/Actions/actions';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Assuming you have a "cart" slice in your Redux store

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the addToCart action to update the cart in the Redux store
        dispatch(addToCart(data.products));
      })
      .catch((error) => {
        console.log('Error fetching cart:', error);
      });
  }, [dispatch]); // Include 'dispatch' in the dependency array

  if (!cart) {
    return <div>Loading cart...</div>;
  }

  if (!cart.products) {
    return <div>No products in the cart.</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <p>User: {cart.userId}</p>
      <p>Total: {cart.total}</p>
      <p>Item Count: {cart.count}</p>
      <ul style={styles.productList}>
        {cart.products.map((product) => (
          <li key={product.productId} style={styles.productItem}>
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  productList: {
    listStyleType: 'none',
    padding: 0,
    margin: '10px 0',
  },
  productItem: {
    marginBottom: '10px',
  },
  hr: {
    margin: '10px 0',
    borderTop: '1px solid #ccc',
  },
};

export default CartPage;