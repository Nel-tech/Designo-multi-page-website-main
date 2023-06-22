let map = L.map("Map-Canada", { zoomControl: false });
map.setView([43.6465, -79.38355], 20);

let map2 = L.map("Map-Australia", { zoomControl: false });
map2.setView([-30.31998, 149.78324], 20);

let map3 = L.map("map-UK", { zoomControl: false });
map3.setView([53.7097, -1.34114], 20);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  zoomControl: false,
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  zoomControl: false,
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map3);
