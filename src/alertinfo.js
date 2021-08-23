import React from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { useSelector, useDispatch } from "react-redux";
import { Alert_off } from 'redux/actions/alert';

export default function Alertinfo() {
const alertshow = useSelector(state => state.Alert.alertShow);
const alertcontent = useSelector(state => state.Alert.alertContent);
const alerttitle = useSelector(state => state.Alert.alertTitle);
const alerttype = useSelector(state => state.Alert.alertType);
 const dispatch = useDispatch();

const hanDismiss = () =>{
    dispatch(Alert_off());
}
        if(alertshow === false) return null;
        return (
            <div>
                <AlertContainer>
		<Alert headline={alerttitle} type={alerttype} onDismiss={() => hanDismiss()} timeout={2000}>{alertcontent}</Alert>
		
	</AlertContainer>
            </div>
        );
    }





