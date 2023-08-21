import React from 'react';

const Show = (props) => {
  const { name, img } = props.pokemon; // Destructure the props

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
    </div>
  );
};

export default Show;
