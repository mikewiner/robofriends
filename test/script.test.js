const googleSearch = require('./script.js')

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'dogpictures.com',
  'disney.com',
]

describe('googleSearch', () => {
  it('this is a silly test', () => {
    expect('hello').toBe('hello');
    //googleSearch('testtest', dbMock)
  })
  it('this is searching google', () => {
    expect(googleSearch('disney', dbMock)).toEqual(['disney.com']);
    expect(googleSearch('test', dbMock)).toEqual([]);
  })
  
  it('work with undefined and null input' , () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })
  
  it('does not return more than 3 matches', ()=> {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })

  it("does some shit", () => {
    expect(googleSearch('cat' , dbMock)).toEqual([])
  })
})
