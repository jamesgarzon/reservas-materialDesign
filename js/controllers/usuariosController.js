angular.module('reservasApp')
.controller('usuariosCtrl', ['$scope','$mdBottomSheet', function($scope,$mdBottomSheet) {

  $scope.phones = [
        { type: 'Home', number: '(555) 251-1234' },
        { type: 'Cell', number: '(555) 786-9841' },
        { type: 'Office', number: '(555) 314-1592' }
      ];
      $scope.todos = [
        {
          face : './assets/user.png',
          cedula: '1040040896',
          nombres: 'James Danilo',
          apellidos: 'Garzón Otálvaro',
          email: 'james.garzon@udea.edu.co',
        },
        {
          face : './assets/user.png',
          cedula: '1040040896',
          nombres: 'James Danilo',
          apellidos: 'Garzón Otálvaro',
          email: '1james.garzon@udea.edu.co',
        },
        {
          face : './assets/user.png',
          cedula: '1040040896',
          nombres: 'James Danilo',
          apellidos: 'Garzón Otálvaro',
          email: '2james.garzon@udea.edu.co',
        },
        {
          face : './assets/user.png',
          cedula: '1040040896',
          nombres: 'James Danilo',
          apellidos: 'Garzón Otálvaro',
          email: '3james.garzon@udea.edu.co',
        },
        {
          face : './assets/user.png',
          cedula: '1040040896',
          nombres: 'James Danilo',
          apellidos: 'Garzón Otálvaro',
          email: '4james.garzon@udea.edu.co',
        },
      ];


}]);
