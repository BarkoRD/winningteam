import { useState } from 'react';
import ButtonWithImage from './ButtonWithImage.jsx'


function TableHeader({ onCheckinClick }) {
  const ex = ()=>{
    alert('it works')
  }
  return (
    <div className="tableheader">
      <div className="container-tableheader__buttons">
        <div className="tableheader-button">
          <ButtonWithImage imageSrc={"facturaricon.svg"} text="Facturar" onClick={onCheckinClick}
      />
        </div>
        <div className="tableheader-button">
          <ButtonWithImage imageSrc={"imprimiricon.svg"} text="Imprimir" onClick={ex}
      />
        </div>
      </div>
      <div className="right">
      <div className="container-tableheader__filter">
        <div className="deletefilter-button">
          <img src="deleteicon.svg" alt="" />  
        </div>
        <div className="filter-button">
          <ButtonWithImage imageSrc={"./consumibleicon.svg"} text="Consumible" onClick={ex}
      />
        </div>
        <div className="filter-button">
          <ButtonWithImage imageSrc={"./vapeicon.svg"} text="Vape" onClick={ex}
      />
        </div>
        <div className="filter-button"> 
          <ButtonWithImage imageSrc={"./caricon.svg"} text="Carwash" onClick={ex}
      />
        </div>
      </div>
      <div className="container-tableheader__searchbox">
        <input type="text" id="search" />
        <label htmlFor="search"><img src="lupaicon.svg" alt="" srcset="" /></label>
      </div>
      </div>
    </div>
  );
}

export default TableHeader;
