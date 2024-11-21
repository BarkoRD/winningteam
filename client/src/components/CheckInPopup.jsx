import React from "react";
import ButtonWithImage from "./ButtonWithImage";
import InputTypeRadio from "./InputTypeRadio";

export const CheckInPopup = (visible) => {
  const ex = () => {
    alert("it works");
  };
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
            <input type="text" id="discountInput" placeholder="RD$100.00" />
            <label htmlFor="discountreason">
              RAZON DEL DESCUENTO (SI APLICA)
            </label>
            <textarea
              id="discountreason"
              placeholder="Le tenia una deuda pendiente de RD$100"
            ></textarea>
          </div>
          <div className="typeofpayment">
            <InputTypeRadio
              label="Tarjeta"
              name="typeofpayment"
              value="0"
              onChange={ex}
            />
            <InputTypeRadio
              label="Efectivo"
              name="typeofpayment"
              value="1"
              onChange={ex}
            />
            <InputTypeRadio
              label="Transferencia"
              name="typeofpayment"
              value="2"
              onChange={ex}
            />
          </div>
          </div>
          <div className="left-footer">
            <div className="totals">
              <div className="inputwithou">
              <label htmlFor="totalwithou">Total sin descuento</label>
              <input id="totalwithou" type="text" placeholder="RD$300" />
              </div>
              <div className="inputwith">
              <label htmlFor="totalwith">Total con descuento</label>
              <input id="totalwith" type="text" placeholder="RD$200" />
            
              </div>
             </div>
             <label htmlFor="checkinButton">
              <button id="checkinButton">FACTURAR</button>
             </label>
             <div className="employee">
              <p>Empleado</p>
              <p>empleadoname</p>
             </div>
          </div>
          
        </div>
        <div className="form-right">
          <p className="title">PRODUCTOS</p>
          <input type="text" placeholder="BUSCAR PRODUCTO" />
        </div>
      </div>
    </div>
  );
};
