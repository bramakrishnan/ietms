'use strict';

// app.js







var app = angular.module('app', ['ui.router','ui.bootstrap', 'ngResource'/*,'ui.select'*/]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode(!0);
    $locationProvider.hashPrefix("!");

    $urlRouterProvider.otherwise('home');
    
    $stateProvider      
	.state('ui', {
		url: '/ui',
		template: '<div ui-view class="fade-in-up"></div>'
	})
    .state('home', {
        url: '/home',
        templateUrl: 'tpl/home.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'tpl/about.html'
    })
    .state('faq', {
        url: '/faq',
        templateUrl: 'tpl/faq.html'
    })
    .state('contact', {
        //controller: 'ContactCtrl',
        url: '/contact',
        templateUrl: 'tpl/contact.html'
    })
    .state('signup', {
        //controller: 'signupCtrl',
        url: '/signup',
        templateUrl: 'tpl/signup.html'
    })
    .state('login', {
        //controller: 'loginCtrl',
        url: '/login',
        templateUrl: 'tpl/login.html'
    })
    

   /* company dashborad page controller */

    .state('company-dashboard', {
        url: '/company-dashboard',
        templateUrl: 'tpl/company_dashborad/company-dashboard.html'
    })
    .state('billing-address', {
        url: '/billing-address',
        templateUrl: 'tpl/company_dashborad/billing-address.html'
    })
    .state('vendor', {
        url: '/users/vendor',
        templateUrl: 'tpl/company_dashborad/users/vendor.html'
    })
    .state('transportadmin', {
        url: '/users/transportadmin',
        templateUrl: 'tpl/company_dashborad/users/transportadmin.html'
    })
    .state('helpdesk', {
        url: '/users/helpdesk',
        templateUrl: 'tpl/company_dashborad/users/helpdesk.html'
    })
    
    //vendor dashboard page controller 
    
    .state('vendor-dashboard', {
        url: '/vendor-dashboard',
        templateUrl: 'tpl/vendor_dashboard/vendor-dashboard.html'
    })
    .state('vendor-accept-invitation', {
        url: '/vendor-accept-invitation',
        templateUrl: 'tpl/vendor_dashboard/vendor-accept-invitation.html'
    })
    .state('vendoradmin-assigntrip-driver', {
        url: '/vendoradmin-assigntrip-driver',
        templateUrl: 'tpl/vendor_dashboard/vendoradmin-assigntrip-driver.html'
    })
    .state('vendor-create-vehicle', {
        url: '/vendor-create-vehicle',
        templateUrl: 'tpl/vendor_dashboard/vendor-create-vehicle.html'
    })
    .state('vendor-admin', {
        url: '/vendor-admin',
        templateUrl: 'tpl/vendor_dashboard/user/vendor-admin.html'
    })
    .state('vendor-user-create-driver', {
        url: '/vendor-user-create-driver',
        templateUrl: 'tpl/vendor_dashboard/user/vendor-user-create-driver.html'
    })    
      
    
    //transport admin page controller 
    
    .state('transport-admin', {
        url: '/transport-admin',
        templateUrl: 'tpl/transport_admin_dashboard/transport-admin.html'
    })  
    .state('transport-assignjob', {
        url: '/transport-assignjob',
        templateUrl: 'tpl/transport_admin_dashboard/transport-assignjob.html'
    })    
        
});


app.factory("Register", function($resource) {
    return $resource("http://localhost/ietms-webservice/api/web/v1/register-company");
});
