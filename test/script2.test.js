const fetch = require('node-fetch');
const { getPeople, getPeoplePromise } = require('./script2')

it('calls swapi to get people', () => {
  expect.assertions(1);
  return getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
})

it('calls swapi with a promise', ()=> {
  expect.assertions(2);
  return getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
   })
})

// it('getPeople returns count and results', () => {

// })