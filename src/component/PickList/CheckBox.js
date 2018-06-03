import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PickList.scss';

class CheckboxOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({isChecked: props.isChecked })
  }
  handleOnClick = (e) => {
    let { isChecked } = this.state;
    isChecked = !isChecked;
    this.setState({
      isChecked: isChecked,
    })
    this.props.onSelect(this.props.value, isChecked);
  }
  render() {
    const { value, onSelect, children } = this.props
    return (
      <div className="checkboxes" value={value}>
        <input
          type="checkbox"
          onClick={this.handleOnClick}
          checked={this.state.isChecked}
          defaultChecked={false}
        />
        <label>
          {children}
        </label>
      </div>
    )
  }
}

export default CheckboxOption;
