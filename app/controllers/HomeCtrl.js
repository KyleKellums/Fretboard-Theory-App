"use strict";
// console.log("HomeCtrl loaded");

app.controller('HomeCtrl', function($scope, $log, $document, $uibModal, $routeParams, $location, FretboardFactory, AuthFactory, DataFactory) {

  FretboardFactory.fretboard();

	let getChords = function() {
		DataFactory.getChords()
		.then( (chords) => {
			$scope.chordList = chords;
			console.log("$scope.chordList", $scope.chordList);
		});
	};

/////// DISPLAY SELECTED CHORD ON CANVAS /////////
  function display(note, x, y) {

    var c = document.getElementById("fretCanvas");
    var ctx = c.getContext("2d");


    ctx.font = "32px extra-bold Georgia";
    ctx.fillText(note, x, y);
  }

/////// GETS SELECTED CHORD, FINDS X,Y, and CALLS DISPLAY() //////
  $scope.showNotes = function(value) {
    console.log("value", value);
    FretboardFactory.fretboard();
    $scope.selectedChord = value;
    if ($scope.select.str1) {
      $scope.selectedChord.string1.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.select.str2) {
      $scope.selectedChord.string2.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.select.str3) {
      $scope.selectedChord.string3.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.select.str4) {
      $scope.selectedChord.string4.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.select.str5) {
      $scope.selectedChord.string5.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.select.str6) {
      $scope.selectedChord.string6.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
  };

  $scope.select = {
    str1: {selected:false},
    str2: {selected:false},
    str3: {selected:false},
    str4: {selected:false},
    str5: {selected:false},
    str6: {selected:false}
  };

  $scope.selectAll = function (){
    Object.keys($scope.select).forEach( (val) => {
      $scope.select[val].selected = true;
    });
  };

////////// SAVE CHORD TO USER PROFILE ///////////
  let user = AuthFactory.getUser();

  $scope.addChord = function(){
    console.log("addChord was called");
    $scope.selectedChord.uid = user;
    $scope.selectedChord.ChordID = user;

    DataFactory.addChord($scope.selectedChord)
    .then( (data) => {
    });
  };


/////////  FUNCTIONS FOR UI BOOTSTRAP MODAL //////////
   $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
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
      });
    };

getChords();

});

////////// CONTROLLER FOR UI-BOOTSTRAP MODAL ///////////
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


////////////// SAVE BUTTON /////////////////
// if ($scope.user != $scope.isLoggedIn) {
//   $('#saveBtn').hide();
// }








