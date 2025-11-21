import { CartItem } from './cart-item.model'
import { Product } from './product.model'

export interface CartContextType {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
  addToCart: (product: Product) => void,
  deleteFromCart: (product: Product) => void,
  cartItems: CartItem[]
}