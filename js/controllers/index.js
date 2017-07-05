angular
    .module('app')
    .controller('IndexController', IndexController);

function IndexController($http) {
    var vm = this;
    vm.chosenSkill = "javascript";

    ghost.init({
        clientId: "ghost-frontend",
        clientSecret: "cd0ea876ab55"
    });

    $http.get(ghost.url.api('posts', {limit: 3}))
        .then(function(response) {
            console.log(response);
    });
}