
import { add, getAll, getId, getPage, remove, update } from "../../api/productApi";

export const listProducts = () => async dispatch => {
    try {
        const {data} = await getAll();
        dispatch({type: "List_Product", payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const ProPage = (page) => async dispatch => {
    try {
        const {data} = await getPage(page);
        dispatch({type: "Page_Product", payload:data.content, total:data.totalPages })
    } catch (error) {
        console.log(error);
    }
}
export const addProduct = (item) => async dispatch =>{
    try {
        const {data} = await add(item);
        dispatch({type: "Add_Product", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async (dispatch) =>{
    try {
     
       const {data} = await remove(id);
       dispatch({type: "Delete_Product", payload: data });
    
    } catch (error) {
        console.log(error);
    }
}


export const editProduct = (item) => async dispatch =>{
    try {
        const {data} = await update(item);
        dispatch({type: "Update_Product", payload: data });
     } catch (error) {
         console.log(error);
     }
}

