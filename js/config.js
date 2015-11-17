let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.addUser',{
      url: '/',
      controller: '',
      templateUrl: 'templates/add-user.tpl.html'
    });


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;