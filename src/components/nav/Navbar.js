import "./nav.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Minha Loja
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre nós
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-dark">
            <i className="fa-solid fa-arrow-right-to-bracket me-1"></i>
            Login
          </button>
          <button type="button" className="btn btn-outline-dark ms-2">
            <i class="fa-solid fa-user-plus me-1"></i>
            Registrar
          </button>
          <button type="button" className="btn btn-outline-dark ms-2">
            <i class="fa-solid fa-cart-shopping me-1"></i>
            Carrinho (0)
          </button>
        </div>
      </div>
    </nav>
  );
}
