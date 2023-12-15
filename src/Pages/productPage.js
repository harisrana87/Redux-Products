import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '..//Redux/Actions/actions';
import '../Pages/ProductPage.css'; // Import the CSS file

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

function ProductPage(props) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const isSignedIn = true; // Example usage of a variable
    if (isSignedIn) {
      props.addToCart(product);
      console.log('added');
    } else {
      navigate('/signin');
    }
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, []);

  if (!products.length) {
    return <div>Loading Product...</div>;
  }

  return (
    <div>
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#added-cart" onClick={() => navigate('/cart')}>
          Added Cart
        </a>
      </div>
      <div className="product-page">
        <div className="product-list">
          <h2>Product List</h2>
          <div className="pc">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { addToCart })(ProductPage);