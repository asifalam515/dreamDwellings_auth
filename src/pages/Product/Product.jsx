import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    id,
    image,
    area,
    description,
    estate_title,
    facilities,
    price,
    segment_name,
    status,
  } = product;
  return (
    <div>
      <Link className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/estateDetails/${id}`} className="btn btn-primary">
              View Property
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
