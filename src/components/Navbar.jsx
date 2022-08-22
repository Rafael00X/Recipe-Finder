import SearchBar from "./SearchBar";
import Logo from "../img/broccoli.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p class="navbar-brand">
                    <img src={Logo} alt="" width="30" height="30" class="d-inline-block align-text-top" />
                    &nbsp; Recipe Finder
                </p>
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
