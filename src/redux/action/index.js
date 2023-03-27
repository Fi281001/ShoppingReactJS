//for add item to cart
export const addCart = (product)=>{
    return {
        type: "ADD",
        payload: product
    }
}

//for delete item to cart
export const deleteCart = (product)=>{
    return {
        type: "DELETE",
        payload: product
    }
}
