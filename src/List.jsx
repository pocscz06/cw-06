import "./List.css";

const List = ({ items }) => {
  const createList = () => {
    return items.map((item) => {
      return <li key={item.name}>{item.name}</li>;
    });
  };

  return <ul>{createList()}</ul>;
};

export default List;
