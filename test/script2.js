const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people/")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};
const getPeople = async (fetch) => {
  const getRequest = await fetch("http://swapi.py4e.com/api/people/");
  const data = await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

getPeople(fetch);

module.exports = {
  getPeople,
  getPeoplePromise,
}
