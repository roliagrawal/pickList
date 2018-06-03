import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PickList.scss';
import Menu from './menu.js'
import onClickOutside from 'react-onclickoutside'

const propTypes = {
  /**
   * Children provided to the List component
   */
  children: PropTypes.node,
  /**
   * classname for the Dropdown
   */
  className: PropTypes.string,
  /**
   * Passing the Menu Item click to the children
   */
  onSelectedChange: PropTypes.func,
  /**
   * The array of items selected on render
   */
  selectedValues: PropTypes.array,
  /**
   * The array of items for readio button
   */
  radioOptions: PropTypes.array,
  /**
   * The array of items fot checkbox
   */
  options: PropTypes.array,
  defaultRadioSelectedOption: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
  radioOptions:[],
  options: [],
  className: '',
  onSelectedChange: null,
  selectedValues: [],
};

class Picklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      selectedOptions: [],
      selectedRadioOption: this.props.defaultRadioSelectedOption,
    };
  }
  
  handleClickOutside = () => {
    this.setState({
      isMenuOpen: false,
    })
  }

  handlePickListClick = () => {
    let { isMenuOpen } = this.state;
    isMenuOpen = !isMenuOpen;
    this.setState({
      isMenuOpen: isMenuOpen,
    })
  }

  handleSelectedOptions = (value, isChecked) => {
    let { selectedOptions, selectedRadioOption } = this.state;
    if (isChecked && value) {
      selectedOptions = selectedOptions.concat(value);
    }
    else {
      selectedOptions = selectedOptions.filter((options) => options !== value );
    }
    this.setState({
      selectedOptions: selectedOptions,
    })
    this.props.onSelect(selectedOptions, selectedRadioOption);
  }

  handleDisplaySelectedValues = () => {
    let { selectedOptions } = this.state;
    const displayField = (selectedOptions.length > 1) ?
    (`${selectedOptions[0]} + ${selectedOptions.length-1}`) :
    (`${selectedOptions[0]}`);
    return (selectedOptions.length ? displayField : 'Select');
  }

  handleSelectedClear = () => {
    this.setState({
      selectedOptions: [],
      selectedRadioOption: this.props.defaultRadioSelectedOption,
    })
    this.props.onSelect([], this.props.defaultRadioSelectedOption);
  }

  handleRadioSelect = (value) => {
    let { selectedOptions } = this.state;
    this.setState({
      selectedRadioOption: value,
    })
    this.props.onSelect(selectedOptions, value);
  }

  render () {
    const {radioOptions, options}= this.props;
    return (
      <div className="PickList">
        <div className="selectBox" onClick={this.handlePickListClick}>
          <select>
            <option>{this.handleDisplaySelectedValues()}</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <Menu
          isOpen={this.state.isMenuOpen}
          options={options}
          selectedOptions={this.state.selectedOptions}
          handleSelectedOptions={this.handleSelectedOptions}
          handleSelectedClear={this.handleSelectedClear}
          radioOptions={radioOptions}
          onRadioSelect={this.handleRadioSelect}
          selectedRadioOption={this.state.selectedRadioOption}
        />
      </div>);
  }
}

Picklist.defaultProps = defaultProps;
Picklist.propTypes = propTypes;

export default onClickOutside(Picklist);
