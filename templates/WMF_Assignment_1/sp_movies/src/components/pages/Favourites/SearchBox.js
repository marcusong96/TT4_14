import React from 'react'

function SearchBox(props) {
  const Dropdown = (props) => {
    return (
      <>
        <label htmlFor="select_input"><h4>Genre Filter:</h4></label>
        <select className="form-select" id="select_input"
          value={props.selectedOption}
          onChange={e => props.setSelectedOption(e.target.value)}>
          {props.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </>
    );
  };

  return (
    <div className="col col-sm-4 w-100 p-4">
      <Dropdown options={props.options} selectedOption={props.selectedOption} setSelectedOption={props.setSelectedOption} />
    </div>
  )
}

export default SearchBox;
