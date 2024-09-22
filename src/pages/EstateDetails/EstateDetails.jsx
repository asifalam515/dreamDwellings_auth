import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS

const EstateDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/data.json"); // Replace with your data source
        const data = await response.json();
        const productDetails = data.find((item) => item.id === parseInt(id));
        if (productDetails) {
          setProduct(productDetails);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product data");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

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
    lat,
    lng,
  } = product;

  return (
    <div className="estate-details p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={estate_title} />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl mb-4">{estate_title}</h2>
          <p className="mb-4">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="btn btn-sm">Price: {price}</div>
            <div>Status: {status}</div>
            <div>Area: {area}</div>
          </div>
          <span className="block mb-4">{location}</span>
        </div>
        <div className="mb-4">
          <h1 className="text-center text-2xl">Key Facilities: </h1>
          <ul className="flex flex-row gap-10 justify-center items-center">
            {facilities.map((facilitie, idx) => (
              <li key={idx}>{facilitie} </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-96">
          {" "}
          {/* Tailwind classes for height and width */}
          {lat && lng ? (
            <MapContainer
              center={[lat, lng]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lng]}>
                <Popup>{estate_title}</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div>No map data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
