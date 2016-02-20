# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	y = Array( Float64, length( x ) );
	for i in eachindex(x)
		y = erf( x[i] );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

