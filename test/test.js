'use strict';

// MODULES //

var tape = require( 'tape' );
var erf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof erf, 'function', 'main export is a function' );
	t.end();
});
