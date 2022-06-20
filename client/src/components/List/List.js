import "./List.sass";
import "./ScrollBar.sass";
import { useMarkersContext } from "../../context/MarkerContext";
import ListPoint from "./ListPoint/ListPoint";

const List = () => {
  const { data, isLoading, selected } = useMarkersContext();

  if (isLoading) return null
  return (
    <div className="container">
      <div className="title">
        <h3>Listagem de pontos</h3>
      </div>
      <div className={data.length === 0 ? "empty" : "content"}>
        {data.length === 0 ? (
          <p>Sem pontos de monitoramento para exibir no momento</p>
        ) : (
          data.map((point, index) => (
            <ListPoint
              key={point._id}
              className={
                point._id === selected
                  ? "pointContent pointContent-selected"
                  : "pointContent"
              }
              point={point}
              index={String(index + 1).padStart(3, "0")}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
