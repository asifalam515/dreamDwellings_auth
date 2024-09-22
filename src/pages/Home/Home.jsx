import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 mt-2">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
