'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', function PhoneListController(Phone) {
      this.phones = Phone.query();
      this.orderProp = 'age';

      // $http.get('phones/phones.json').then(function(response) {
      //   // The server responds by providing the data in the JSON file.
      //   //self.phones = response.data.slice(0, 5);
      //   self.phones = response.data;
      // });
    }]
  });
