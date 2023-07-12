import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency,budget,expenses } = useContext(AppContext);
    const [newbudget,setNewBudget] = useState(budget);
    const [newexpenses] = useState(expenses);
    
    if(newbudget > 20000) {
        alert("The value cannot exceed upper limit of 20,000");
        setNewBudget("");
        return;
    }     
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step="10"
                defaultValue={budget}
                style={{size: 10}}
                onChange={(event) => setNewBudget(event.target.value)}>
            </input>
            <p>{newbudget}</p>
            
            
        </div>
          
    );
    
};
export default Budget;
