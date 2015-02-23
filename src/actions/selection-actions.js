/**
 * Created by Sascha on 23.02.15.
 */
define(['reflux'], function (reflux) {

    return function () {

        return {
            select: reflux.createAction()
        };
    };
});