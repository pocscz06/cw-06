import List from "./List";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./FilteredList.css";

const FilteredList = ({ items }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const onFilter = (selectedType) => {
    setType(selectedType);
  };

  const filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().indexOf(search) !== -1;

    const matchesType =
      type === "All" || item.type.toLowerCase() === type.toLowerCase();

    return matchesSearch && matchesType;
  };

  return (
    <div className="filter-list">
      <h1>Produce Search</h1>

      <Dropdown onSelect={onFilter} className="mb-3">
        <Dropdown.Toggle variant="success" id="typeDropdown">
          Type: {type}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search"
        onChange={handleSearch}
      />
      <List items={items.filter(filterItem)} />
    </div>
  );
};

export default FilteredList;
