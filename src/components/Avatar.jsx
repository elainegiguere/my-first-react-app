import React from 'react'
import img1 from '../images/image-avatar.png';

const Avatar = ({broderWhite, onClick}) => {
    const borderColor = broderWhite? "borderWhite" : "borderBlue";
    const classNames = `${borderColor} imgAvatar`;
  return (
  
    <img onClick={onClick} className={classNames}  src={img1} alt="avatar"></img>
   
  )
}

export default Avatar