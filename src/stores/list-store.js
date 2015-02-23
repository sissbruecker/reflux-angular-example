/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function (listActions, userService) {

        var users = [];

        var findUserById = function (id) {
            return _.find(users, function (user) {
                return user.id == id;
            });
        };

        var listStore = reflux.createStore({

            init: function () {
                this.listenTo(listActions.load, this.loadUsers);
                this.listenTo(listActions.addOrUpdate, this.addOrUpdate);
                this.listenTo(listActions.remove, this.remove);
            },

            loadUsers: function () {

                userService.loadUsers().then(
                    function success(result) {

                        users = result;
                        listStore.trigger();

                        listActions.loadComplete(result);
                    },
                    function error(err) {

                        listActions.loadFailed(err);
                    }
                );
            },

            addOrUpdate: function (user) {

                var existingUser = findUserById(user.id);

                if (existingUser) {
                    _.extend(existingUser, user);
                } else {
                    users.push(user);
                }

                this.trigger();
            },

            remove: function (userId) {

                var existingUser = findUserById(userId);

                if (existingUser) {
                    users.splice(users.indexOf(existingUser), 1);
                }

                this.trigger();
            },

            getUsers: function () {
                return users;
            },

            getUserById: findUserById

        });

        return listStore;
    };
});