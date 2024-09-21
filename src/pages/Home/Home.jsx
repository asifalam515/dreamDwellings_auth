import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
