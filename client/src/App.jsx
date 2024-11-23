import './styles/App.css'
import './styles/Header.css'
import './styles/tableheader.css'
import './styles/InvoicesTable.css'
import './styles/Shortcut.css'
import './styles/CheckInPopup.css'
import './styles/InputTypeRadio.css'
import './styles/ProductOnForm.css'

import Header from './components/Header.jsx'
import InvoicesTable from './components/InvoicesTable.jsx'
import Shortcut from './components/Shortcut.jsx'
import TableHeader from './components/TableHeader.jsx'

import { useState } from 'react'
import { CheckInPopup } from './components/CheckInPopup.jsx'


function App() {
  const [checkInPopup, setCheckInPopup] = useState(false)

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
