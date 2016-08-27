angular.module('waiterRater')
  .service('mainServ', function($http) {
    this.getRestaurants = function() {
      return $http({
        method: 'GET',
        url: '/restaurant'
      }).then(function(response) {
        return response;
      });
    };

    this.getServers = function(id) {
      return $http({
        method: 'GET',
        url: '/server/restaurant/' + id.toString()
      }).then(function(response) {
        return response;
      });
    };

    this.getManagers = function() {
      return $http({
        method: 'GET',
        url: '/manager'
      }).then(function(response) {
        return response;
      });
    };

    this.getServerDataManagerId = function(id) {
      return $http({
        method: 'GET',
        url: '/serverdata/manager/' + id.toString()
      }).then(function(response) {
        return response;
      });
    };

    this.postServerData = function(serverData) {
      return $http({
        method: 'POST',
        url: '/serverdata',
        data: serverData
      });
    };

    this.getServerDataServerId = function(id) {
      return $http({
        method: 'GET',
        url: '/serverdata/server/' + id.toString()
      }).then(function(response) {
        return response;
      });
    };

    this.getServerDataById = function(id) {
      return $http({
        method: 'GET',
        url: '/serverdata/' + id.toString()
      });
    };

    this.getServer = function(id) {
      return $http({
        method: 'GET',
        url: '/waiter/' + id.toString()
      });
    };

    this.AddServer = function(newServer) {
      return $http({
        method: 'POST',
        url: '/addServer',
        data: newServer
      });
    };

  });
