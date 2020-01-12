import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImportantTags extends Component {
  constructor(props) {
    super(props);
    this.handleOrderTags = this.handleOrderTags.bind(this);
    this.handleInsertTags = this.handleInsertTags.bind(this);
    this.state = {
      tags: [],
    };
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
    // Aqui eu ordeno as tags, da que mais aparece, para a q menos aparece
    const mapAsc = [...map].sort((a, b) => {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    });
    return mapAsc;
  }

  // items é um array de duplas do tipo [tag, value].
  // ERRO OCORRE AQUI
  handleInsertTags(items) {
    const { tags } = this.state;
    for (let i = 0; i < 4; i += 1) {
      this.setState({
        tags: [items[i][0], ...tags],
      });
    }
  }

  render() {
    this.handleInsertTags(this.handleOrderTags());
    const { tags } = this.state;
    console.log(tags);
    return (
      <div> </div>
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
