/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function (selectionActions, listActions, editorActions, listStore) {

        var selectedUser;

        var selectionStore = reflux.createStore({

            init: function () {

                this.listenTo(selectionActions.select, this.select);
                this.listenTo(listActions.loadComplete, this.selectFirst);
                this.joinTrailing(listActions.addOrUpdate, listStore, this.selectAfterAdd);
                this.joinTrailing(listActions.remove, listStore, this.selectAfterRemove);
                this.listenTo(editorActions.create, this.deselect);
                this.listenTo(editorActions.cancel, this.selectAfterCancel);
            },

            select: function (user) {
                selectedUser = user;
                this.trigger();
            },

            selectAfterAdd: function (data) {

                var addedUser = listStore.getUserById(data[0].id);

                this.select(addedUser);
            },

            selectAfterRemove: function () {

                var existingUser = listStore.getUserById(selectedUser.id);

                if (!existingUser) this.selectFirst(true);
            },

            selectAfterCancel: function () {

                if (!selectedUser) this.selectFirst();
            },

            selectFirst: function () {

                var users = listStore.getUsers();

                if (users && users.length) {
                    this.select(users[0]);
                } else {
                    this.deselect();
                }
            },

            deselect: function () {
                this.select(null);
            },

            getSelectedUser: function () {
                return selectedUser;
            }
        });

        return selectionStore;
    };
});