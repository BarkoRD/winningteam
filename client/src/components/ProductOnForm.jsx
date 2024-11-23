import React, { useState } from "react";

export const ProductOnForm = ({ product, addProduct, removeProduct }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [incart, setincart] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [quantity, setQuantity] = useState(0)

  const addProducttoInvoice = () => {
    setincart(true)
    addProduct(product, quantity)
    // setNewInvoice((invoice) => ({
    //   ...invoice,
    //   detail: [...invoice.detail, { productId: product.id, quantity: parseInt(quantity), subtotal:product.price * quantity}]
    
    // }));
  };

  const removeProducttoInvoice = () => {
    setincart(false)
    removeProduct(product, quantity)
    // setNewInvoice((invoice) => ({
    //   ...invoice,
    //   detail: invoice.detail.filter((e)=>e.productId != product.id)
    
    // }));
  };

  return (
    <div
      className={incart ? "ProductOnForm incart" : "ProductOnForm"}
      id={product.id}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <p>{`${product.id} - ${product.name} - RD$${product.price}`}</p>
      {isHovered && (
        <>
          <div className="productstuff">
            <input type="number" name="amount" id="amount" onChange={(e)=>setQuantity(e.target.value)} />
            <p className="totalofamount">{product.stock}</p>
            {!incart ? (
              <button className="addtocart" onClick={addProducttoInvoice}>
                ADD
              </button>
            ) : (
              <button
                className="removefromcart"
                onClick={removeProducttoInvoice}
              >
                REMOVE
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
