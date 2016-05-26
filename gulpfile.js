var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {

	mix
		// .copy('resources/assets/bootstrap/js/bootstrap.js', 'public/assets/js/bootstrap.js')
		.browserify('main.js', 'public/assets/js/main.js')
		.styles(['app.css'], 'public/assets/css/app.css')
		// .sass('app.scss', 'public/assets/css/app.css')
	;		
});
