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
	
	$scope.print = function print(mobileNumber,email,Name) {
		//console.log('I am in',  mobileNumber);
		$scope.test1 = mobileNumber;
		$scope.test2 = email;
		$scope.test3 = Name;
	};
	
});

app.controller('myCtrl3', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

