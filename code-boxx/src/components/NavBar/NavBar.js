//
//
//
import "./NavBar.css";

const NavBar = () => {
  const navLinks = [
    { title: "Home", id: "1", className: "nav-link", url: "#" },
    //{ title: "About", id: "2", className: "nav-link", url: "#" },
    { title: "Articles", id: "3", className: "nav-link", url: "#" },
    { title: "Contact", id: "4", className: "nav-link", url: "#" },
  ]

  return (
    <div>
      <nav className="nav-bar-container">
        <h1 className="brand-logo">[CODE BOXX]</h1>
        <ul className="nav-menu">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a className={item.className} href={item.url}> {item.title} </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar