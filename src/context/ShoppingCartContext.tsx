import { ReactNode, createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getQuantity: (id: number) => number
    cartCount: () => number
    increaseQuantity: (id: number, amount: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    removeAllFromCart: () => void
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const CartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }
    const increaseQuantity = (id: number, amount: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: amount }]
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: amount }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decreaseQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity == 1) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }

    const removeAllFromCart = () => setCartItems([])

    const cartCount = () => {
        return cartItems.reduce((item, cur) => item + cur.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{
                getQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                removeAllFromCart,
                cartCount,
                cartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
