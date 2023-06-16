import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
const Budget = () => {
    const { dispatch} = useContext(AppContext);
    const { budget, currency } = useContext(AppContext);

    const changeBudget = (budget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(budget)+9,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{size: 10}}
                onChange={(event) => changeBudget(event.target.value)}>
            </input>            
            </span>
        </div>
    );
};
export default Budget;