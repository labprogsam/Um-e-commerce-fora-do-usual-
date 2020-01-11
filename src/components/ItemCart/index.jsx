import React from 'react';
import PropTypes from 'prop-types';
import './ItemCart.scss';

function ItemCart({ name, id, handleDelete }) {
  const handleDeleteCart = () => {
    handleDelete(id);
  };
  return (
    <div className="cart">
      <div className="cart-information">
        <p>{name}</p>
        <p>id: {id}</p>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleDeleteCart}> Remover Produto</button>
      </div>
    </div>
  );
}

ItemCart.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func,
};

ItemCart.defaultProps = {
  name: 'Produto X',
  id: '3BC',
  handleDelete: () => {},
};

export default ItemCart;
