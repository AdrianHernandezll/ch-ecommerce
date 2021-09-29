import { createContext, useState, useContext } from 'react';


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function addToCart(object, quantity) {
        const index = cartList.findIndex(i => i.object.id === object.id)
        if (index > -1) {
            const oldqcy = cartList[index].quantity

            cartList.splice(index, 1)
            setCartList([...cartList, { object, quantity: quantity + oldqcy }])
        } else {
            setCartList([...cartList, { object, quantity }])
        }
    }

    const removeItem = (object) => {

        const deleteProduct = cartList.filter((obj) => obj.object.id !== object.object.id);

        setCartList([...deleteProduct]);
    }

    const iconCartWd = () => {
        return cartList.reduce((acc, object) => acc + object.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((acc, object) => (acc + (object.quantity * object.object.price)), 0)
    }

    function clear() {
        cartList([])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            iconCartWd,
            totalPrice,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}