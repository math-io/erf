'use strict';

// MODULES //

var tape = require( 'tape' );
var NINF = require( 'const-ninf-float64' );
var PINF = require( 'const-pinf-float64' );
var abs = require( 'math-abs' );
var erf = require( './../lib' );


// FIXTURES //

var veryLargeNegative = require( './fixtures/very_large_negative.json' );
var veryLargePositive = require( './fixtures/very_large_positive.json' );
var largeNegative = require( './fixtures/large_negative.json' );
var largePositive = require( './fixtures/large_positive.json' );
var mediumNegative = require( './fixtures/medium_negative.json' );
var mediumPositive = require( './fixtures/medium_positive.json' );
var smallNegative = require( './fixtures/small_negative.json' );
var smallPositive = require( './fixtures/small_positive.json' );
var smaller = require( './fixtures/smaller.json' );
var tinyNegative = require( './fixtures/tiny_negative.json' );
var tinyPositive = require( './fixtures/tiny_positive.json' );
var subnormal = require( './fixtures/subnormal.json' );


// FUNCTIONS //

function almostEqual( a, b, tol ) {
	var delta = abs( a - b );
	tol = tol * Math.max( 1, abs( a ), abs( b ) );
	return ( delta <= tol );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof erf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-5,-100]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = veryLargeNegative.expected;
	x = veryLargeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[5,100]`', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-2.5,-5]`', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = largeNegative.expected;
	x = largeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[2.5,5]`', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-1,-3]`', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = mediumNegative.expected;
	x = mediumNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[1,3]`', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2e-16;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-0.8,-1]`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = smallNegative.expected;
	x = smallNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[0.8,1]`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-0.8,0.8]`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[-1e-300,-1e-308]`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = tinyNegative.expected;
	x = tinyNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the error function for `x` on the interval `[1e-300,1e-308]`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = tinyPositive.expected;
	x = tinyPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the error function for subnormal `x`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = subnormal.expected;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erf( x[i] );
		t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
