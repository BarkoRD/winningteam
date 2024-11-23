import { useEffect, useState } from 'react'
import axios from 'axios'

export const useNewInvoice = () => {
  const [newInvoice, setNewInvoice] = useState({
    userId: 1,
    offer: 0,
    offerReason: '',
    paymentType: 'Efectivo',
    detail: [],
    total: 0
  })

  const onInvoiceChange = ({ target }) => {
    const { name, value } = target
    setNewInvoice((invoice) => ({ ...invoice, [name]: value }))
  }

  const addProductToInvoice = ({ id, price }, quantity) => {
    console.log(newInvoice.detail)
    setNewInvoice((invoice) => ({
      ...invoice,
      detail: [
        ...invoice.detail,
        {
          productId: id,
          subtotal: parseFloat(price) * parseInt(quantity),
          quantity: parseInt(quantity)
        }
      ]
    }))
  }

  const removeProductFromInvoice = (productId) => {
    setNewInvoice((invoice) => ({
      ...invoice,
      detail: invoice.detail.filter((e) => e.productId !== productId)
    }))
  }

  const onSubmitInvoice = async () => {
    let res = await axios.post('http://localhost:3000/api/invoice', newInvoice)
    console.log(res)
  }

  useEffect(() => {
    setNewInvoice((invoice) => ({
      ...invoice,
      total: invoice.detail.reduce((a, b) => a + b.subtotal, 0)
    }))
  }, [newInvoice.detail])

  const onpaymentTypeChange = ({ target }) => {
    const { value: paymentType } = target
    const paymentTypes = ['Tarjeta', 'Efectivo', 'Transferencia']
    setNewInvoice((invoice) => ({
      ...invoice,
      paymentType: paymentTypes[paymentType]
    }))
  }

  // const totalWithOffer =
  //   newInvoice.total - newInvoice.offer >= 0
  //     ? newInvoice.total - newInvoice.offer
  //     : 0

  console.log(
    
  )

  return {
    ...newInvoice,
    newInvoice,
    onInvoiceChange,
    addProductToInvoice,
    removeProductFromInvoice,
    onSubmitInvoice,
    onpaymentTypeChange,
    totalWithOffer:
      newInvoice.total - newInvoice.offer >= 0
        ? newInvoice.total - newInvoice.offer
        : 0
  }
}
