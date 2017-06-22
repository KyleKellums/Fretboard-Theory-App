"use strict";
// console.log("HomeCtrl loaded");

app.controller('HomeCtrl', function($scope, $log, $document, $uibModal, $uibModalStack, AuthFactory, DataFactory) {

	let getChords = function() {
		DataFactory.getChords()
		.then( (chords) => {
			$scope.chordList = chords;
			console.log("$scope.chordList", $scope.chordList);
		});
	};

  function display(note, x, y) {
    var c = document.getElementById("fretCanvas");
    var ctx = c.getContext("2d");

    // ctx.clearRect(0, 0, c.width, c.height);
    // fretboard();

    ctx.font = "32px extra-bold Georgia";
    ctx.fillText(note, x, y);
  }

  $scope.showNotes = function(value) {
    console.log("value", value);
    var selectedChord = value;
    selectedChord.string1.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    selectedChord.string2.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    selectedChord.string3.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    selectedChord.string4.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    selectedChord.string5.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    selectedChord.string6.forEach( (note) => {
      display(note.note, note.x, note.y);
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
        chordList: function () {
          return $scope.chordList;
        }
      }
    });

	modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

   $scope.closeModal = function () {
    $uibModalStack.dismissAll("close");
  };

getChords();

});
