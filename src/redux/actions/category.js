import { getAll, getPage} from "api/categoryApi";

export const List_Category = () => async dispatch => {
    try {
        const {data} = await getAll();
        dispatch({type: "List_Category", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const CatePage = (page) => async dispatch => {
    try {
        const {data} = await getPage(page);
        dispatch({type: "Page_Category", payload:data.content, total:data.totalPages })
    } catch (error) {
        console.log(error);
    }
}
