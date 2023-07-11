import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,currency } = useContext(AppContext);
    const [budget,setBudget] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={Budget}
                        style={{size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                    </input>
                </div>
           
    );
};
export default Budget;
