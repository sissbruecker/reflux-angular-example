/**
 * Created by Sascha on 23.02.15.
 */
define([], function () {

    return function ($q, $timeout) {

        var service = {};

        service.loadUsers = function () {

            var d = $q.defer();

            $timeout(function () {

                d.resolve([
                    {id: 1, name: 'Leela', isAdmin: true, rank: 1},
                    {id: 2, name: 'Bender', isAdmin: false, rank: 2},
                    {id: 3, name: 'Flexo', isAdmin: false, rank: 3},
                    {id: 4, name: 'Fry', isAdmin: false, rank: 4}
                ]);

            }, 1000);

            return d.promise;
        };

        return service;
    };
});