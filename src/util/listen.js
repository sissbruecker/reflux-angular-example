/**
 * Created by Sascha on 23.02.15.
 */
define([], function () {

    return function () {

        var listen = function (scope, emitter, callback) {

            emitter.listen(function () {

                scope.$evalAsync(callback);
            });
        };

        return listen;
    }
});