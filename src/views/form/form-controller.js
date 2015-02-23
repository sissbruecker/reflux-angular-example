/**
 * Created by Sascha on 23.02.15.
 */
define([], function () {

    return function ($scope, listen, editorActions, selectionStore, editorStore) {

        $scope.isEditing = false;

        var updateUser = function() {
            $scope.user = $scope.isEditing ? $scope.editedUser : $scope.selectedUser;
        };

        listen($scope, selectionStore, function () {
            $scope.selectedUser = selectionStore.getSelectedUser();
            updateUser();
        });

        listen($scope, editorStore, function () {
            $scope.editedUser = editorStore.getEditedUser();
            $scope.isEditing = !!$scope.editedUser;
            updateUser();
        });

        $scope.edit = function() {

            editorActions.edit($scope.selectedUser);
        };

        $scope.save = function() {

            editorActions.save();
        };

        $scope.cancel = function() {

            editorActions.cancel();
        };

        $scope.remove = function() {

            editorActions.remove();
        };

    };
});