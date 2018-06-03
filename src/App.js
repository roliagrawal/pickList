import React, { Component } from 'react';
import Picklist from './component/PickList/PickList.js';
import './App.css';
const options = [
  {value: 'red'},
  {value: 'green'},
  {value: 'yellow'},
  {value: 'orange'},
  {value: 'black'},
  {value: 'white'},
]
const radioOptions=[{value: 'And'},{value: 'OR'}]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Picklist
          options={options}
          radioOptions={radioOptions}
          defaultRadioSelectedOption="And"
          onSelect={(selectedValues, selectedRadioOption) => {
            console.log('selected values', selectedValues, 'selectedOprator', selectedRadioOption)}}
        />
      </div>
    );
  }
}

export default App;
