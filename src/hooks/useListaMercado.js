import { useMemo, useState } from 'react'
import { ITEMS_MERCADO_INICIALES } from '../data/itemsMercado'

export function useListaMercado() {
  const [items, setItems] = useState(ITEMS_MERCADO_INICIALES)

  const alternarComprado = (id) => {
    setItems((actuales) =>
      actuales.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    )
  }

  const totalComprados = useMemo(
    () => items.filter((item) => item.comprado).length,
    [items]
  )

  return { items, alternarComprado, totalComprados }
}