import { useEffect, useState } from "react"


export const Product = () => {

  const [product , setProduct] = useState([])

  function GetProduct(){
    fetch("https://localhost:7115/ProductCategories")
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(data => {
      setProduct(data)
    })
    .catch(error =>{
      alert(`unable to get : ${error.message}  error`)
    })
  }

useEffect(GetProduct, [])

console.log(product);

function deleteProduct(id, name){

  const Conf = confirm(`Delete ${name}`)
  if(Conf){
    fetch("https://localhost:7115/ProductCategories/"+ id, {
      method : "DELETE"
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("error");
        
      }  
      GetProduct()
      alert(`${name} Deleted Successfully`)
    })
    .catch(error =>{
      alert(`unabele to connecr ${error}`)
    })
  }
    
}


  return (
    <>
      {/* {JSON.stringify(product)} */}
      <table className="table">
        <thead>
          <tr>
            <th>Product Catagory With Products</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          product.map((product, index)=>{
              return (
                <tr key={index}>
                    <td>
                      <strong>Catagory Name : {product.name}</strong> 
                      {product.products.length> 0 ?(
                          <table className="table">
                          <thead>
                            <tr>
                              <th>productID</th>
                              <th>name</th>
                              <th>productNumber</th>
                              <th>color</th>
                              <th>standardCost</th>
                              <th>listPrice</th>
                              <th>size</th>
                              <th>weight</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              product.products.map((pro, ind) =>{
                                return(
                                  <tr key={ind}>
                                      <td>{pro.productID}</td>
                                      <td>{pro.name}</td>
                                      <td>{pro.productNumber}</td>
                                      <td>{pro.color}</td>
                                      <td>{pro.standardCost}</td>
                                      <td>{pro.listPrice}</td>
                                      <td>{pro.size}</td>
                                      <td>{pro.weight}</td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
                      </table>
                      ) : (
                        <p>No products available</p> 
                      )}
                        
                    </td>
                    <td>
                      <button className="btn btn-secondary m-2">Edit</button>
                      <button className="btn btn-danger " onClick={() => deleteProduct(product.productCategoryID , product.name )}>Delete</button>
                    </td>
                </tr>
              )
          })
        }
        </tbody>
      </table>
       <hr />
       
    </>
  )
}
