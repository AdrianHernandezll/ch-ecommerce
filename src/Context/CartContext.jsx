import { createContext, useState, useContext } from 'react';


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function addToCart(object) {
        if (object.indexOf(cartList) !== object.id) {
            setCartList([...cartList, object]);
        }
    }

    function deleteList() {
        cartList([])
    }

    console.log(cartList);

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