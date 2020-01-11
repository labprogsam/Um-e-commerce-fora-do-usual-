import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../List';
import TagFilter from '../TagFilter';
import './ItemList.scss';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.handleCart = this.handleCart.bind(this);
    const { items } = this.props;
    this.state = {
      items,
      itemsCart: [],
      redirect: false,
    };
  }

  handleCart() {
    this.setState({
      redirect: true,
    });
  }

  handleInsert(item) {
    const { itemsCart } = this.state;
    this.setState({
      itemsCart: [item, ...itemsCart],
    });
  }

  handleSearch(searchTag) {
    const { items } = this.state;
    if (searchTag === '') return;
    this.setState({
      items: items.filter(({ tags }) => (tags.indexOf(searchTag) !== -1)),
    });
  }

  render() {
    const {
      items,
      itemsCart,
      redirect,
    } = this.state;
    if (redirect) return <Redirect to={{ pathname: '/carrinho', state: { arrayItems: itemsCart } }} />;
    return (
      <div className="itemList-container">
        <header className="title">
          <h1>E-Commerce que não vende nada interessante</h1>
          <button type="button" onClick={this.handleCart}> </button>
        </header>
        <div className="filterList">
          <div className="tagFilter">
            <TagFilter handleSearch={this.handleSearch} />
          </div>
          <div className="list">
            <List items={items} handleInsert={this.handleInsert} />
          </div>
        </div>
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    url: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.exact({
      tag: PropTypes.string,
    })),
    id: PropTypes.string,
  })),
};

ItemList.defaultProps = {
  items: [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHm8tUmP077aENqNKaKWTnVrZc5eXAecPSmuqwK2PY8ucKKpkzg&s',
      text: 'Vixi, ferrou alguma coisa',
      tags: [
        {
          tag: 'Comida',
        },
        {
          tag: 'De comer',
        },
      ],
      id: '0',
    },
  ],
};

export default ItemList;
