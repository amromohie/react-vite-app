import React from 'react';
import Child from "../Child/Child.jsx";

function Parent() {

  const [product, setProduct] = React.useState('Laptop');

  return (
      <>
        <div>parent</div>
        <Child product={product}/>
      </>

  );
}

export default Parent;
// This is a Parent component that can be used to wrap Child components or other content.