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
              <img
                src="https://media4.giphy.com/media/JmCdu2TQNEUQa4MRDf/giphy.gif?cid=6c09b952f7w2tnq6hjkshzvpvl44qqq5vku4s3ylsyhxnxw9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                width="125px"
              />
            </div>
          </h1>
        </div>
      </nav>
    </header>
  );
}
