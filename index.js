window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.4897129, lng: 126.5415358 },
    zoom: 10,
  });

  const malls = [
    { label: "A", name: "호자", lat: 33.5213648, lng: 126.8576021 },
    { label: "B", name: "제주한면가", lat: 33.5119926, lng: 126.7000175 },
    { label: "C", name: "산지물고유", lat: 33.4639791, lng: 126.3097119 },
    {
      label: "D",
      name: "넉둥베기 고사리육계장",
      lat: 33.5097192,
      lng: 126.5127264,
    },

    { label: "E", name: "다정이네김밥", lat: 33.5128284, lng: 126.519589 },
    { label: "F", name: "자양식당", lat: 33.5115627, lng: 126.5220654 },
    { label: "G", name: "장모식탁", lat: 33.4970439, lng: 126.5467587 },
    { label: "H", name: "513텐통", lat: 33.490398, lng: 126.5369705 },
    { label: "I", name: "싱푸미엔관", lat: 33.4869301, lng: 126.5345917 },
    { label: "J", name: "다오라민포", lat: 33.4980954, lng: 126.5470847 },
  ];

  const bounds = new google.maps.LatLngBounds();
  const infoWindow = new google.maps.InfoWindow();

  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map,
    });
    bounds.extend(marker.position);

    marker.addListener("click", () => {
      map.panTo(marker.position);
      infoWindow.setContent(name);
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  });

  map.fitBounds(bounds);
};
