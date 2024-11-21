import ButtonWithImage from './ButtonWithImage.jsx'


function Header() {
   const ex = ()=>{
    alert('it works')
  }
  return (
    <header>
      <div className="logo">
        <img src="./logosi.svg" alt="elpepe" />
      </div>
      <div className="menus">
        <div className="menus__button">
          <ButtonWithImage imageSrc={"./inventorylogo.svg"} text="Inventory" onClick={ex}
      />
        </div>
        <div className="menus__button">
          <ButtonWithImage imageSrc={"./resumenlogo.svg"} text="Resume" onClick={ex}
      />
        </div>
        <div className="menus__button">
          <ButtonWithImage imageSrc={"./usuariologo.svg"} text="Usuario" onClick={ex}
      />
        </div>
      </div>
    </header>
  );
}

export default Header;
