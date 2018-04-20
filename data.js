var app =  angular.module("myApp",[]).controller("navCtrl",function($scope, $window){
	
	
	$scope.options = ["Home", "Login", "Contact Us", "Sitemap"];
	
	$scope.navigate = function navigate(target) {
		if (target === "Login")
		$window.open('https://stackoverflow.com/questions/37741325/how-to-submit-angular-js-form-using-ng-click', '_self');
		else if(target == "Home")
			$window.open('http://google.com' , '_self');
		else if(target == "Contact Us")
			$window.open('http://youtube.com' , '_self');
		else if(target == "Sitemap")
			$window.open('htpp://twitter.com' , '_self');
		else
			console.log('error');
	};

	}); 
	
app.controller("ctrlBody",function($scope){
	$scope.content = "Renault India, one of the fastest" +
	"growing automotive brands in India, created history with its Global car for Conquest,"+
		"Renault KWID. This Attractive, Innovative and Affordable car, is a true game-changer and "+
		"volume driver for Renault India, selling more than 200,000 vehicles so far. "+
		"Staying true to its commitment to keep building on the success of KWID with breakthrough "+
		"product innovations, Renault today announced the launch of the new KWID Super Hero Edition "+
		"in association with Marvel.";
		
	
	// $scope.name = "";
	// $scope.Email = "";
	// $scope.MobileNumber = "";
	
	$scope.print = function print(mobileNumber,email,Name,form) {
		//console.log('I am in',  mobileNumber);
		if(form.$valid == false)
			window.alert("You are Entering wrong email or missing some fileds");
		else if(mobileNumber.length != '10')
			window.alert("Mobile number should be 10 digit");
		else if(Name.length > '30' || Name.length < '2')//name length should be more than 2 and less than 30
			 window.alert('Please enter correct name');
			
		else{
		$scope.test1 = mobileNumber;
		$scope.test2 = email;
		$scope.test3 = Name;

		}
	};
	
	
});






