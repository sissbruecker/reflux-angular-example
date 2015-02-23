/**
 * Created by Sascha on 23.02.15.
 */
require.config({

    paths: {

        angular: '../bower_components/angularjs/angular.min',
        reflux: '../bower_components/reflux/dist/reflux.min',
        underscore: '../bower_components/underscore/underscore-min'
    }
});

// Load main dependencies first
requirejs([
    'angular',
    'reflux',
    'underscore'
], function () {

    // Create angular module
    requirejs([
        'actions/editor-actions',
        'actions/list-actions',
        'actions/selection-actions',
        'services/user-service',
        'stores/list-store',
        'stores/editor-store',
        'stores/selection-store',
        'util/listen',

        'views/list/list-controller',
        'views/form/form-controller'
    ], function (editorActions,
                 listActions,
                 selectionActions,
                 userService,
                 listStore,
                 editorStore,
                 selectionStore,
                 listen,
                 listController,
                 formController) {

        var module = angular.module('reflux-angular-example', [])
            .factory('editorActions', editorActions)
            .factory('listActions', listActions)
            .factory('selectionActions', selectionActions)
            .factory('userService', userService)
            .factory('listStore', listStore)
            .factory('editorStore', editorStore)
            .factory('selectionStore', selectionStore)
            .factory('listen', listen)
            .controller('ListController', listController)
            .controller('FormController', formController);

        // Finally we can bootstrap the angular application
        angular.element(document).ready(function () {

            angular.bootstrap(document, ['reflux-angular-example']);
        });
    });
});