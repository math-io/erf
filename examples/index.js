'use strict';

var linspace = require( 'compute-linspace' );
var erf = require( './../lib' );

var x = linspace( -10, 10, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
	y = erf( x[ i ] );
	console.log( 'x: %d, erf(x): %d', x[ i ], y );
}