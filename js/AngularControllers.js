app.controller("skillsCtrl", function($scope, $http) {
    $http.get("skills.json").then(function(response) {
        $scope.skills = response.data;
    });
});
app.controller("contactsCtrl", function($scope, $http) {
    $http.get("contacts.json").then(function(response) {
        $scope.contacts = response.data;
    });
});
