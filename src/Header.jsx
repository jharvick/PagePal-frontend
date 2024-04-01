import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PagePal
          </a>
          <h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/items">
                    Reading List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/items/new">
                    Find a Book
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favorites">
                    Past reads
                  </Link>
                </li>
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <LogoutLink className="nav-link" />
                  </li>
                )}
              </ul>
              <img src="https://i.pinimg.com/originals/de/9e/b6/de9eb637d1dac9a77a7f3822ed57ce07.gif" width="125px" />
            </div>
          </h1>
        </div>
      </nav>
    </header>
  );
}
