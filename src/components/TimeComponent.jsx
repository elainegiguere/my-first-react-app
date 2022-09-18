import React from 'react'

const TimeComponent = ({ clock, isRed, onClick }) => {
  const colorClassname = isRed ? "red" : "blue";
  return (
    <>
    <img className='clock' src={clock}></img>
    <p onClick={onClick} className={colorClassname}>3 days left</p>
    </>
  )
}

export default TimeComponent