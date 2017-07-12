'use strict';

(function(){

class TheatreComponent {

   constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.TeatreData = [];

        $scope.$on('$destroy', function() {
        socket.unsyncUpdates('Theatreendpoint');
      });
}
$onInit() {
      this.$http.get('/api/theatreendpoints').then(response => {
        this.TheatreData = response.data;
        this.socket.syncUpdates('Theatreendpoint', this.TheatreData);
      });
 } 
   add() {
this.$http.post('/api/theatreendpoints',{
TheatreName: this.TheatreName,
City: this.City,
Location: this.Location,
});
 this.TheatreName='';
 this.City='';
 this.Location='';
}

remove(Theatre){
   var x = confirm('Not Going to Watch Movie ?');
  if (x) {
  this.$http.delete('/api/theatreendpoints/' + Theatre._id);
}
}
}

angular.module('yeomanappApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });

})();
