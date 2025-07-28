import React, {useEffect,useState} from 'react';
import Child from "../Child/Child.jsx";

function Parent() {

  useEffect(() => {
    console.log('useEffect is called');
    // component did mount
    // call api to fetch data


    return () => {
      console.log('useEffect cleanup is called');
      // component will unmount
      // cleanup code here, like removing event listeners or cancelling API requests
    }

  },[])

  // use state is hook to manage state in functional components
  // useState returns an array with two elements: the current state and a function to update
  const [products, setProducts] = useState([
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
    {id: 4, name: 'Product 4', price: 400},
    {id: 5, name: 'Product 5', price: 500},
    {id: 6, name: 'Product 6', price: 600},
    {id: 7, name: 'Product 7', price: 700},
    {id: 8, name: 'Product 8', price: 800},
    {id: 9, name: 'Product 9', price: 900},
    {id: 10, name: 'Product 10', price: 1000}
  ]);

  function deleteProduct(id) {
    console.log("delete product with id: ", id);
    let productsCloned = structuredClone(products);
    let filteredProducts = productsCloned.filter(product => product.id !== id);

    setProducts(filteredProducts)
  }

  function updateProduct(id) {
    console.log("update product with id: ", id);
    let productsCloned = structuredClone(products);
    let index = productsCloned.findIndex(product => product.id === id);
    if (index !== -1) {
      productsCloned[index].price = 5000 + Math.floor(Math.random() * 1000)
      setProducts(productsCloned);
    }
  }

  return (
      <>
        <div className="grid grid-cols-4 gap-4">

          {
            products.map((product) => {
              return (
                  <Child delete={deleteProduct} update={updateProduct}
                         product={product}/>
              )
            })
          }
        </div>
      </>

  );
}

export default Parent;
// This is a Parent component that can be used to wrap Child components or other content.