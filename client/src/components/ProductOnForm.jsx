import React from 'react'

export const ProductOnForm = (id, name, price, hover, onClick) => {
  return (
    <button className="ProductOnForm" id={id} onClick={onClick} onm>
        <p>{`${id} - ${name} - RD$${price}`}</p>

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