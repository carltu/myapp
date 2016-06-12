'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('AboutCtrl', function ($scope, $cordovaCamera, $timeout, $cordovaDialogs) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //make 3 changes
    /*comment*/
    $scope.imageTypeEnum = {
      MODEL: 1,
      SERIAL: 2,
      PROTECT: 3
    };

  //just want to see what happens in github
	$scope.takePicture = function() {
      var options = {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : false,
        encodingType : Camera.EncodingType.JPEG,
        targetWidth : 2048,
        targetHeight : 2048,
        saveToPhotoAlbum : false
      };
      $cordovaCamera.getPicture(options).then(
        function(imageUri) {
          // "file:///var/mobile/Applications/87664277-6493-4B8F-A198-5EFFB4942729/tmp/cdv_photo_001.jpg"
          console.log(imageUri);
          $scope.scan.images.push({ uri: imageUri, imageType: $scope.imageTypeEnum.PROTECT });
          $scope.scan.protectImageCount++;
          $scope.scan.protectNavMessage = "NEXT";
        }, 
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
    };
   



/*

$scope.takePicture = function() {
	var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };



  
    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });

};

*/

    $scope.someFunction = function(obj) {

      //alert(obj.id);
    }




    var init = function() {
    	$scope.scan = {
    		images: [],
    		protectImageCount: 0,
        	protectNavMessage: "SKIP PICTURE"
    	};


    $scope.itemArray = [
        {id: 1, name: '<span class="glyphicon glyphicon-envelope envelopcolor"></span> first'},
        {id: 2, name: '<span class="glyphicon glyphicon-envelope envelopcolor"></span> second'},
        {id: 3, name: '<span class="glyphicon glyphicon-envelope envelopcolor"></span> third'},
        {id: 4, name: '<span class="glyphicon glyphicon-envelope envelopcolor"></span> fourth'},
        {id: 5, name: '<span class="glyphicon glyphicon-envelope envelopcolor"></span> fifth'},
    ];

    $scope.selected = { value: $scope.itemArray[0] };









    }



 	init();






  });
