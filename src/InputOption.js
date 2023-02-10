import React from 'react'
import './InputOption.css'

function InputOption({ Icon, title, color, onClick }) {
  return (
    <div className='inputOption' onClick={onClick} style={{ color: color }}>
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption