import axios from 'axios'
import { useEffect, useState } from 'react'


function InvoicesTable() {
    const [invoices, setInvoices] = useState([])
    useEffect( ()=>{
        const getinvoices = async()=>{
        const res = await axios.get('http://localhost:3000/api/invoice')
        setInvoices(res.data)
        }   
        getinvoices()
    },[])
    return (
        <div className="invoicestable">
            <p>{JSON.stringify(invoices)}</p>
        </div>
    )
}

export default InvoicesTable