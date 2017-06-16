"use strict";
console.log("HomeCtrl loaded");

app.controller('HomeCtrl', function($scope, $log, $document, $uibModal, DataFactory) {

	let getChords = function() {
		DataFactory.getChords()
		.then( (chordList) => {
			$scope.chords = chordList;
			console.log("$scope.chords", $scope.chords);
		});
	};

	 $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      // animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'HomeCtrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        chords: function () {
          return $scope.chords;
        }
      }
    });

	modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

getChords();

});
