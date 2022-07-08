import Produtos from "../produtos/produtos";

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/07/11/54/the-fog-4909513_960_720.jpg"
          className="card-img"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Moda Primavera-Verão
            </h5>
            <p className="card-text lead fs-2">Confira as tendencias</p>
          </div>
        </div>
      </div>
      <Produtos />
    </div>
  );
}
