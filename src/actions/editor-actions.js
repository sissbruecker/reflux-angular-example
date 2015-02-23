/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function () {

        return {
            create: reflux.createAction(),
            edit: reflux.createAction(),
            save: reflux.createAction(),
            cancel: reflux.createAction(),
            remove: reflux.createAction()
        };
    };
});