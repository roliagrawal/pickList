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
  onSelect: PropTypes.func,
  /**
   * value of radio option
   */
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  className: '',
  onSelect: null,
};

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
    const { value, children } = this.props
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

CheckboxOption.defaultProps = defaultProps;
CheckboxOption.propTypes = propTypes;
export default CheckboxOption;
