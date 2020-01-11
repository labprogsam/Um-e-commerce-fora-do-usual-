import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import './Item.scss';

function Item({
  url, text, tags, name, id, handleInsert,
}) {
  const handleInsertCart = () => {
    alert(`O item '${name}' foi adicionado`);
    handleInsert({
      url, text, tags, name, id,
    });
  };
  return (
    <div className="item-container" id={id}>
      <img src={url} alt="imagem-produto" />
      <div className="information-container">
        <div className="description">
          <div className="product-name">
            <p>{name}</p>
          </div>
          <p>{text}</p>
        </div>
        <div className="options">
          <div className="tags">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
          <button type="button" onClick={handleInsertCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.exact({
    tag: PropTypes.string,
  })),
  name: PropTypes.string,
  id: PropTypes.string,
  handleInsert: PropTypes.func,
};

Item.defaultProps = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/220px-Achtung.svg.png',
  text: 'Texto aleatório',
  tags: [
    {
      tag: 'Produto aleatório',
    },
  ],
  name: 'nenhum',
  id: '0',
  handleInsert: () => {},
};

export default Item;
