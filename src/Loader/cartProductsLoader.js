import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch("products.json");
    const products = await loaderProducts.json();
    
    //if cart data is  is database, uou have to use async await
    const storedCart = getShoppingCart();
    const saveCart = [];

    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    return saveCart;
}

export default cartProductsLoader;