import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();
  return(
    <div>
      <p>Você está vendo o produto {id}</p>
    </div>
  );
}

export default Produto;