import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    < div className="nav-bar">
      <h3><Link to="/">HomePage</Link> </h3>
      <h3><Link to="/users">List Users</Link></h3>
    </div>
  );
};
export default NavBar;