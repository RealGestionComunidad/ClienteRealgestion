angular.module("Rg-App", ["ngRoute"])
	.config(function($routeProvider){
		//Rutas pre-definidas
		$routeProvider
			.when("/",{
				templateUrl: "templates/home.html",
				controller: "HomeController"
			})
			.when("/propiedades", {
				templateUrl: "templates/propiedades.html",
				controller: "PropiedadesController"
			})
			.when("/propiedad/:id" , {
				templateUrl: "templates/propiedad.html",
				controller: "PropiedadController"
			})
			.when("/nosotros", {
				templateUrl: "templates/nosotros.html",
				controller: "AboutController"
			})
			.when("/contacto", {
				 templateUrl: "templates/contacto.html",
				 controller: "ContactController"
			})
			.otherwise({
				templateUrl: "templates/404.html"
			})
	})