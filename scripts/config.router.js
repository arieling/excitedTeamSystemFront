'use strict';

angular
  .module('urbanApp')
  .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function () {
        window.scrollTo(0, 0);
      });
      FastClick.attach(document.body);
        },
    ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // For unmatched routes
      $urlRouterProvider.otherwise('/signin');

      // Application routes
      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'views/common/layout.html',
        })

          .state('app.getStarted', {
              url: '/getStarted',
              templateUrl: 'views/getStarted.html'
          })


        .state('app.loan', {
          url: '/loan',
          templateUrl: 'views/loan.html'
        })

          .state('app.candidates', {
              url: '/candidates',
              templateUrl: 'views/candidates.html'
          })

          .state('app.candidatesToLoan', {
              url: '/candidatesToLoan',
              templateUrl: 'views/candidatesToLoan.html'
          })
        .state('app.message', {
          url: '/message',
          templateUrl: 'views/message.html'
        })
        .state('app.fund', {
          url: '/fund',
          templateUrl: 'views/fund.html'
        })
        .state('app.fundDetail', {
          url: '/fundDetail',
          templateUrl: 'views/fundDetail.html'
        })
        .state('app.account', {
          url: '/account',
          templateUrl: 'views/account.html'
        })
        .state('app.conditionDetail', {
          url: '/conditionDetail',
          templateUrl: 'views/conditionDetail.html'
        })

        .state('app.loanDetail', {
          url: '/loanDetail',
          templateUrl: 'views/loanDetail.html'
        })
        .state('app.partnerDetail', {
          url: '/partnerDetail',
          templateUrl: 'views/partnerDetail.html'
        })
        .state('app.properityDetail', {
          url: '/properityDetail',
          templateUrl: 'views/properityDetail.html'
        })





      // Apps routes
      .state('app.apps', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/apps',
        })
        .state('app.apps.calendar', {
          url: '/calendar',
          templateUrl: 'views/app-calendar.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/fullcalendar/dist/fullcalendar.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/draggable.js',
                                'vendor/moment/moment.js',
                                'vendor/fullcalendar/dist/fullcalendar.min.js',
                                'vendor/fullcalendar/dist/gcal.js'
                            ]
                        },
                {
                  name: 'ui.calendar',
                  files: [
                                'vendor/angular-ui-calendar/src/calendar.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/calendar.js');
              });
                    }]
          },
          data: {
            title: 'Calendar',
          }
        })
        .state('app.apps.gallery', {
          url: '/gallery',
          templateUrl: 'views/app-gallery.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/blueimp-gallery/css/blueimp-gallery.min.css',
                                'vendor/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
                                'vendor/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/gallery.js');
              });
                    }]
          },
          data: {
            title: 'Gallery',
          }
        })
        .state('app.apps.messages', {
          url: '/messages',
          templateUrl: 'views/app-messages.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/messages.js').then(function () {
                return $ocLazyLoad.load('scripts/services/messages.js');
              });
                    }]
          },
          data: {
            title: 'Messages',
            appClasses: 'layout-small-menu',
            contentClasses: 'no-padding'
          }
        })
        .state('app.apps.social', {
          url: '/social',
          templateUrl: 'views/app-social.html',
          data: {
            title: 'Social Profile',
          }
        })


      // Apps routes
      .state('app.extras', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/extras',
        })
        .state('app.extras.popup', {
          url: '/popup',
          templateUrl: 'views/extras-popup.html',
          data: {
            title: 'Popup',
          }
        })
        .state('app.extras.invoice', {
          url: '/invoice',
          templateUrl: 'views/extras-invoice.html',
          data: {
            title: 'Invoice',
          }
        })
        .state('app.extras.timeline', {
          url: '/timeline',
          templateUrl: 'views/extras-timeline.html',
          data: {
            title: 'Timeline',
          }
        })
        .state('app.extras.sortable', {
          url: '/sortable',
          templateUrl: 'views/extras-sortable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/sortable.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/sortable.js');
              });
                    }]
          },
          data: {
            title: 'Sortable',
          }
        })
        .state('app.extras.nestable', {
          url: '/nestable',
          templateUrl: 'views/extras-nestable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('vendor/nestable/jquery.nestable.js');
                    }]
          },
          data: {
            title: 'Nestable',
          }
        })
        .state('app.extras.search', {
          url: '/search',
          templateUrl: 'views/extras-search.html',
          data: {
            title: 'Search',
          }
        })
        .state('app.extras.changelog', {
          url: '/changelog',
          templateUrl: 'views/extras-changelog.html',
          data: {
            title: 'Changelog',
          }
        })
        .state('app.extras.blank', {
          url: '/blank',
          templateUrl: 'views/extras-blank.html',
          data: {
            title: 'Blank Pages',
          }
        })


      .state('app.widgets', {
        url: '/widgets',
        templateUrl: 'views/widgets.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                insertBefore: '#load_styles_before',
                files: [
                                'styles/climacons-font.css',
                                'vendor/checkbo/src/0.1.4/css/checkBo.min.css'
                            ]
                        },
              {
                files: [
                                'vendor/checkbo/src/0.1.4/js/checkBo.min.js'
                            ]
                        }]);
                    }]
        },
        data: {
          title: 'Widgets',
        }
      })


      .state('user', {
          templateUrl: 'views/common/session.html',
        })
        .state('user.signin', {
          url: '/signin',
          templateUrl: 'views/extras-signin.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.signup', {
          url: '/signup',
          templateUrl: 'views/extras-signup.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.forgot', {
          url: '/forgot',
          templateUrl: 'views/extras-forgot.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })

      .state('app.404', {
          url: '/404',
          templateUrl: 'views/extras-404.html',
          data: {
            title: 'Page Not Found',
            contentClasses: 'no-padding',
          }
        })
        .state('user.500', {
          url: '/500',
          templateUrl: 'views/extras-500.html',
          data: {
            appClasses: 'usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.lockscreen', {
          url: '/lockscreen',
          templateUrl: 'views/extras-lockscreen.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'usersession',
            contentClasses: 'full-height'
          }
        })
        }
    ])
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: false,
      events: false
    });
    }]);
