myApp.service("indexService", function($http) {
    this.saveUser = function(userData) {
        //console.log("Saving user:", userData);
        return $http.post("http://127.0.0.1:8000/api/store", userData).then(function(response) {
                console.log("Response received:", response.data);
                return response.data;
            })
            .catch(function(error) {
                console.error('Error:', error);
                throw error; // Propagate the error to the caller
            });
    };

    this.datashow = function() {
        return $http.get("http://127.0.0.1:8000/api/show").then(function(response) {
            return response.data;;
        });
    };

    this.editData = function(id) {
        return $http.get("http://127.0.0.1:8000/api/edit/" + id).then(function(response) {
            return response.data;;
        });
    };

});