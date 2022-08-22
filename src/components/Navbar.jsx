import SearchBar from "./SearchBar";
import Logo from "../img/broccoli.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img
                        src={Logo}
                        alt=""
                        width="30"
                        height="30"
                        class="d-inline-block align-text-top"
                    />
                    Recipe Finder
                </a>
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
