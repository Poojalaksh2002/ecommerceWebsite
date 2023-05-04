const initialState = []

const reducer = (state=initialState, action)=>{
    
    const product = action.payload

    switch(action.type){

        case "add_Cart":
        
            const productIsExist = state.find((item)=>item.id === product.id)
            alert(state)
            console.log("productExist", productIsExist)
            if(productIsExist){
                return state.map((item)=>item.id === product.id ?{...item, qty: item.qty + 1}: state)
            }
            else{
                const product = action.payload
                return[
                     ...state ,{...product, qty:1}
                 ]
            }
             break;

        case "del_Cart" :

            const productIsExist1 = state.find((item)=>item.id === product.id)
            if (productIsExist1){
                return state.map((item)=>item.id === product.id ?{...item, qty: item.qty - 1}: item)
            }
            else{
                return state.filter((item)=>item.id !== productIsExist1.id)
            }
            break;

         case "remove_item"  :
            return state.filter((item)=>item.id !== action.payload.id) 
          break;

        default :
           return state;
    }
}

export default reducer;