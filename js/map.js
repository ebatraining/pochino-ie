jQuery(document).ready(function($){
  function map_initialize() {
    var latlng = new google.maps.LatLng(35.841157,140.248733);
    var map = new google.maps.Map(
      document.getElementById("g_map"),
      {
        zoom: 16,
        center: latlng
      }
    );
    var markerImg = {
       url: './images/pin.png'// 画像のパスは絶対パスかhtmlから見た相対パスとする
    };
    var marker = new google.maps.Marker({
       position: latlng,
       map: map,
       icon: markerImg
     });
    var mapStyle = [{
      "stylers": [
        { "saturation": -100 }
      ]
    }
   ];
   var mapType = new google.maps.StyledMapType(mapStyle);
   map.mapTypes.set('GrayScaleMap', mapType);
   map.setMapTypeId('GrayScaleMap');
   google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
  });
  }
  map_initialize();
});
