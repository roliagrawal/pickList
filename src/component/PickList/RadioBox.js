import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PickList.scss';

class RadioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: this.props.checkedValue,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({checkedValue: props.checkedValue })
  }
  handleOnClick = (e) => {
    this.setState({
      checkedValue: this.props.value,
    })
    this.props.onRadioSelect(this.props.value);
  }
  render() {
    const { value, onSelect, children } = this.props
    return (
      <div className="radioboxes" value={value}>
        <input
          type="radio"
          onClick={this.handleOnClick}
          checked={this.state.checkedValue === value}
          name="pickradio"
        />
        <label>
          {children}
        </label>
      </div>
    )
  }
}

export default RadioBox;
