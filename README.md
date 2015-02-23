This is an example of how the Flux architecture (using reflux.js) can be combined with AngularJS.

This is mainly my first experiment using Flux / reflux, plus I wanted to find out if I could apply Flux to existing Angular projects. This is by no means a complete solution.

The example implements a simple user administration UI with a list of users and a form for editing users.

All reflux objects (actions, stores) are wrapped as angular factories, so they can use other angular services.

Since reflux does not know about the Angular digest cycle, controllers have to trigger digest themselves whenever a store changes. This is done through a listen service that wraps a reflux callback into a $scope.$evalAsync.