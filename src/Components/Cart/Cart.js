import React from 'react';

const Cart = ({budget}) => {
    return (
        <div className='text-center display-2 font-bold text-warning'>
            <h1>Curren Budget: {budget}</h1>
        </div>
    );
};

export default Cart;