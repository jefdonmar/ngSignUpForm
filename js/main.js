import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

import config from './config';

import HomeController from './controllers/home.controller.js';
import SignUpService from './services/signup.service.js';


angular
  .module('app', ['ui.router', 'mm.foundation'])
  .config(config)
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id':'uVVdW3vt1Zg2oKemVs00nrY3WPTc67gh3SvqYJXG',
        'X-Parse-REST-API-Key': 'N7QPKHLFv6UxFELQIbXLUUn45XQht0LqDebbSc9J'
      }
    }
  })
  .controller('HomeController', HomeController)
  .service('SignUpService', SignUpService)

;