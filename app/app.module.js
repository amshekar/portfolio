/* --------------------------------------------------------------------------------------------------------------------
 <copyright file="app.module.js" company="Bytes2Bots">
   Copyright 2017
 </copyright>
 <summary>
 application startup js file
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
(function (angular) {
    "use strict";

    angular.module(
        "portfolio",
        [
        "app.core"
        ]);
      //  angular.module('portfolio').run(['$rootScope', '$translate', function ($rootScope, $translate) {
        /*angular translate code start*/
        //to make the fallback language work, we have to referesh() the translate manually.
      //  $translate.refresh();

       // $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
       //     $translate.refresh();
       // });
        /*angular translate code ends*/
        
  //  }]);

})(angular);