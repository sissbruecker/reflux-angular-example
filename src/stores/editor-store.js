/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function (editorActions, listActions, listStore) {

        var editedUser = {};

        var generateUserId = function () {

            var users = listStore.getUsers();

            var maxUserId = _.max(users, function (user) {
                return user.id;
            });

            return maxUserId.id + 1;
        };

        var editorStore = reflux.createStore({

            init: function () {
                this.listenTo(editorActions.create, this.create);
                this.listenTo(editorActions.edit, this.edit);
                this.listenTo(editorActions.cancel, this.cancel);
                this.listenTo(editorActions.save, this.save);
                this.listenTo(editorActions.remove, this.remove);
            },

            create: function () {

                this.edit({
                    id: generateUserId(),
                    name: 'New user',
                    isAdmin: false,
                    rank: 0
                });
            },

            edit: function (user) {

                editedUser = _.extend({}, user);

                this.trigger();
            },

            cancel: function () {

                editedUser = null;

                this.trigger();
            },

            save: function () {

                listActions.addOrUpdate(editedUser);

                editedUser = null;

                this.trigger();
            },

            remove: function () {

                listActions.remove(editedUser.id);

                editedUser = null;

                this.cancel();
            },

            getEditedUser: function () {
                return editedUser;
            }
        });

        return editorStore;
    };
});