import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
    <div className='alert alert-secondary'> { 
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">Currency £ Pound</option>
        <option value="₹">Currency ₹ Ruppee</option>
        <option value="€">Currency € Euro</option>
        <option value="$">Currency $ Dollar</option>
      </select>	
      }	
    </div>
    );
};
export default Currency;