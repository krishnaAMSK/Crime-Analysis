function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(10.794896951685763, 78.69483209017234),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position: {lat:10.794896951685763, lng:78.69483209017234}});
  marker.setMap(map);
  }