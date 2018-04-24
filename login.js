var app =  angular.module("loginApp",[]).controller("Ctrl",function($scope, $window){
	
	
	$scope.options = ["Home", "Login", "Contact Us", "Sitemap"];
	
	$scope.navigate = function navigate(target) {
		if (target === "Login")
		$window.open('login.html', '_self');
		else if(target == "Home")
			$window.open('index.html' , '_self');
		else if(target == "Contact Us")
			$window.open('http://youtube.com' , '_self');
		else if(target == "Sitemap")
			$window.open('htpp://twitter.com' , '_self');
		else
			console.log('error');
	};
	
	$scope.email = "";
	$scope.password = "";
	$scope.loginFun = function(email,password){
		if(email == "nkumar@gmail.com" && password == 123456789)
		{
			 $window.location.href = 'index.html';
		}
		else if(email.length="")
		{
			window.alert("enter email");
		}
		else if(email == "disney@gmail.com" && password == 789456123)
		{
			 $window.location.href = 'index.html';
		}
		
		else
		window.alert("Enter email & password/wrong email/password");
	}
	

	}); 
	
	