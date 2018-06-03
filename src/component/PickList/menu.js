import React from 'react';
import PropTypes from 'prop-types';
import './PickList.scss';
import CheckboxOption from './CheckBox.js'
import RadioboxOption from './RadioBox.js'

const propTypes = {
  /**
   * Children provided to the menu
   */
  children: PropTypes.node,
  /**
   * classname for the list
   */
  className: PropTypes.string,
  /**
   * The array of items
   */
  options: PropTypes.array,
  radioOptions: PropTypes.array,
  isOpen: PropTypes.bool,
  selectedRadioOption: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
  isOpen: false,
  options: [],
  radioOptions: [],
};

const Menu = (props) =>  {
  const { isOpen, options,  selectedOptions, radioOptions, selectedRadioOption } = props;
  const handleSelectedOptions = (selectedValue, isChecked) => {
    props.handleSelectedOptions(selectedValue, isChecked);
  }
  const handleIsChecked = (optionValue) => {
    if(!selectedOptions.length || selectedOptions.indexOf(optionValue) === -1) {
      return false;
    }
    return true;
  }
  const handleSelectedClear = () => {
    props.handleSelectedClear();
  }
  const handleRadioSelect = (value) => {
    props.onRadioSelect(value);
  }
  return ( isOpen ?
    (<div className="Menu">
      {radioOptions.map((option, i) =>
        <RadioboxOption value={option.value}
        key={`radiobox${i}`}
        onRadioSelect={handleRadioSelect}
        checkedValue={selectedRadioOption}
      > {option.value}
      </RadioboxOption>)}

      {options.map((option, i) =>
          <CheckboxOption
            value={option.value}
            onSelect={handleSelectedOptions}
            key={`checkbox${i}`}
            isChecked={handleIsChecked(option.value)}
          >
        {option.value}
      </CheckboxOption>)}
      <div className="clear">
        <a onClick={handleSelectedClear}>
          <span>&#x2715;</span>
          <span>Clear</span>
        </a>
      </div>
    </div>) : (<div></div>)
  )
}

Menu.defaultProps = defaultProps;
Menu.propTypes = propTypes;

export default Menu;
