import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  // Check if products is an array
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3 mt-2">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
