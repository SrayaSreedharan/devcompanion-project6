import React from 'react';

const Card = ({ item}) => {
  return (
    <button onClick={item.onClick} className={item.className}>
      <div className="text-2xl">{item.icon}</div>
      <div>{item.label}</div>
    </button>
  );
};

export default Card;
