// myApp.controller('testAPI', function() {
//     console.log($data);
// });
myApp.controller('myController', function($scope, indexService) {
    console.log("In myController...");

    $scope.newUser = {};
    $scope.checkedUser = {};
    $scope.message = "";
    $scope.users = [];
    // $scope.users = [
    //     { FNAME: "suraj", LNAME: "shukla", EMAIL: "suraj@gmail.com" }
    // ];

    // Function to fetch user data from the server
    function fetchUserData() {
        indexService.datashow().then(function(data) {
            $scope.users = data;
        }).catch(function(error) {
            console.error('Error fetching user data:', error);
            // Optionally provide user feedback about the error
        });
    }
    fetchUserData();

    $scope.saveUser = function() {
        indexService.saveUser($scope.newUser).then(function(response) {
            // Optionally handle response if needed
            $scope.users.push(response); // Assuming the API returns the saved user data
            $scope.newUser = {};
            $scope.message = "User added Successfully";
            if (!$scope.$$phase) {
                $scope.$apply(); // Apply scope changes if not already in a digest cycle
            }
            // Fetch updated user data
            fetchUserData();
        }).catch(function(error) {
            console.error('Error saving user:', error);
        });
    };



    $scope.selectUser = function(user) {
        console.log(user);
        $scope.clickedUser = angular.copy(user);
    };

    // Function to fetch data of a user for editing
    $scope.updateUser = function(id) {
        alert(id);
        indexService.editData(id).then(function(userData) {
            $scope.newUser = userData; // Populate form fields with user data
        }).catch(function(error) {
            console.error('Error fetching user data for editing:', error);
            // Optionally provide user feedback about the error
        });
    };

    $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    };
});