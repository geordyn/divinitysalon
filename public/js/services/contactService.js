angular.module('app')
.service('contactService', function($http){

  this.getFeedback = function () {
    return $http({
      method: 'GET',
      url: '/api/feedback'
    }).then(function (res) {
      return res.data;
    });
  };

  this.getMemberFeedback = function (memberId) {
    return $http({
      method: 'GET',
      url: '/api/feedback/' + memberId
    }).then(function (res) {
      return res.data;
    });
  };

  this.addFeedback = function (newFeedback) {
    return $http({
      method: 'POST',
      url: '/api/feedback',
      data: {
        name: newFeedback.name,
        employeeName: newFeedback.member.name,
        employee: newFeedback.member._id,
        review: newFeedback.review,
        stars: newFeedback.stars
      }
    });
  };

  this.deleteFeedback = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/feedback/' + id
    });
  };

  this.editFeedback = function (editFeedback) {
    return $http({
      method: 'PUT',
      url: '/api/feedback/' + id,
      data: {
        name: editFeedback.name,
        review: editFeedback.review,
        stars: editFeedback.stars
      }
    });
  };





});
