import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export const CreateProduct = () => {
  const [catagory, setCatagory] = useState({
    name: "",
    products: [
      {
        color: "",
        listPrice: 0,
        name: "",
        productID: 0,
        productNumber: "",
        size: 0,
        standardCost: 0,
        weight: 0,
      },
    ],
  });

  const handleCataChange = (e) => {
    setCatagory({
      ...catagory,
      [e.target.name]: e.target.value,
    });
  };

  const handleProChange = (e, index) => {
    const { name, value } = e.target;
    const updateProduct = [...catagory.products];
    updateProduct[index][name] = value;

    setCatagory({
      ...catagory,
      products: updateProduct,
    });
  };

  function clearAll (){
    setCatagory({
      name: "",
    products: [
      {
        color: "",
        listPrice: 0,
        name: "",
        productID: 0,
        productNumber: "",
        size: 0,
        standardCost: 0,
        weight: 0,
      },
    ]
    })
  }


  const createCatagory = (e) => {
    e.preventDefault();

    fetch('https://localhost:7115/ProductCategories', {
      method : "POST",
      headers : { "Content-type" : "application/json"},
      body : JSON.stringify(catagory)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert('goods')
      clearAll()
    })
    .catch(error => {
      alert('Error creating category: ' + error.message);
    });
  };

  return (
    <>
      <div>
        <div>CreateProduct</div>
        <form onSubmit={createCatagory}>
          <div className="row">
            <div className="col-3">
              <label htmlFor="catagoryName">CatagoryName</label>
              <input
                type="text"
                name="name"
                id="catagoryName"
                value={catagory.name}
                onChange={handleCataChange}
              />
            </div>
          </div>

          <h2>Product</h2>
          {catagory.products.map((p, i) => (
            <div key={i} className="card mb-3 p-3">
              <div className="row">
                <div className="col-3">
                  <label htmlFor={`productName-${i}`}>productName</label>
                  <input
                    type="text"
                    id={`productName-${i}`}
                    name="name"
                    value={p.name}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="productNumber">productNumber</label>
                  <input
                    type="text"
                    id={`productNumber-${i}`}
                    name="productNumber"
                    value={p.productNumber}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="color">color</label>
                  <input
                    type="text"
                    id={`color-${i}`}
                    name="color"
                    value={p.color}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="listPrice">listPrice</label>
                  <input
                    type="number"
                    id={`listPrice-${i}`}
                    name="listPrice"
                    value={p.listPrice}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label htmlFor="weight">weight</label>
                  <input
                    type="number"
                    id={`weight-${i}`}
                    name="weight"
                    value={p.weight}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="productName">standardCost</label>
                  <input
                    type="number"
                    id={`standardCost-${i}`}
                    name="standardCost"
                    value={p.standardCost}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="productName">size</label>
                  <input
                    type="number"
                    id={`size-${i}`}
                    name="size"
                    value={p.size}
                    onChange={(e) => handleProChange(e, i)}
                  />
                </div>
              </div>
            </div>
          ))}

          <button type="submit" className="btn btn-primary">Create Category</button>
        </form>
      </div>
    </>
  );
};


