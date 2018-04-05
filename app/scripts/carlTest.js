function test() {
    var test1 = '';
    var this_is_my_test = '';

    var platform = 'macbook';
    var newVar = 'new Var';


    /*comment*/
    $scope.imageTypeEnum = {
        MODEL: 1,
        SERIAL: 2,
        PROTECT: 3
        };
}


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