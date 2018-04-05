var name22 = 'file1 name 2';
var name33 = 'file1 name 3';
var name44 = 'file1 name 4';

function (message) {
    $timeout(function() {
      // iOS permission issue
      if (message === 'has no access to assets') {
        $cordovaDialogs.alert('Cancelled taking a picture', null, 'Camera');
      }
      else {
        $cordovaDialogs.alert(message, null, 'Camera');
      }

      $scope.imageTypeEnum = {
        MODEL: 1,
        SERIAL: 2,
        PROTECT: 3
        };



    }, 0);
  });

var name22 = 'file1 name 2';
var name33 = 'file1 name 3';
var name44 = 'file1 name 4';
