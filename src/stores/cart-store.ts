import AsyncStorage from '@react-native-async-storage/async-storage'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { ProductProps } from '@/utils/data/products'
import * as cartInMemory from './helpers/cart-in-memory'

export type TProductCartProps = ProductProps & {
  quantity: number
}

type TStateProps = {
  products: TProductCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
  clear: () => void
}

export const useCartStore = create(
  persist<TStateProps>(
    set => ({
      products: [],
      add: (product: ProductProps) =>
        set(state => ({
          products: cartInMemory.add(state.products, product)
        })),
      remove: (productId: string) =>
        set(state => ({
          products: cartInMemory.remove(state.products, productId)
        })),
      clear: () => set(() => ({ products: [] }))
    }),
    {
      name: 'orders:cart',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
