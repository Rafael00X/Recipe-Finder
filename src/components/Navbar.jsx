import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <CustomLink name="Home" to="../" />
            <CustomLink name="Favourites" to="/favourites" />
            <CustomLink name="Profile" to="/profile" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

// TODO - Require login
function CustomLink(props) {
  const { to, name } = props;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className="nav-item">
      <Link className={"nav-link" + (isActive ? " active" : "")} to={to}>
        {name}
      </Link>
    </li>
  );
}

export default Navbar;
