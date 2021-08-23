export const Alert_on = (content, title, type) => {
    
    return {
        type: 'ALERT_ON',
        alertContent: content,
        alertTitle: title,
        alertType: type
    }
}

export const Alert_off = () => {
    return {
        type: 'ALERT_OFF',
    }
}
