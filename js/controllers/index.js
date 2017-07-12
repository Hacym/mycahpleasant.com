angular
    .module('app')
    .controller('IndexController', IndexController);

function IndexController($http, $httpParamSerializerJQLike) {
    var vm = this;
    vm.chosenSkill = "javascript";

    vm.contactForm = {
    };

    ghost.init({
        clientId: "ghost-frontend",
        clientSecret: "cd0ea876ab55"
    });

    $http.get(ghost.url.api('posts', {limit: 5}))
        .then(function(response) {
            vm.posts = response.data.posts;
        });

    vm.submitContact = function(contactForm) {
        console.log(contactForm);

        vm.messageSent = false;
        vm.errorSending = false;

        $http({
            url: 'https://contact.mycahpleasant.com',
            method: 'POST',
            data: $httpParamSerializerJQLike(contactForm),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                vm.messageSent = true;
                vm.contactForm = {};
            }, function(error) {
                console.log(error);
                vm.errorSending = true;
                vm.sendingError = error.data.error;
            });
    }
}
