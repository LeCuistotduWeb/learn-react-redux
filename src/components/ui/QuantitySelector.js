import React from 'react';

const QuantitySelector = ({min=1, max=5, value, onChange}) => {
  return (
    <input min={1} max={max} type="number" placeholder="quantity" value={value} onChange={e => onChange(e.target.value)}/>
  );
}

export default QuantitySelector;
