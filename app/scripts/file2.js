var name5 = 'file1 name 5';
var name6 = 'file1 name 6';
var name7 = 'file1 name 7';
var name8 = 'file1 name 8';

function(message) {
    $timeout(function() {
      // iOS permission issue
      if (message === 'has no access to assets') {
        $cordovaDialogs.alert('Cancelled taking a picture', null, 'Camera');
      }
      else {
        $cordovaDialogs.alert(message, null, 'Camera');
      }
    }, 0);
  });



