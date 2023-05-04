export const addCart = (Product)=>{
  console.log('actionType', Product)
    return{
       type : "add_Cart",
       payload : Product
    }
}

export const delCart = (Product)=>{
    return{
       type : "del_Cart",
       payload : Product
    }
}

export const removeItem = (Product) => {
    return {
      type: 'remove_item',
      payload: Product
    };
  };