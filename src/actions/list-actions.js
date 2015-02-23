/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function () {

        return {
            load: reflux.createAction(),
            loadComplete: reflux.createAction(),
            loadFailed: reflux.createAction(),
            addOrUpdate: reflux.createAction(),
            remove: reflux.createAction()
        };
    };
});