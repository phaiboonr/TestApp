'use strict';

var app = angular.module('myApp', ['ui.router']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'views/partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
      url: '/list',
      templateUrl: 'views/partial-home-list.html',
      controller: 'homeController'
    })

    // nested list with just some random string data
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      // Multiple Views
      views: {

        // the main template will be placed here (relatively named)
        '': { templateUrl: 'views/partial-about.html' },

        // UI-Router assigns every view to an absolute name.
        // The structure for this is viewName@stateName.

        // the child views will be defined here (absolutely named)
        'columnOne@about': { template: 'Look I am a column!' },

        // for column two, we'll define a separate controller
        'columnTwo@about': {
          templateUrl: 'views/table-data.html',
          controller: 'scotchController'
        }

      }
    })

    // HOME STATES AND NESTED VIEWS ========================================
    .state('game', {
      url: '/guessNumber',
      templateUrl: 'views/guessTheNumber.html',
      controller: 'GuessTheNumberController'
    })

    // HOME STATES AND NESTED VIEWS ========================================
    .state('order', {
      url: '/order',
      templateUrl: 'views/order.html',
    });

});

