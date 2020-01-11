import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TagFilter.scss';

class TagFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { handleSearch } = this.props;
    handleSearch(value);
    this.setState({
      value: '',
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="tagFilter-container">
          <button type="submit"> </button>
          <input type="text" value={value} onChange={this.handleChange} placeholder="Filter by tag" />
        </div>
      </form>
    );
  }
}

TagFilter.propTypes = {
  handleSearch: PropTypes.func,
};

TagFilter.defaultProps = {
  handleSearch: () => {},
};

export default TagFilter;
