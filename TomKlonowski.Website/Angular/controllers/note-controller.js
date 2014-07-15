ngApp.controller("NoteController", ["$scope", "notes", function ($scope, notes) {
    function getNotes() {
        notes.getAllItems().then(function (data) {
            $scope.notes = data;
        },
    function (errorMessage) {
        $scope.error = errorMessage;
    });
    }

    getNotes();
}]);