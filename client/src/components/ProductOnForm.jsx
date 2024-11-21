import React, { useState } from "react";

export const ProductOnForm = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [incart, setincart] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);



  return (
    <button
      className={incart ? "ProductOnForm incart" : "ProductOnForm"}
      id={product.id}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <p>{`${product.id} - ${product.name} - RD$${product.price}`}</p>
      {isHovered && (
        <>
          <div className="productstuff">
            <input type="number" name="amount" id="amount" />
            <p className="totalofamount">{product.stock}</p>
           { !incart ? <button className="addtocart" onClick={() => setincart(true)}>ADD</button> : <button className="removefromcart" onClick={() => setincart(false)}>REMOVE</button>}
          </div>
        </>
      )}
    </button>
  );
};

// const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = () => setIsHovered(true);
// const handleMouseLeave = () => setIsHovered(false);

// return (
//   <div
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
