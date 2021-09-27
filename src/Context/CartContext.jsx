import { createContext, useState, useContext } from 'react';


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function addToCart(object) {
        setCartList([...cartList, object]);
    }

    function deleteList() {
        cartList([])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteList
        }}>
            {children}
        </CartContext.Provider>
    )
}