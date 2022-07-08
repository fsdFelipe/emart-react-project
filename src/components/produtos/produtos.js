import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Produtos() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdutos();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProdutos = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button type="button" className="btn btn-outline-dark me-2">
            All
          </button>
          <button type="button" className="btn btn-outline-dark me-2">
            Men's clotching
          </button>
          <button type="button" className="btn btn-outline-dark me-2">
            Woman's Clotches
          </button>
          <button type="button" className="btn btn-outline-dark me-2">
            Jewerely
          </button>
          <button type="button" className="btn btn-outline-dark me-2">
            Eletronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                // Pegar cod card-title no site getboostap.com
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <a href="#" className="btn btn-outline-dark">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center"> Novidades</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProdutos />}
        </div>
      </div>
    </div>
  );
}
