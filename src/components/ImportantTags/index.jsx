import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import './ImportantTags.scss';

class ImportantTags extends Component {
  constructor(props) {
    super(props);
    this.handleOrderTags = this.handleOrderTags.bind(this);
  }

  handleOrderTags() {
    const map = new Map();
    const { items } = this.props;

    // Aqui eu preencho meu map, [Tag, value]...
    for (let i = 0; i < items.length; i += 1) {
      for (let j = 0; j < items[i].tags.length; j += 1) {
        const tag = items[i].tags[j];
        if (!map.has(tag)) {
          map.set(tag, 0);
        }
        map.set(tag, map.get(tag) + 1);
      }
    }
    // Aqui eu ordeno as tags, em ordem crescente
    const mapAsc = [...map].sort((a, b) => {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    });
    return mapAsc.slice(0, 5);
  }

  render() {
    const arrOrder = this.handleOrderTags();
    return (
      <div className="importantTags">
        {arrOrder.map((x, i) => <Tag key={i} tag={x[0]} />)}
      </div>
    );
  }
}

ImportantTags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    url: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.exact({
      tag: PropTypes.string,
    })),
    id: PropTypes.string,
  })),
};

ImportantTags.defaultProps = {
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

export default ImportantTags;
