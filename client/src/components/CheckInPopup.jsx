import React, { useEffect, useState } from "react";
import ButtonWithImage from "./ButtonWithImage";
import InputTypeRadio from "./InputTypeRadio";
import axios from "axios";
import { ProductOnForm } from "./ProductOnForm";
import { useNewInvoice } from "../hooks/useNewInvoice";

export const CheckInPopup = (visible) => {
  const ex = () => {
    alert("it works");
  };

  const [preview, setPreview] = useState(false)
  // const [newInvoice, setNewInvoice] = useState({
  //   userId: 1,
  //   offer: 0,
  //   offerReason: "",
  //   paymentType: "CASH",
  //   detail: [],
  //   total: 0,
  // });

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:3000/api/product");
      setProducts(res.data ?? []);
    };
    getProducts();
  }, []);

  // useEffect(() => {
  //   setNewInvoice((invoice) => ({
  //     ...invoice,
  //     total: invoice.detail.reduce((a, b) => a + b.subtotal, 0),
  //   }));
  // }, [newInvoice.detail]);

  // const updateOffer = (offerValue) => {
  //   setNewInvoice((invoice) => ({ ...invoice, offer: parseInt(offerValue) }));
  // };

  // const updateOfferReason = (offerReason) => {
  //   setNewInvoice((invoice) => ({ ...invoice, offerReason: offerReason }));
  // };

  // const handleTypeOfPaymentChange = (paymentType) => {
  //   // const paymentTypes = ["Tarjeta", "Efectivo", "Transferencia"]

  //   // setNewInvoice((invoice) => ({ ...invoice, paymentType: paymentTypes[paymentType] }));
  //   console.log('first')
  // };

  const {onInvoiceChange, total, offerReason, offer, addProductToInvoice, removeProductFromInvoice, newInvoice} = useNewInvoice()
  const checkin = async () => {
    let res = await axios.post('http://localhost:3000/api/invoice', newInvoice)
    console.log(res)
  }

  // console.log(newInvoice);


  return (
    <div className="popup-container">
      <div className="popup-form">
        <div className="form-left">
          <p className="title">NUEVA FACTURA</p>
          <div className="left-header">
            <ButtonWithImage
              imageSrc={"./consumibleicon.svg"}
              text="Consumible"
              onClick={ex}
            />
            <ButtonWithImage
              imageSrc={"./vapeicon.svg"}
              text="Vape"
              onClick={ex}
            />
            <ButtonWithImage
              imageSrc={"./caricon.svg"}
              text="Carwash"
              onClick={ex}
            />
          </div>
          <div className="left-midlevel">
            <div className="discountnreason-container">
              <label htmlFor="discountInput">DESCUENTO</label>
              <input
                type="text"
                id="discountInput"
                placeholder="RD$100.00"
                // onChange={(e) => updateOffer(e.target.value)}
                name="offer"
                onChange={onInvoiceChange}
                value={offer}
              />
              <label htmlFor="discountreason">
                RAZON DEL DESCUENTO (SI APLICA)
              </label>
              <textarea
                id="discountreason"
                placeholder="Le tenia una deuda pendiente de RD$100"
                // onChange={(e) => updateOfferReason(e.target.value)}
                name="offerReason"
                onChange={onInvoiceChange}
                value={offerReason}
              ></textarea>
            </div>
            <div className="typeofpayment">
              <InputTypeRadio
                label="Tarjeta"
                name="typeofpayment"
                value="0"
                // onChange={(e) => handleTypeOfPaymentChange(e.target.value)}
                onChange={onInvoiceChange}
              />
              <InputTypeRadio
                label="Efectivo"
                name="typeofpayment"
                value="1"
                // onChange={(e) => handleTypeOfPaymentChange(e.target.value)}
                onChange={onInvoiceChange}
              />
              <InputTypeRadio
                label="Transferencia"
                name="typeofpayment"
                value="2"
                // onChange={(e) => handleTypeOfPaymentChange(e.target.value)}
                onChange={onInvoiceChange}
              />
            </div>
          </div>
          <div className="left-footer">
            <div className="totals">
              <div className="inputwithou">
                <label htmlFor="totalwithou">Total sin descuento</label>
                <input id="totalwithou" type="text" placeholder="RD$300" disabled value={total}/>
              </div>
              <div className="inputwith">
                <label htmlFor="totalwith">Total con descuento</label>
                <input id="totalwith" type="text" placeholder="RD$200" disabled value={total - offer >= 0 ? total - offer: 0}/>
              </div>
            </div>
            <label htmlFor="checkinButton">
              <button id="checkinButton" onClick={()=>{setPreview((preview)=>!preview)}}>FACTURAR</button> 
            </label>
            <div className="employee">
              <p>Empleado</p>
              <p>empleadoname</p>
            </div>
          </div>
        </div>
        {!preview ? <div className="form-right">
          <p className="title">PRODUCTOS</p>
          <input type="text" placeholder="BUSCAR PRODUCTO" />
          <div className="products">
            {products.map((e) => (
              <ProductOnForm
                product={e}
                key={e.id}
                // setNewInvoice={setNewInvoice}
                addProduct={addProductToInvoice}
                removeProduct={removeProductFromInvoice}
              />
            ))}
          </div>
        </div>
        : <div className="preview-container">
          <div className="preview"></div>
          <label htmlFor="checkinButton">
              <button id="checkinButton" onClick={checkin}>FACTURAR</button> 
            </label>
            <button className="goback" onClick={()=>{setPreview((preview)=>!preview)}}>goback</button>
        </div> 
      }
      
      </div>
    </div>
  );
};



