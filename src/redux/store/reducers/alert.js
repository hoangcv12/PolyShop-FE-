const initialState = {
    alertShow: false,
    alertContent: "",
    alertTitle:"",
    alertType:""
}

const AlertReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ALERT_ON":
            return { ...state, alertShow: true, alertContent: action.alertContent,
                alertTitle: action.alertTitle, alertType: action.alertType
            }
        case "ALERT_OFF":

            return { ...state, alertShow: false }
        default:
            return state
    }
}
export default AlertReducer;