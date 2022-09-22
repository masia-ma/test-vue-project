{
  "id": "BZA7N501KB",
  "name": "天府三街",
  "district": "四川省成都市武侯区",
  "adcode": "510107",
  "location": {
      "Q": 30.546892,
      "R": 104.06546300000002,
      "lng": 104.065463,
      "lat": 30.546892
  },
  "address": [],
  "typecode": "190301",
  "city": [],
  "key": "四川省成都市武侯区-天府三街"
}

sendMessage('message_emergency_phone_location_address_from_task', addressObj);
sendMessage('message_emergency_selected_address_from_task', emergencyAddressObj);
sendMessage('message_emergency_address_list_from_task', emergencyAddressOptions);