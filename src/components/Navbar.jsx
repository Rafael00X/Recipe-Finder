import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Recipe Finder
                </a>
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
