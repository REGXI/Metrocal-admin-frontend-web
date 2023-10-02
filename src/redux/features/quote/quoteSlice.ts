import { createSlice } from '@reduxjs/toolkit'
import type {
  IClient,
  IEquipmentQuoteRequest,
} from '@/app/dashboard/quotes/requests/[id]/page'

const initialState = {
  equipment: [] as IEquipmentQuoteRequest[],
  client: {} as IClient,
  selectedEquipment: {} as IEquipmentQuoteRequest,
  IVA: 0,
  discount: 0,
  total: 0,
  subtotal: 0,
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setEquipment: (state, action) => {
      state.equipment = action.payload
    },
    setClient: (state, action) => {
      state.client = action.payload
    },
    setSelectedEquipment: (state, action) => {
      state.selectedEquipment = action.payload
    },
    setTotal: (state, action) => {
      state.selectedEquipment.total = action.payload
    },
    changeTotalEquipment: (state, action) => {
      const { id, total } = action.payload
      const equipment = state.equipment.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            total,
          }
        }
        return item
      })
      state.equipment = equipment
    },
    changeStatusSelectedEquipment: (state, action) => {
      const { status } = action.payload
      state.selectedEquipment.status = status
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload
      const equipment = state.equipment.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status,
          }
        }
        return item
      })
      state.equipment = equipment
    },
    changePriceSelectedEquipment: (state, action) => {
      const { price } = action.payload
      state.selectedEquipment.price = Number(price)
    },
    changePrice: (state, action) => {
      const { id, price } = action.payload
      const equipment = state.equipment.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            price: Number(price),
          }
        }
        return item
      })
      state.equipment = equipment
    },
    changeDiscount: (state, action) => {
      const { id, discount } = action.payload
      const equipment = state.equipment.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            discount: Number(discount),
          }
        }
        return item
      })
      state.equipment = equipment
    },

    changeDiscountSelectedEquipment: (state, action) => {
      const { discount } = action.payload
      state.selectedEquipment.discount = Number(discount)
    },
    setIVA: (state, action) => {
      state.IVA = action.payload
    },
    setTotalQuote: (state, action) => {
      state.total = action.payload
    },
    setSubtotal: (state, action) => {
      state.subtotal = action.payload
    },
    setDiscountQuote: (state, action) => {
      state.discount = action.payload
    },
  },
})

export const {
  setEquipment,
  setClient,
  setSelectedEquipment,
  setTotal,
  changePrice,
  changePriceSelectedEquipment,
  changeDiscount,
  changeDiscountSelectedEquipment,
  changeStatus,
  changeStatusSelectedEquipment,
  setIVA,
  setTotalQuote,
  setSubtotal,
  setDiscountQuote,
  changeTotalEquipment,
} = quoteSlice.actions

export default quoteSlice.reducer

export const handleStatus = (id: number, status: string) => (dispatch: any) => {
  dispatch(changeStatus({ id, status }))
  dispatch(changeStatusSelectedEquipment({ status }))
}

export const handlePrice = (id: number, target: any) => (dispatch: any) => {
  dispatch(changePrice({ id, price: target.value }))
  dispatch(changePriceSelectedEquipment({ price: target.value }))
  dispatch(changeTotalEquipment({ id, total: target.value }))
  dispatch(calculateTotal())
  dispatch(calculateSubtotal())
  dispatch(calculateTotalQuote())
}

export const handleDiscount = (id: number, target: any) => (dispatch: any) => {
  dispatch(changeDiscount({ id, discount: target.value }))
  dispatch(changeDiscountSelectedEquipment({ discount: target.value }))
  dispatch(calculateTotal())
  dispatch(calculateSubtotal())
  dispatch(calculateTotalQuote())
}

export const calculateTotal = () => (dispatch: any, getState: any) => {
  const { selectedEquipment } = getState().quote
  const { price, count, discount } = selectedEquipment || {
    price: 0,
    count: 0,
    discount: 0,
  }
  const total = price * count - (price * count * discount) / 100
  dispatch(setTotal(total))
  dispatch(changeTotalEquipment({ id: selectedEquipment.id, total }))
}
export const calculateTotalQuote = () => (dispatch: any, getState: any) => {
  console.log('calculateTotalQuote')
  const { subtotal, discount, IVA } = getState().quote
  const totalQuote = subtotal - (subtotal * discount) / 100
  const totalIVA = totalQuote * (IVA / 100)
  dispatch(setTotalQuote((totalQuote + totalIVA).toFixed(2)))
}

export const calculateSubtotal = () => (dispatch: any, getState: any) => {
  console.log('calculateSubtotal')
  const { equipment } = getState().quote
  let subtotal = 0

  equipment.forEach((item: any) => {
    subtotal += item.total
  })
  console.log('subtotal', equipment)

  dispatch(setSubtotal(subtotal))
}

export const handleIVA = (target: any) => (dispatch: any) => {
  dispatch(setIVA(target.value))
  dispatch(calculateTotalQuote())
}

export const handleDiscountQuote = (target: any) => (dispatch: any) => {
  dispatch(setDiscountQuote(target.value))
  dispatch(calculateTotalQuote())
}

export const handleDispatchOnLoad = () => (dispatch: any) => {
  dispatch(calculateTotal())
  dispatch(calculateSubtotal())
  dispatch(calculateTotalQuote())
}
