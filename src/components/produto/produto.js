import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduto = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduto(await response.json());
      setLoading(false);
    };
    getProduto();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton heigh={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton heigh={50} width={300} />
          <Skeleton heigh={75} />
          <Skeleton heigh={25} width={150} />
          <Skeleton heigh={50} />
          <Skeleton heigh={150} />
          <Skeleton heigh={50} width={100} />
          <Skeleton heigh={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProdutos = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={produto.image}
            alt={produto.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase txt-black-50">{produto.category}</h4>
          <h1 className="display-5">{produto.title}</h1>
          <p className="lead fw-bolder">
            Rating{produto.rating && produto.rating.rate}
            <i class="fa-solid fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${produto.price}</h3>
          <p className="lead">{produto.description}</p>
          <button class="btn btn-outline-dark px-4 py-2">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProdutos />}
        </div>
      </div>
    </>
  );
}
