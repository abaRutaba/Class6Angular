var app =angular.module("myApp",[]);
app.controller('navbar',function($scope)
	{
		
		$scope.abt = function () 
		{
			console.log("ABout Clicked!");
	    };

        $scope.ser = function () 
		{
			console.log("Service Clicked!");
	    };

        $scope.price = function () 
		{
			console.log("price Clicked!");
	    };
        $scope.cntct = function () 
		{
			console.log("Contact Clicked!");
	    };

        
	
	});
