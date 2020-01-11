import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ItemCart from '../../components/ItemCart';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    const { arrayItems } = this.props.location.state;
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      arrayItems,
    };
  }

  handleDelete(deleteId) {
    const { arrayItems } = this.state;
    this.setState({
      arrayItems: arrayItems.filter(({ id }) => (deleteId !== id)),
    });

  }

  render() {
    const { arrayItems } = this.state;
    return (
      <div className="cart-container">
        <div className="title">
          <h1>Seu carrinho de produtos</h1>
        </div>
        <div className="list-card">
          {arrayItems.map(({ name, id }, i) => (
            <ItemCart name={name} id={id} handleDelete={this.handleDelete} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  arrayItems: PropTypes.arrayOf(PropTypes.exact({
    url: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.exact({
      tag: PropTypes.string,
    })),
    id: PropTypes.string,
  })),
};

Cart.defaultProps = {
  arrayItems: [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHm8tUmP077aENqNKaKWTnVrZc5eXAecPSmuqwK2PY8ucKKpkzg&s',
      text: 'Eita, houve um errinho ai',
      tags: [
        {
          tag: 'Comida',
        },
        {
          tag: 'Arroz',
        },
      ],
      id: '0',
    },
  ],
};

export default withRouter(Cart);
