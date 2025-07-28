import React from 'react';

function Child(props) {
  let { id, name, price } = props.product;
  return (
      <>
      <div className="p-4 border bg-blue-950 rounded shadow">
        <h2 className="text-lg font-bold">Product Details</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button onClick={() => props.delete(id)} className="btn bg-red-800">delete</button>
        <button onClick={() => {props.update(id)}} className="btn bg-gray-800">update</button>
      </div>
      </>
  );
}

export default Child;