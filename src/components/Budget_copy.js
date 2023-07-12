import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const [budget,setBudget] = useState('');

    if(budget > 20000) {
        alert("The value cannot exceed upper limit of 20,000");
        setBudget("");
        return;
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                    </input>
                </div>
           
    );
};
export default Budget;
