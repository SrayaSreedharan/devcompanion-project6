import React from 'react';

const Card = ({ label, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <div className="text-2xl">{icon}</div>
      <div>{label}</div>
    </button>
  );
};

export default Card;
