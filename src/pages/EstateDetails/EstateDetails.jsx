import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EstateDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    const fetchProduct = async () => {
      const response = await fetch(`/data.json`); // Replace with your data source
      const data = await response.json();
      const productDetails = data.find((item) => item.id === parseInt(id));
      setProduct(productDetails);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const {
    estate_title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = product;

  return <div className="estate-details"></div>;
};

export default EstateDetails;
