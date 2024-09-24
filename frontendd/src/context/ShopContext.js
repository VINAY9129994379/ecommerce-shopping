import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product,setAll_product]=useState([]);

    useEffect(() => {
        // Fetch all products
        fetch('http://localhost:5000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data))
            .catch((error) => console.error('Error fetching products:', error));
    
        // If user is authenticated, fetch cart items
        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:5000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((error) => console.error('Error fetching cart items:', error));
        }
    }, []);
    

    const addToCart = (itemId) => {
        // Check if the user is authenticated with the token
        const token = localStorage.getItem('auth-token');
        
        // Update cart items
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Initialize to 0 if undefined
        }));
    
        // Perform fetch if the user is authenticated
        if (token) {
            fetch('http://localhost:5000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
        }
    };
    
    const removeFromCart = (itemId) => {
        // Check if the user is authenticated with the token
        const token = localStorage.getItem('auth-token');
    
        // Update cart items
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item doesn't exist in the cart, return the previous state
            
            const updatedItems = { ...prev };
            updatedItems[itemId] = updatedItems[itemId] > 0 ? updatedItems[itemId] - 1 : 0;
    
            // Optionally remove the item if quantity is 0
            if (updatedItems[itemId] === 0) {
                delete updatedItems[itemId]; 
            }
    
            return updatedItems;
        });
    
        // Perform fetch if the user is authenticated
        if (token) {
            fetch('http://localhost:5000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
        }
    };
    
      
       
    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCarts = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
               totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    useEffect(() => {
        console.log("Cart items updated:", cartItems);
    }, [cartItems]);

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCarts,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
