var app =angular.module("myApp",[]);
app.controller('formCtrl',function($scope)
	{
		
		
		
		$scope.submit = function () 
		{
			console.log($scope.myForm.fName);
			console.log($scope.myForm.lName);
			console.log($scope.myForm.faName);
			console.log($scope.myForm.country);
			console.log($scope.myForm.mail);
			console.log($scope.myForm.gender);
			console.log($scope.myForm.dob);
	};
	
	});
