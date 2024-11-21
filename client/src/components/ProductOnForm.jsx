import React, { useState } from 'react'

export const ProductOnForm = (id, name, price, onClick) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
    <button className="ProductOnForm" id={id} onClick={onClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        {isHovered ? <p>{`${id} - ${name} - RD$${price}`}</p> : "ELPEPE"}

    </button>
  )
}


// const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = () => setIsHovered(true);
// const handleMouseLeave = () => setIsHovered(false);

// return (
//   <div
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}