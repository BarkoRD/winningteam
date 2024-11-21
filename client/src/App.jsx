import './App.css'
import './Header.css'
import './tableheader.css'
import './InvoicesTable.css'
import './Shortcut.css'
import './CheckInPopup.css'
import './InputTypeRadio.css'

import Header from './components/Header.jsx'
import InvoicesTable from './components/InvoicesTable.jsx'
import Shortcut from './components/Shortcut.jsx'
import TableHeader from './components/TableHeader.jsx'

import { useState } from 'react'
import { CheckInPopup } from './components/CheckInPopup.jsx'



function App() {
  const [checkInPopup, setCheckInPopup] = useState(!false)

  const onCheckinClick = ()=>{
    setCheckInPopup(true)
  }
  return (
    <>
      <Header />
      {checkInPopup && <CheckInPopup /> }
      <TableHeader onCheckinClick={onCheckinClick}/>
      <InvoicesTable />
      <Shortcut />
    </>
  )
}

export default App
