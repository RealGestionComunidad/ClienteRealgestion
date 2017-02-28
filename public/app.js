/*
	Rutas de la app
	(/) La pagina principal
	(/propiedades) Todas las propiedades
	(/proyectos) Todas las pre-ventas
	(/contacto) Pagina de contacto.

	ACOTACIONES
	en el index.html hay que poner la etiqueta base <base href="/">
	para que las url funciones bien.


	Este es el CLiente para consumir la api de RealGestion.
	A continuacion rutas de la api:
	************TIPOS GETS****************************
	//realgestion.com.ve/api/Aparence/{company} Trae los datos para el template de una compañia, toda la informacion de contacto y el seo 
	//realgestion.com.ve/api/Propiedades/{company} Trae todas las propiedades de esa compañia
	//realgestion.com.ve/api/Propiedades/{company}/{id} Trae los datos de una propiedad
	//realgestion.com.ve/api/Profile/{id} Trae el perfil de un corredor inmobiliario
	//realgestion.com.ve/api/Photo/{company}/{id} Trae las fotos de un inmueble
	***********TIPOS POST******************************
	//realgestion.com.ve/api/Contact/{company} envia los datos de el formulario de contacto



*/

angular.module('Rg-App',['ngRoute'])
	//RUTAS
	.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when("/",{
			templateUrl : "views/home.html",
			controller: "HomeController"
		})
		.when("/propiedades",{
			templateUrl: "views/properties.html",
			controller: "PropertiesController"
		})
		.when("/proyectos",{
			templateUrl: "views/properties.html",
			controller: "ProyectsController"
		})
		.when("/Propiedad/:id",{
			templateUrl: "views/property.html",
			controller: "PropertyController"

		})
		.when("/contacto",{
			templateUrl: "views/contacts.html",
			controller: "ContactController"
		})
		.otherwise({
        	template : "<h1>404 error</h1>"
    	});
    	$locationProvider.html5Mode(true);
	})
	//Variables Globales
	.run(['$rootScope',function($rootScope){
		$rootScope.url = "//realgestion.com.ve"
		$rootScope.year = "2017"
	}])
