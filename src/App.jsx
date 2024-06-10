import React from 'react'
import {add,sub,mul,div} from './Calc';

function App(){
    return (
    <ul>
      <li>Result of the summetion: {add(40,4)}</li>
      <li>Result of the subtraction: {sub(40,4)}</li>
      <li>Result of the multiplication: {mul(40,4)}</li>
      <li>Result of the division: {div(40,5)}</li>
    </ul>
    )
};

export default App;