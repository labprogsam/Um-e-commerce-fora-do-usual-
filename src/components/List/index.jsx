import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

function List({ items, handleInsert }) {
  return (
    <>
      {items.map(({ url, text, tags, name, id }, i) => (
        // eslint-disable-next-line max-len
        <Item url={url} text={text} tags={tags} name={name} id={id} handleInsert={handleInsert} key={i} />
      ))}
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    url: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.exact({
      tag: PropTypes.string,
    })),
    id: PropTypes.string,
  })),
  handleInsert: PropTypes.func,
};

List.defaultProps = {
  items: [
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
        {
          tag: 'Feijão',
        },
      ],
      id: '0',
    },
  ],
  handleInsert: () => {},
};

export default List;
