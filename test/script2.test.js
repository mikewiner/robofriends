const fetch = require("node-fetch");
const { getPeople, getPeoplePromise } = require("./script2");

it("calls swapi to get people", () => {
  expect.assertions(1);
  return getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it("calls swapi with a promise", () => {
  expect.assertions(2);
  return getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// it('getPeople returns count and results', () => {

// })

it("getPeople returns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 89,
      results: [0,1,2,3,4,5]
    })
  }));
  expect.assertions(4 )
  return getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("http://swapi.py4e.com/api/people/");
    expect(data.count).toEqual(89);
    expect(data.results.length).toBeGreaterThan(5);
  })
});
