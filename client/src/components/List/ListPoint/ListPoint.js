import "./ListPoint.sass";
import culture from "../../../assets/Culture Icon.svg";

const Point = ({ point, index, className }) => {
  const time = new Date(point.createdAt)
  const date = time.toLocaleDateString('pt-BR',{hour: 'numeric', minute: '2-digit'})

  return (
    <div className={className}>
      <h4>
        <img src={culture} alt="icon" />
        Ponto n° {index}
      </h4>
      <p>Criado em: {date}</p>
    </div>
  );
};

export default Point;
