
import { useEffect, useState } from "react";
import Routes from './router';

import {useHistory} from 'react-router-dom';
import Alertinfo from "alertinfo";



function App() {
  
  return (
    <>
  <Alertinfo/>
    <Routes />
     
    </>
  );
}

export default App;
