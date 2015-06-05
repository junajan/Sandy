'use strict';

var Sandy = angular.module("sandy", ['ngRoute', 'ngResource'])
    .config([
        '$httpProvider', '$locationProvider', '$routeProvider',
        function($httpProvider, $locationProvider, $routeProvider) {

            // configure html5 like urls (without # character)
            $locationProvider.html5Mode(true);
            $httpProvider.defaults.headers.common["Content-type"] = "application/json";
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            var viewFolder = "/views/";

            $routeProvider.when("/", {
                templateUrl: viewFolder+"Dashboard.html",
                controller: "Dashboard",
                title: "Dashboard"
            })
            .when("/equity", {
                templateUrl: viewFolder+"Equity.html",
                controller: "Equity",
                title: "Equity"
            })
            .when("/log", {
                templateUrl: viewFolder+"Log.html",
                controller: "Log",
                title: "Log"
            })
            .when("/watchlist", {
                templateUrl: viewFolder+"Watchlist.html",
                controller: "Watchlist",
                title: "Watchlist"
            })
            .when("/orders", {
                templateUrl: viewFolder+"Orders.html",
                controller: "Orders",
                title: "Orders"
            })
            .otherwise({
                templateUrl: viewFolder+"/Error404.html",
                controller: "Error404",
                title: "Error 404"
            });
        }
    ])
    .run([
        '$rootScope',
        function($rootScope) {
            $rootScope.inited = false;
        }
    ]);