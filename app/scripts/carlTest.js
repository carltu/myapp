function test() {
    $timeout(function() {

    
    /*comment*/
    $scope.imageTypeEnum = {
        MODEL: 1,
        SERIAL: 2,
        PROTECT: 3
        };
    
      // iOS permission issue
      if (message === 'has no access to assets') {
        $cordovaDialogs.alert('Cancelled taking a picture', null, 'Camera');
      }
      else {
        $cordovaDialogs.alert(message, null, 'Camera');
      }
    }, 0);
  });