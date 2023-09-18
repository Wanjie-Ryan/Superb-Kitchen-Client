import React, {useContext, createContext, useState} from 'react'

const cartContext = createContext()

export function useCart(){
    return useContext(cartContext)
}

export function CartProvider({children}) {


    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}