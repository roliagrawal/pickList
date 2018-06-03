import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PickList.scss';

const propTypes = {
  /**
   * Children provided to the component
   */
  children: PropTypes.node,
  /**
   * classname
   */
  className: PropTypes.string,
  /**
   * Passing the Menu Item click to the children
   */
  onRadioSelect: PropTypes.func,
  /**
   * value of radio option
   */
  value: PropTypes.string.isRequired,
  checkedValue: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
  className: '',
  onRadioSelect: null,
};
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
    const { value, children } = this.props
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

RadioBox.defaultProps = defaultProps;
RadioBox.propTypes = propTypes;
export default RadioBox;
