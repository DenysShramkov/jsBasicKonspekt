'use strict';

const a = "movies",
	b = 8.1,
	c = "movies2",
	d = 8.9;

let rating = {
	moviesList: {},
};

rating.moviesList[a] = b;
rating.moviesList[c] = d;

console.log(rating);