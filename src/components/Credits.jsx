import React from 'react'

const Credits = ({onHover}) => {
  console.log(onHover)
  return (
    <p class="credits" onMouseEnter={onHover}>Creation on Jules Wyvern</p>
  )
}

export default Credits