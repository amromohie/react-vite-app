import React from 'react';

function Child({product}) {
  console.log('Child component props:', product);
  return (
      <div>{product}</div>
  );
}

export default Child;