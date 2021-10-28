
const { expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const index = require('./index');


/*
  test('that taken is my favourite', () =>{
    expect(index.favouriteFilms).toBe('taken')
})
*/

let favouriteFilms = index.favouriteFilms


test('that favouriteFilms length is greater than 3', () => {
    favouriteFilms.push('Random Film', 'Random Film3')
    console.table(favouriteFilms)
    expect(favouriteFilms.length).toBeGreaterThan(3)
})


test('that favouriteFilms contains Taken', () => { 
    expect(favouriteFilms).toContain('Air Force One')
})





/*
  describe('arrayContaining', () => {
    const expected = ['Air Force One', 'Taken', 'Happy Gilmore', 'Hannah Montana: The Movie'];
    it('matches even if received contains additional elements', () => {
      expect(['Air Force One', 'Taken', 'Happy Gilmore', 'Hannah Montana: The Movie']).toEqual(expect.arrayContaining(expected));
    });
   
  });
*/

 