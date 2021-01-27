import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";

function App(props) {

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    // console.log(props.store.getState())
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robots) => {
    return robots.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  //  console.log(robots)

  return (
    <div className="text-center">
      <h1 className="text-5xl font-black text-gray-100">RoboBUDDIES THATS RIGHT</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
