function(message) {
    var file3 = '';

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