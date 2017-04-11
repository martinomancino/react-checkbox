import React from 'react'

const Checkbox = ({checked, onStateChange}) => {
  return (
    <div>
      <div className="checkbox" data-checked={checked} onClick={onStateChange}></div>
      <label>How Cool!!!</label>
    </div>
  )
}

export default Checkbox;
