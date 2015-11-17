let SignUpService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/user';


  this.addUser = addUser;

  function addUser(sign) {
    this.name = sign.name;
    this.email = sign.email;
    this.website = sign.website;
    this.message = sign.message;
  }

};

SignUpService.$inject = ['$http', 'PARSE'];

export default SignUpService;