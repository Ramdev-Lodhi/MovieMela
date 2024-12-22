import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "white",
    };
  };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>
                <img src="./src/assets/images/Movieweb_Logo.png" alt="logo" />
              </p>
            </div>
            <nav className="navbar">
              <ul>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "white",
                      };
                    }}
                  >
                    about
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="movies"
                    className="nav-link"
                    style={getNavLinkStyle}
                  >
                    movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    SIGN IN
                  </NavLink>
                </li> */}
              </ul>
            </nav>
            {/* <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div> */}
          </div>
        </section>

        {/* <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>Movie Flix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movies"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div> */}
      </header>
    </>
  );
};
