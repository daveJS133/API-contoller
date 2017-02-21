var Film = require('../film');
var assert = require('../assert');

describe('Film', function () {
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actor:"Leonardo Di Caprio",
      genre:"Soggy Tradgey"
    });
  });

  it('should have a title', function(){
    assert.equal('Titanic', film.title);  
  });
});