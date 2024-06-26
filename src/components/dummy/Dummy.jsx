import React, { useState } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    const addItem = (item) => {
        if (items.length < 5) {
            setItems([...items, item]);
            setError('');
        } else {
            setError('Cannot add more than 5 items.');
        }
    };

    return (
        <div>
            <h3>Item List</h3>
            <button onClick={() => addItem(`Item ${items.length + 1}`)}>Add Item</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
