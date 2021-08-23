
const initialState = {
    products: [],
  total:Number
};

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "List_Product":
            return { ...state,products: action.payload };
        case "Page_Product":
            return { ...state, products: action.payload, total: action.total};
        case "Cate_Product":
            return { ...state,total: action.total, products: action.payload };
        case "Update_Product":
            return {
                ...state,
                products: state.products.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),change : !state.change
            };
        case "Add_Product":
            return { ...state,products: [...state.products, action.payload] };
        case "Delete_Product":
            return {...state, products: state.products.filter((value) => value.id !== action.payload.id), change : !state.change };
    
          
        default:
            return state
    }
}

export default productReducer;