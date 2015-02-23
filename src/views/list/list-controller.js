/**
 * Created by Sascha on 23.02.15.
 */
define([], function () {

    return function ($scope, listen, listActions, selectionActions, editorActions, listStore, selectionStore) {

        listen($scope, listStore, function () {
            $scope.users = listStore.getUsers();
        });

        listen($scope, selectionStore, function () {
            $scope.selectedUser = selectionStore.getSelectedUser();
        });

        $scope.isSelected = function (user) {
            return $scope.selectedUser == user;
        };

        $scope.select = function (user) {
            selectionActions.select(user);
        };

        $scope.create = function() {
            editorActions.create();
        };

        listActions.load();


    };
});