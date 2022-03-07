import { useState, useEffect } from "react";
import { PRODUCTS } from "../dummy/products";
import "../App.css";

const Home = () => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowcart] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <>
      <div className="container">
        <h1>My Shop</h1>
        <p className="text-center">
          <button
            type="button"
            className="btn btn-lg btn-primary position-relative"
            onClick={() => {
              setShowcart(!showCart);
            }}
          >
            Bucket
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {amount.toLocaleString()}
            </span>
          </button>
        </p>
        {showCart ? (
          <>
            <h3>Bucket List</h3>
            {carts.map((item, index) => (
              <div className="content" key={index}>
                <p>
                  ProductId: <b>{item.id}</b>
                </p>
                <p>Name: {item.name}</p>
                <p>
                  Price: <b className="text-success">${item.price.toLocaleString()}</b>
                </p>
                <div className="text-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      let newCart = carts;
                      newCart.splice(index, 1);
                      setCarts(newCart);
                      setAmount(carts.length);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <p className="text-center h3">
              Total{" "}
              <span className="text-success">
                $
                {carts.reduce(function (prev, current) {
                  return prev + current.price;
                }, 0).toLocaleString()}
              </span>
            </p>
          </>
        ) : (
          <>
            <h3>Products List</h3>
            {products.map((item, index) => (
              <div className="content" key={index}>
                <p>
                  ProductId: <b>{item.id}</b>
                </p>
                <p>Name: {item.name}</p>
                <p>
                  Price: <b className="text-success">${item.price.toLocaleString()}</b>
                </p>
                <div className="text-end">
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      let newCart = carts;
                      newCart.push(products[index]);
                      setCarts(newCart);
                      setAmount(carts.length);
                    }}
                  >
                    Add to bucket
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
