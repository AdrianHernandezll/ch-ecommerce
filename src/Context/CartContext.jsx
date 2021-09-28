import { createContext, useState, useContext } from 'react';


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    // function addToCart(object) {
    //     const isUniqueCart = cartList.every(cart => cart !== object)
    //     if (isUniqueCart) {
    //         setCartList([...cartList, object])
    //     }
    // }
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