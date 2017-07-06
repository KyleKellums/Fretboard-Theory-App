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
    if ($scope.checkboxes[0].selected) {
      $scope.selectedChord.string1.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.checkboxes[1].selected) {
      $scope.selectedChord.string2.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.checkboxes[2].selected) {
      $scope.selectedChord.string3.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.checkboxes[3].selected) {
      $scope.selectedChord.string4.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.checkboxes[4].selected) {
      $scope.selectedChord.string5.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
    if ($scope.checkboxes[5].selected) {
      $scope.selectedChord.string6.forEach( (note) => {
        display(note.note, note.x, note.y);
      });
    }
  };

  $scope.checkboxes = [
    {name: 'check[]', value:'1', label: 'String 1', selected : false},
    {name: 'check[]', value:'2', label: 'String 2', selected : false},
    {name: 'check[]', value:'3', label: 'String 3', selected : false},
    {name: 'check[]', value:'4', label: 'String 4', selected : false},
    {name: 'check[]', value:'5', label: 'String 5', selected : false},
    {name: 'check[]', value:'6', label: 'String 6', selected : false}
    ];

    $scope.toggleSelect = function (event) {
      angular.forEach($scope.checkboxes, function(item) {
        item.selected = event.target.checked;
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








