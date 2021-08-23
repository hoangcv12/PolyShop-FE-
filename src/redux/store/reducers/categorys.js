const initialState = {
    categorys: [],
    total:Number
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "List_Category":
            return { ...state, categorys: action.payload };
            case "Page_Category":
                return { ...state, categorys: action.payload, total: action.total};
        default:
            return state
    }
}

export default categoryReducer;