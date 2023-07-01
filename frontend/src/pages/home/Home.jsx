import {Link, Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div>
        <Link to="/" >
      <h1>
        Home
      </h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default Home;
