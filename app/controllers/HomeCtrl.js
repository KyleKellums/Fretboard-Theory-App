"use strict";
// console.log("HomeCtrl loaded");

app.controller('HomeCtrl', function($scope, $log, $document, $uibModal, AuthFactory, DataFactory) {

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

  $scope.chord = {name:""};

  $scope.showNotes = function(value) {
    console.log("value", value);
    $scope.selectedChord = value;
    $scope.selectedChord.string1.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    $scope.selectedChord.string2.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    $scope.selectedChord.string3.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    $scope.selectedChord.string4.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    $scope.selectedChord.string5.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    $scope.selectedChord.string6.forEach( (note) => {
      display(note.note, note.x, note.y);
    });
    // $scope.$apply();
    // console.log("selectedChord", $scope.selectedChord.name);
  };

   $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      // animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      scope: $scope,
      size: size,
      appendTo: parentElem,
      resolve: {
        chordList: function () {
          return $scope.chordList;
        }
      }
    });

  modalInstance.result.then(function (selectedItem) {
        $scope.selectedChord = selectedItem;
        $scope.showNotes($scope.selectedChord);
      }, function (selectedItem) {
        $log.info('Modal dismissed at: ' + new Date());
        // console.log("sel item", selectedItem);
      });
    };


getChords();

});

app.controller('ModalInstanceCtrl', function ($uibModalInstance, $scope, chordList) {
  $scope.chordList = chordList;
  $scope.selected = {
    item: $scope.chordList
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
