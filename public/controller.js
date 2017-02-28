angular.module("Rg-App")
	.controller("LoadController",function($scope){
			$scope.$on('LOAD',function(){$scope.loading=true});
			$scope.$on('UNLOAD',function(){$scope.loading=false});
		})
		.controller("DateController",function($scope,$http){
			$scope.$emit('LOAD')
			$http.get("//realgestion.com.ve/api/Aparence/arteagabr")
				.success(function(data){
					$scope.date = data;
					$scope.$emit('UNLOAD')
				})
				.error(function(err){

				})
			
			function title(title){
				$scope.subtitle = title;
			}
		})
		.controller("HomeController",function($scope,$http){
			  $scope.posts = [];
			  $scope.proyects = [];
			  $scope.$emit('LOAD')
			  $http.get("//realgestion.com.ve/api/Propiedades/arteagabr")
			    .success(function(data){

			        for(var i = data.length - 1; i >= 0; i--){
			            if(data[i].operacion == 3)
			            {
			                $scope.proyects.push(data[i]);

			            }
			        }
			      for(i=0;i<=5;i++){
			        $scope.posts.push(data[i]);
			      }
			      $scope.$emit('UNLOAD')
			    })
			    .error(function(err){

			    })
		})
		.controller("PropertiesController",function($scope,$http){
			$scope.posts = []
			$scope.$emit('LOAD')
			$scope.location = "Propiedades"
			$http.get("//realgestion.com.ve/api/Propiedades/arteagabr")
				.success(function(data){
					$scope.posts = data;
					$scope.$emit('UNLOAD')
				})
				.error(function(err){

				})
		})
		.controller("ProyectsController",function($scope,$http){
			$scope.posts = []
			$scope.$emit('LOAD')
			$scope.location = "Pre-Venta"
			$http.get("//realgestion.com.ve/api/Propiedades/arteagabr")
				.success(function(data){
					for(var i = data.length - 1; i >= 0; i--){
			            if(data[i].operacion == 3)
			            {
			                $scope.posts.push(data[i]);

			            }
			        }
			        $scope.$emit('UNLOAD')
				})
				.error(function(err){

				})
		})
		.controller("PropertyController",function($scope,$http,$routeParams){
			var profile = ''
			$scope.$emit('LOAD')
			$http.get("//realgestion.com.ve/api/Propiedades/arteagabr/"+$routeParams.id)
				.success(function(data){
					$scope.post = data;
					profile = data.users_id;
					$http.get("//realgestion.com.ve/api/Profile/"+profile)
						.success(function(profi){
							$scope.profile = profi;
						})
					$scope.$emit('UNLOAD')
				})
				.error(function(err){
					console.log(err);
				})

			$http.get("//realgestion.com.ve/api/Photo/arteagabr/"+$routeParams.id)
				.success(function(data){
					$scope.photos = data;
					$scope.$emit('UNLOAD')
				})
				.error(function(err){
					console.log(err)
				})
		})
		.controller("ContactController",function($scope,$http){
			$scope.$emit('LOAD')
			$scope.formData = {}
			var map;
		    var marker;
		    var MyMarker;
			function initialize() {
			    var map_canvas = document.getElementById('map');
			    var myLatlng = new google.maps.LatLng(10.220369, -68.009046);
			    var mapOptions = {
			        center: myLatlng,
			        zoom: 17,
			        scrollwheel: false,
			         styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
			        mapTypeId: google.maps.MapTypeId.ROADMAP
			    };
			    $scope.map = new google.maps.Map(map_canvas, mapOptions);
			    TestMarker();    
			}
			// Function for adding a marker to the page.
			function addMarker(location) {
			    marker = new google.maps.Marker({
			        position: location,
			        icon: './img/28_marker.png',
			        map: map
			    });
			}
			// Testing the addMarker function
			function TestMarker() {
			       MyMarker = new google.maps.LatLng(10.220369, -68.009046);
			       addMarker(MyMarker);
			}
			google.maps.event.addDomListener(window, 'load', initialize);

			$http.get("//realgestion.com.ve/api/Aparence/arteagabr")
				.success(function(data){
					$scope.contact = data;
					$scope.$emit('UNLOAD')
				})
				.error(function(err){

				})
				$scope.mensaje = false;
			$scope.createMensaje = function(){
				$scope.mensaje= true
				$http.post("//realgestion.com.ve/api/Contact/arteagabr",$scope.formData)
				.success(function(data)
				{
					$scope.formData = {}
					console.log(data);
				})
			}
			
		})
