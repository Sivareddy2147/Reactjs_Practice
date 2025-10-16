import React, { useEffect, useState } from 'react'

function Products() {
   const [products, setproducts] = useState();
        useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         setproducts([...data]);
       });
     }, []);
     return (
       <div className="border border-2 m-2 p-2 border-danger">
           <h1>Products</h1>
           <ul>
           {
             products?.map((prod) => {
               return (
                  <li key={prod.id}>
                    <div>
                      <p>Essence Mascara Lash Princess</p>
                      <img src={prod.images[0]} alt={prod.title} height="100px" width="100px"/>
                    </div>
                   {/* <b>{prod.title}</b> */}
                 </li>
               );
             })
          }
         </ul>
           </div>
     );
}

export default Products;