import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  // Check if products is an array
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <Banner /> */}
      <div className=" mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-2">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
