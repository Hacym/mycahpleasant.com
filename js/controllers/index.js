angular
    .module('app')
    .controller('IndexController', IndexController);

function IndexController() {
    var vm = this;
    vm.chosenSkill = "javascript";
}