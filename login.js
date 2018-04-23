var app =  angular.module("loginApp",[]).controller("Ctrl",function($scope, $window){
	
	
	$scope.options = ["Home", "Login", "Contact Us", "Sitemap"];
	
	$scope.navigate = function navigate(target) {
		if (target === "Login")
		$window.open('https://stackoverflow.com/questions/37741325/how-to-submit-angular-js-form-using-ng-click', '_self');
		else if(target == "Home")
			$window.open('#Home' , '_self');
		else if(target == "Contact Us")
			$window.open('http://youtube.com' , '_self');
		else if(target == "Sitemap")
			$window.open('htpp://twitter.com' , '_self');
		else
			console.log('error');
	};
	
	$scope.email = "nkumar@gmail.com";
	$scope.password = "123456789";
	$scope.loginFun = function(name,password){
		if(name == "nkumar@gmail.com" || password == 123456789)
			 $window.location.href = 'index.html';
		else
		window.alert("wrong email/password");
	}
	

	}); 
	
	